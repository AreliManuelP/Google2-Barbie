document.addEventListener('DOMContentLoaded', function() {
    const menuLink = document.querySelector('.menu a');
    const submenu = document.getElementById('submenu');

    menuLink.addEventListener('click', function(event) {
        event.preventDefault();
        submenu.classList.toggle('hidden');
    });

    document.addEventListener('click', function(event) {
        if (!submenu.contains(event.target) && !menuLink.contains(event.target)) {
            submenu.classList.add('hidden');
        }
    });
});