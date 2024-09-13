<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Dropdowns</title>
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>
    <nav>
        <div class="menu-toggle" id="menuToggle">☰</div>
        <ul class="left-items">
            <li><a href="#">LOGO</a></li>
            <li class="dropdown">
                <a href="#">Welcome</a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="#">Business</a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <ul class="right-items">
            <li class="dropdown">
                <a href="#">My club</a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li><a href="#">Icon</a></li>
        </ul>
    </nav>

    <!-- Mobilni meni -->
    <div id="mobileMenu">
        <span class="close-btn" id="closeMenu">X</span>
        <ul>
            <li><a href="#">LOGO</a></li>
            <li class="dropdown">
                <a href="#">Welcome <span class="dropdown-icon">▽</span></a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="#">Business <span class="dropdown-icon">▽</span></a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About</a></li>
            <li class="dropdown">
                <a href="#">My club <span class="dropdown-icon">▽</span></a>
                <div class="dropdown-content">
                    <a href="#">Submenu 1</a>
                    <a href="#">Submenu 2</a>
                    <a href="#">Submenu 3</a>
                </div>
            </li>
            <li><a href="#">Icon</a></li>
        </ul>
    </div>

    <script src="js/navbar.js"></script>
</body>

</html>