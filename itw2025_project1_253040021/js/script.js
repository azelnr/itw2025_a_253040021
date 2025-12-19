document.addEventListener('DOMContentLoaded', function() {
    const navList = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    if (menuToggleInput && navList) {
        menuToggleInput.addEventListener('click', function() {
            navList.classList.toggle('slide'); 
        });
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navList.classList.contains('slide')) {
                     navList.classList.remove('slide');
                     menuToggleInput.checked = false; 
                }
            });
        });
    }
});