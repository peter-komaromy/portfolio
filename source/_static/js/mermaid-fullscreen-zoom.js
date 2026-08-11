// ======================================================================
// --------------- FULLSCREEN_ZOOM --------------------------------------
// -- Adds zooming and panning to the fullscreen modal-------------------
// ======================================================================

(() => {
    const MAX_SCALE = 5;
    const PAD_RATIO = 0.04;

    function enableFullscreenZoom() {
        const modal = document.querySelector('.mermaid-fullscreen-modal.active');
        const svg = modal?.querySelector('.mermaid-container-fullscreen svg');
        if (!svg || svg.dataset.fsZoomBound === '1' || typeof d3 === 'undefined') {
            return;
        }

        // Reuse an existing wrapper if there is one. Otherwise wrap once.
        let wrapper = Array.from(svg.children).find(
            (el) =>
                el.tagName.toLowerCase() === 'g' &&
                (el.classList.contains('wrapper') || el.classList.contains('fs-zoom-wrapper'))
        );

        if (!wrapper) {
            svg.innerHTML = `<g class="fs-zoom-wrapper">${svg.innerHTML}</g>`;
            wrapper = svg.querySelector('g.fs-zoom-wrapper');
        }

        const vb = svg.viewBox?.baseVal;
        const x0 = vb && vb.width ? vb.x : 0;
        const y0 = vb && vb.height ? vb.y : 0;
        const w = vb && vb.width ? vb.width : svg.clientWidth || 1000;
        const h = vb && vb.height ? vb.height : svg.clientHeight || 1000;

        const box = wrapper.getBBox();
        // Paint a background only behind the fitted SVG image, not in the side letterbox.
        let bg = wrapper.querySelector('rect.fs-image-bg');

        if (!bg) {
            const vb = svg.viewBox?.baseVal;

            const bgX = vb && vb.width ? vb.x : box.x;
            const bgY = vb && vb.height ? vb.y : box.y;
            const bgW = vb && vb.width ? vb.width : box.width;
            const bgH = vb && vb.height ? vb.height : box.height;

            bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bg.setAttribute('class', 'fs-image-bg');
            bg.setAttribute('x', bgX);
            bg.setAttribute('y', bgY);
            bg.setAttribute('width', bgW);
            bg.setAttribute('height', bgH);
            bg.setAttribute('fill', '#f3f4f6');   // match your current light grey
            bg.setAttribute('pointer-events', 'none');

            wrapper.insertBefore(bg, wrapper.firstChild);
        }

        const padX = w * PAD_RATIO;
        const padY = h * PAD_RATIO;

        const zoom = d3.zoom()
            .extent([[x0, y0], [x0 + w, y0 + h]])
            .scaleExtent([1, MAX_SCALE])
            .filter((event) =>
                event.type !== 'dblclick' &&
                (!event.ctrlKey || event.type === 'wheel') &&
                !event.button
            )
            .constrain((t) => {
                let minX = x0 + w - padX - (box.x + box.width) * t.k;
                let maxX = x0 + padX - box.x * t.k;
                let minY = y0 + h - padY - (box.y + box.height) * t.k;
                let maxY = y0 + padY - box.y * t.k;

                // If content is smaller than the viewport on an axis, keep it centered.
                if (minX > maxX) {
                    const cx = x0 + (w - box.width * t.k) / 2 - box.x * t.k;
                    minX = maxX = cx;
                }
                if (minY > maxY) {
                    const cy = y0 + (h - box.height * t.k) / 2 - box.y * t.k;
                    minY = maxY = cy;
                }

                const x = Math.max(minX, Math.min(maxX, t.x));
                const y = Math.max(minY, Math.min(maxY, t.y));
                return d3.zoomIdentity.translate(x, y).scale(t.k);
            })
            .on('zoom', (event) => {
                d3.select(wrapper).attr('transform', event.transform.toString());
            });

        d3.select(svg)
            .on('.zoom', null)
            .call(zoom)
            .call(zoom.transform, d3.zoomIdentity);

        svg.dataset.fsZoomBound = '1';
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.mermaid-fullscreen-btn')) {
            return;
        }

        // Wait until the extension has cloned the SVG into the modal.
        requestAnimationFrame(() => {
            requestAnimationFrame(enableFullscreenZoom);
        });
    });
})();