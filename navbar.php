<?php
session_start();
$_SESSION['loggedIn'] = true;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="img/NextGen.ico" type="image/x-icon">
    <link rel="shortcut icon" href="img/NextGen.ico" type="image/x-icon">
    <title>NextGen Capital</title>
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>
    <nav>
        <!-- Menu toggle button -->
        <div class="menu-toggle" id="menuToggle">☰</div>

        <!-- Logo and Name (visible only on mobile) -->
        <div class="mobile-logo-container">
            <img src="img/NextGen-White.png" alt="Logo" class="mobile-logo">
            <span class="mobile-name">NextGen</span>
        </div>

        <!-- Left items (navigation) -->
        <ul class="left-items">
            <li><img id="logo" src="img/NextGen-White.png" alt="Logo"></li>
            <li><a href="index.php">Welcome</a></li>
            <li><a href="index.php">NextGenAI</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <!-- Right items (user menu) -->
        <ul class="right-items">
            <?php 
        if ($_SESSION['loggedIn'] == true) {
        ?>
            <li class="dropdown">
                <a href="#">My club</a>
                <div class="dropdown-content">
                    <a href="#">Profile</a>
                    <a href="#">Subscription</a>
                    <a href="#">Settings</a>
                    <a id="logout" href="#">Logout</a>
                </div>
            </li>
            <?php } else { ?>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <?php } ?>
        </ul>
    </nav>

    <!-- Mobile menu -->
    <div id="mobileMenu">
        <span class="close-btn" id="closeMenu">X</span>
        <ul>
            <li><a href="index.php">Welcome</a></li>
            <li><a href="index.php">NextGenAI</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">About</a></li>
            <?php 
                if ($_SESSION['loggedIn'] == true) {
            ?>
            <li class="dropdown">
            <a href="#">My club <span class="dropdown-icon">▽</span></a>
                <div class="dropdown-content">
                    <a href="#">Profile</a>
                    <a href="#">Subscription</a>
                    <a href="#">Settings</a>
                    <a id="logout" href="#">Logout</a>
                </div>
            </li>
            <?php } else { ?>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
            <?php } ?>
        </ul>
    </div>

    <script src="js/navbar.js"></script>
</body>

</html>