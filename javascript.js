(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const helpButton = document.getElementById('help-button');
        const helpMenu = document.getElementById('help-menu');

        if (!helpButton || !helpMenu) return;

        helpButton.addEventListener('click', () => {
            const isExpanded = helpButton.getAttribute('aria-expanded') === 'true';
            helpButton.setAttribute('aria-expanded', String(!isExpanded));
            helpMenu.hidden = isExpanded;
        });
    });
})();