// selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 720;
    header.classList.toggle('active', windowPosition)
})

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 720;
    hamburgerMenu.classList.toggle('activee', windowPosition)
})

hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})