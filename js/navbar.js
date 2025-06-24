// js/navbar.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLogo = document.querySelector('.mobile-logo');
    const closeMenu = document.getElementById('closeMenu');
    const dropdowns = document.querySelectorAll('#mobileMenu .dropdown');
    const logo = document.querySelector('nav #logo');
    const navbar = document.querySelector('nav');
    const currentPage = window.location.pathname;

    // === STATE SETUP ===
    const NAVBAR_STYLES = {
        white: {
            logo: 'img/NextGen-White.png',
            class: 'white',
        },
        black: {
            logo: 'img/NextGen.png',
            class: 'black',
        },
        green: {
            logo: 'img/NextGen.png',
            class: 'green',
        },
    };

    const MOBILE_NAVBAR_STYLES = {
        white: {
            logo: 'img/NextGen-White.png',
            class: 'mobile-white',
        },
        black: {
            logo: 'img/NextGen.png',
            class: 'mobile-black',
        },
        green: {
            logo: 'img/NextGen.png',
            class: 'mobile-green',
        },
    };

    let scrollListener = null;
    let currentStyle = null;

    // === MENU TOGGLING ===
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('show'));
    closeMenu.addEventListener('click', () => mobileMenu.classList.remove('show'));

    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => dropdown.classList.toggle('open'));
    });

    // === SCROLL HANDLER ===
    function handleScroll() {
        const isMobile = isMobileView();
        const scrolled = window.scrollY > 0;

        if (scrolled) {
            if (isMobile) {
                navbar.classList.add('scrolled-mobile');
                logo.src = MOBILE_NAVBAR_STYLES.black.logo;
                if (mobileLogo) mobileLogo.src = MOBILE_NAVBAR_STYLES.black.logo;
            } else {
                navbar.classList.add('scrolled');
                logo.src = NAVBAR_STYLES.black.logo;
            }
        } else {
            navbar.classList.remove('scrolled', 'scrolled-mobile');
            if (currentStyle) {
                logo.src = NAVBAR_STYLES[currentStyle].logo;
                if (mobileLogo) mobileLogo.src = MOBILE_NAVBAR_STYLES[currentStyle].logo;
            }
        }
    }

    // === UTIL: VIEW DETECTION ===
    function isMobileView() {
        return window.getComputedStyle(menuToggle).display !== 'none';
    }

    // === SET MOBILE NAVBAR STYLE ===

    function setMobileNavbarStyle(style) {
        if (!MOBILE_NAVBAR_STYLES[style]) return;
    
        // Remove all mobile style classes
        Object.values(MOBILE_NAVBAR_STYLES).forEach(({ class: cls }) => navbar.classList.remove(cls));
    
        // Add desired mobile style
        navbar.classList.add(MOBILE_NAVBAR_STYLES[style].class);
        
        // Posodobi mobilni logotip (če obstaja)
        const mobileLogo = document.querySelector('.mobile-logo');
        if (mobileLogo) {
            mobileLogo.src = MOBILE_NAVBAR_STYLES[style].logo;
        }
    
        currentStyle = style; // shranimo stil, da se lahko znova uporabi
    }

    // === SET NAVBAR STYLE ===
    function setNavbarStyle(style) {
        if (!NAVBAR_STYLES[style]) return;
    
        // Remove all desktop style classes
        Object.values(NAVBAR_STYLES).forEach(({ class: cls }) => navbar.classList.remove(cls));
    
        // Add desired desktop style
        navbar.classList.add(NAVBAR_STYLES[style].class);
        logo.src = NAVBAR_STYLES[style].logo;
    
        // Posodobi tudi mobilni stil (če si v mobilnem pogledu)
        if (isMobileView()) {
            setMobileNavbarStyle(style);
        }
    
        currentStyle = style;
    }

    // === TOGGLE LOGIC FOR BEHAVIOR DEPENDING ON VIEW ===
    function updateNavbarBehavior() {
        const isMobile = isMobileView();
    
        // === SCROLL LISTENER SETUP (vedno aktiven) ===
        if (!scrollListener) {
            scrollListener = handleScroll;
            window.addEventListener('scroll', scrollListener);
        }
    
        handleScroll(); // Scroll state
    
        // === LOGIC ===
        if (isMobile) {
            // --- MOBILE LOGIC ---
            navbar.classList.remove('scrolled');
        } else {
            // --- DESKTOP LOGIC ---
            navbar.classList.remove('scrolled-mobile');
    
            // RESET STYLE
            if (currentStyle) {
                setNavbarStyle(currentStyle);
            }
        }
    }

    // === INITIAL LOGIC ===
    // Decide style per page here
    if (currentPage.includes('about')) {
        setMobileNavbarStyle('green');
        setNavbarStyle('green');
    } else if (currentPage.includes('index') || currentPage === '/') {
        setMobileNavbarStyle('white');
        setNavbarStyle('white');
    } else {
        setMobileNavbarStyle('black');
        setNavbarStyle('black');
    }

    updateNavbarBehavior();

    // === OBSERVERS ===
    const observer = new MutationObserver(updateNavbarBehavior);
    observer.observe(menuToggle, { attributes: true, attributeFilter: ['style', 'class'] });

    window.addEventListener('resize', updateNavbarBehavior);
});