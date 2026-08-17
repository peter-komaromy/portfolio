// Switches the connection guide between on-premises and Fabric content.
// The data-tool tab stays selected because both platforms share one tab set.

(() => {
    const VALID_PLATFORMS = ['onprem', 'fabric'];

    function initializePlatformSwitcher() {
        const switcher = document.querySelector('[data-connection-guide-platform-switcher]');

        if (!switcher) {
            return;
        }

        const page = switcher.closest('article') || document;
        const buttons = Array.from(switcher.querySelectorAll('button[data-platform]'));
        const contentBlocks = Array.from(
            page.querySelectorAll('.connection-guide-platform-content')
        );

        if (!buttons.length || !contentBlocks.length) {
            return;
        }

        function showPlatform(platform) {
            if (!VALID_PLATFORMS.includes(platform)) {
                return;
            }

            contentBlocks.forEach((block) => {
                const isVisible = block.classList.contains(`platform-${platform}`);
                block.hidden = !isVisible;

                if (isVisible) {
                    block.removeAttribute('aria-hidden');
                } else {
                    block.setAttribute('aria-hidden', 'true');
                }
            });

            buttons.forEach((button) => {
                const isActive = button.dataset.platform === platform;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
        }

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                showPlatform(button.dataset.platform);
            });
        });

        switcher.addEventListener('keydown', (event) => {
            const currentIndex = buttons.indexOf(document.activeElement);

            if (currentIndex === -1) {
                return;
            }

            let nextIndex;

            if (event.key === 'ArrowLeft') {
                nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            } else if (event.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % buttons.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = buttons.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            buttons[nextIndex].focus();
            showPlatform(buttons[nextIndex].dataset.platform);
        });

        const defaultPlatform = switcher.dataset.defaultPlatform;
        showPlatform(VALID_PLATFORMS.includes(defaultPlatform) ? defaultPlatform : 'onprem');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePlatformSwitcher);
    } else {
        initializePlatformSwitcher();
    }
})();
