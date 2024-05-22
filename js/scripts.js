document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const content = document.querySelector('.content');
    const toggleButton = document.getElementById('toggle-menu');
    const mainMenu = document.querySelector('.main-menu');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedItem = this;
            gsap.to(menuItems, { duration: 0.5, opacity: 0.3 });
            gsap.to(selectedItem, { duration: 0.5, opacity: 1 });
            content.innerHTML = `<h2>${this.dataset.content}</h2>`;
            gsap.from('.content h2', { duration: 1, opacity: 0, y: 50 });
        });
    });

    toggleButton.addEventListener('click', function() {
        mainMenu.classList.toggle('hidden');
    });
});
