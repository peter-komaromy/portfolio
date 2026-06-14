"""
====================================================================================
------ Custom Extensions -----------------------------------------------------------
------------------------------------------------------------------------------------
   Kept here to reduce noise in conf.py:
      # BootstrapTooltip Role
      # ColRefOpen Role
      # Vonly Directive (for versions that include section headers)
      # CustomCallout Directive (not used currently, can be deleted later)
      # ColRefDetail Directive
      # JS init for tooltips and popovers
====================================================================================
To understand docutil nodes and Sphinx API, see documentation:
https://www.sphinx-doc.org/en/master/development/tutorials/extending_syntax.html
https://www.sphinx-doc.org/en/master/extdev/markupapi.html
"""

from __future__ import annotations

import html
import re

from docutils import nodes
from docutils.parsers.rst import Directive, directives, roles
from sphinx.util.docutils import SphinxDirective, SphinxRole
from sphinx.util.nodes import nested_parse_with_titles

# -----------------------------------------------------------

def _slug(s: str) -> str:
    s = s.strip()
    s = re.sub(r"[^0-9A-Za-z_-]+", "-", s)
    return s.strip("-").lower()

# -------------------------------------------------------------

class BootstrapTooltipRole(SphinxRole):  # declared in a class -- extends the SphinxRole class
    """
    Usage:
      :bstooltip:`Label <Tooltip text>`
      :bstooltip:`Same label and tip`
    
    must define a run method (requirement);
    the main logic of the role; return: a tuple with a list of inline-level docutils nodes (and optionally, a list of system message nodes)
    """

    def run(self):                       
        text = self.text.strip()
        if "<" in text and text.endswith(">"):
            label, tip = text.split("<", 1)
            label = label.strip()
            tip = tip[:-1].strip()
        else:
            label = tip = text

        label_html = html.escape(label)
        tip_html = html.escape(tip, quote=True)

        raw = (
            f'<span class="has-bstooltip" data-bs-toggle="tooltip" '
            f'title="{tip_html}">{label_html}</span>'
        )
        return [nodes.raw("", raw, format="html")], []

# -----------------------------------------------------------------

class ColRefOpenRole(SphinxRole):
    """
    Usage:
      View details: :colrefopen:`my_detail_id`               -> icon-only button
      View details: :colrefopen:`View logic <my_detail_id>`  -> text button
    """
    def run(self):
        text = self.text.strip()

        if "<" in text and text.endswith(">"):
            label, target = text.split("<", 1)
            label = label.strip()
            target = target[:-1].strip()
        else:
            label = ""
            target = text

        target = _slug(target)
        label_html = html.escape(label)

        if label_html:
            raw = (
                f'<button type="button" class="btn btn-sm btn-outline-deepblue btn-narrow colref-open" '
                f'data-colref-open="{target}">{label_html}</button>'
            )
        else:           
            raw = (
                f'<button type="button" class="colref-open-icon colref-open" '
                f'data-colref-open="{target}" data-bs-toggle="tooltip" '
                f'title="View details" aria-label="View details">'
                f'<i class="fa-solid fa-circle-info"></i></button>'
            )

        return [nodes.raw("", raw, format="html")], []


# ---------------------------------------------------------------------------

class ColRefDetailDirective(Directive):
    """
    Usage:
      .. colref-detail:: my_detail_id
         :title: Case Number

         (full content shown in offcanvas)
    """
    has_content = True
    required_arguments = 1
    option_spec = {"title": directives.unchanged_required}

    def run(self):
        self.assert_has_content()

        detail_id = _slug(self.arguments[0])
        title_text = html.escape(self.options.get("title", detail_id), quote=True)

        start = (
            f'<div id="colref-detail-{detail_id}" class="colref-detail" '
            f'data-colref-title="{title_text}" hidden>'
        )
        end = "</div>"

        container = nodes.container()
        container += nodes.raw("", start, format="html")
        self.state.nested_parse(self.content, self.content_offset, container)
        container += nodes.raw("", end, format="html")
        return [container]


# --------------------------------------------------------------------------

class VOnlyDirective(SphinxDirective):
    has_content = True
    required_arguments = 1

    def run(self):
        wanted = self.arguments[0].strip()
        current = self.config.docs_version

        if wanted != current:
            return []

        container = nodes.Element()
        nested_parse_with_titles(
            self.state,
            self.content,
            container,
            self.content_offset,
        )
        return container.children

# ---------------------------------------------------------------------------

class CustomCalloutDirective(Directive):
    has_content = True
    option_spec = {
        "title": directives.unchanged_required,
        "icon": directives.unchanged,
    }

    def run(self):
        self.assert_has_content()
        title_text = html.escape(self.options.get("title", "Note"))
        icon_class = html.escape(self.options.get("icon", ""), quote=True)

        outer_html_start = f"""
<div class="custom-callout-outer">
  <div class="callout-header">
    <i class="{icon_class}"></i>
    <span class="callout-title">&nbsp;{title_text}</span>
  </div>
  <div class="custom-callout-body">
"""
        outer_html_end = """
  </div>
</div>
"""
        container = nodes.container()
        container += nodes.raw("", outer_html_start, format="html")
        self.state.nested_parse(self.content, self.content_offset, container)
        container += nodes.raw("", outer_html_end, format="html")
        return [container]


# -----------------------------------------------------------------------------

_INLINE_BOOTSTRAP_INIT = r"""
document.addEventListener('DOMContentLoaded', function() {
  function popoverOptions(el, trigger) {
    const container = el.getAttribute('data-bs-container') || 'body';
    const placement = el.getAttribute('data-bs-placement');
    const offset = el.getAttribute('data-bs-offset');

    const opts = {
      container: container,
      html: true,
      trigger: trigger
    };

    if (placement) {
      opts.placement = placement;
    }
    if (offset) {
      opts.offset = offset;
    }

    return opts;
  }

  // Tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function(el){
    new bootstrap.Tooltip(el);
  });

  // Popovers: interactive (clickable)
  document.querySelectorAll('[data-bs-toggle="popover"].popover-interactive').forEach(function(el){
    new bootstrap.Popover(el, popoverOptions(el, 'click'));
  });

  // Popovers: default (focus-based)
  document.querySelectorAll('[data-bs-toggle="popover"]:not(.popover-interactive)').forEach(function(el){
    new bootstrap.Popover(el, popoverOptions(el, 'focus'));
  });

  // Keep only one popover open at a time
  document.addEventListener('show.bs.popover', function (e) {
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el){
      if (el !== e.target) {
        const inst = bootstrap.Popover.getInstance(el);
        if (inst) inst.hide();
      }
    });
  });

  // Close popovers on outside click (but allow clicks inside popovers and on triggers)
  document.addEventListener('click', function (e) {
    if (e.target.closest('.popover')) return;
    if (e.target.closest('[data-bs-toggle="popover"]')) return;

    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el){
      const inst = bootstrap.Popover.getInstance(el);
      if (inst) inst.hide();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el){
      const inst = bootstrap.Popover.getInstance(el);
      if (inst) inst.hide();
    });
  });
});
"""


# ------------------------------------------------------------------------------

def setup(app):     # plug the new role/directive to Sphinx (requirement)
    # Roles
    roles.register_local_role("bstooltip", BootstrapTooltipRole())
    roles.register_local_role("colrefopen", ColRefOpenRole())

    # Directives
    app.add_directive("callout", CustomCalloutDirective)
    app.add_directive("colref-detail", ColRefDetailDirective)
    app.add_config_value("docs_version", "fabric", "env")
    app.add_directive("vonly", VOnlyDirective)

    # JS init
    app.add_js_file(None, body=_INLINE_BOOTSTRAP_INIT)

    return {"parallel_read_safe": True, "parallel_write_safe": True}




