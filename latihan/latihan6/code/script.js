const menuToggleInput = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggleInput.addEventListener('click', function() {
    nav.classList.toggle('slide'); 
});