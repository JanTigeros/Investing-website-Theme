document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const dropdowns = document.querySelectorAll('#mobileMenu .dropdown');
    const logo = document.querySelector('nav #logo');
    const rightMenu = document.querySelectorAll('nav .right-items a');
    const navbar = document.querySelector('nav');
    const currentPage = window.location.pathname;

    /*     if (currentPage.includes('index') || currentPage === '/') {
            logo.src = 'img/NextGen-White.png';
            navbar.classList.remove('black');
        } else {
            logo.src = 'img/NextGen.png';
            navbar.classList.add('black');
        } */

    // Toggle mobile menu on button click
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    // Close mobile menu on close button click
    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('show');
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    // Toggle dropdowns in mobile menu
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function () {
            dropdown.classList.toggle('open');
        });
    });

    // Scroll handler funkcija
    function handleScroll() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            logo.src = 'img/NextGen.png';
            mobileMenu.classList.add('mobile-menu-scrolled');
        } else {
            navbar.classList.remove('scrolled');
            if (currentPage.includes('index') || currentPage === '/') {
                logo.src = 'img/NextGen-White.png';
            }
            mobileMenu.classList.remove('mobile-menu-scrolled');
        }
    }

    let scrollListener = null;

    function toggleScrollAndAbout(shouldEnable) {
        if (shouldEnable) {
            if (!scrollListener) {
                scrollListener = handleScroll;
                window.addEventListener('scroll', scrollListener);
                handleScroll(); // takoj izvede enkrat da ustrezno nastavi stanje
            }

            if (currentPage.includes('about')) {
                navbar.classList.add('green');
                logo.src = 'img/NextGen.png';
            }
        } else {
            if (scrollListener) {
                window.removeEventListener('scroll', scrollListener);
                scrollListener = null;
            }

            navbar.classList.remove('green');
        }
    }

    // Prvi zagon glede na začetno stanje
    toggleScrollAndAbout(window.getComputedStyle(menuToggle).display === 'none');

    // Spremljaj spremembe v stilu menija
    const observer = new MutationObserver(() => {
        const isHidden = window.getComputedStyle(menuToggle).display === 'none';
        toggleScrollAndAbout(isHidden);
    });

    observer.observe(menuToggle, {
        attributes: true,
        attributeFilter: ['style', 'class']
    });

    // 👇 Dodaj to:
    window.addEventListener('resize', () => {
        const isHidden = window.getComputedStyle(menuToggle).display === 'none';
        toggleScrollAndAbout(isHidden);
    });
});