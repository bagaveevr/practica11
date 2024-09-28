const menuBtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.menu-container');


menuBtn.addEventListener('click', function() {
    menuContainer.classList.toggle('show');
});


document.addEventListener('click', function(event) {
    if (!menuContainer.contains(event.target) && !menuBtn.contains(event.target)) {
        menuContainer.classList.remove('show');
    }
});
