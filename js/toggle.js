document.addEventListener('DOMContentLoaded', function() {
    const sidePanel = document.getElementById('side-panel');
    const mainPanel = document.getElementById('main-Panel');
    const toggleSidePanelBtn = document.getElementById('toggle-side-panel');
    const toggleMainPanelBtn = document.getElementById('toggle-main-panel');

    toggleSidePanelBtn.addEventListener('click', function() {
        sidePanel.classList.toggle('hidden');
        mainPanel.classList.toggle('hidden');
    });

    toggleMainPanelBtn.addEventListener('click', function() {
        sidePanel.classList.toggle('hidden');
        mainPanel.classList.toggle('hidden');
    });
});
