document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const dropdowns = document.querySelectorAll('#mobileMenu .dropdown');
    const logo = document.querySelector('nav #logo');
    const rightMenu = document.querySelectorAll('nav .right-items a');
    const navbar = document.querySelector('nav');
    const currentPage = window.location.pathname;

    if (currentPage.includes('index') || currentPage.includes('')) {
        logo.src = 'img/NextGen-White.png';
        navbar.classList.remove('black');
    } 
    else {
        logo.src = 'img/NextGen.png';
        navbar.classList.add('black');
    }

    // Toggle mobile menu on button click
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    // Close mobile menu on close button click
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    // Toggle dropdowns in mobile menu
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('open');
        });
    });

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            logo.src = 'img/NextGen.png';
        } else {
            navbar.classList.remove('scrolled');
            if (currentPage.includes('index')) {
                logo.src = 'img/NextGen-White.png';
            }
        }
    });
});