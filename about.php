<!DOCTYPE html>
<html lang="en, sl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NextGen About</title>
    <link rel="stylesheet" href="css/about.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
    <?php include 'navbar.php'; ?>
    <div class="image-container">
        <img src="img/about-us.png" alt="Background Image">
        <div class="content-overlay">
            <h2 class="overlay-text">Empower the Next Generation</h2>
            <p class="overlay-paragraph">NextGen is at the forefront of creating impactful investments in the future.
                Our focus is on identifying opportunities that ensure sustainability and drive positive change, making
                the world a better place for the generations to come.</p>
            <button class="overlay-button">Discover More About NextGen AI</button>
        </div>
    </div>
    <section class="about-milestones">
        <div class="milestone left">
            <span class="badge">01</span>
            <div class="content">
                <h3>Who We Are</h3>
                <p>We are innovators and forward-looking investors dedicated to shaping the future through breakthrough technologies, sustainable development, and a deep sense of responsibility for the generations to come.</p>
            </div>
        </div>

        <div class="milestone right">
            <span class="badge">02</span>
            <div class="content">
                <h3>Mission Statement</h3>
                <p>We are committed to driving meaningful change through cutting-edge innovation, strategic investment, and practices that prioritize long-term environmental and social impact.</p>
            </div>
        </div>

        <div class="milestone left">
            <span class="badge">03</span>
            <div class="content">
                <h3>What We Do</h3>
                <p>Our work focuses on identifying, supporting, and scaling sustainable and disruptive solutions that can transform industries while delivering measurable value.</p>
            </div>
        </div>

        <div class="milestone right">
            <span class="badge">04</span>
            <div class="content">
                <h3>Our Approach</h3>
                <p>We combine decades of financial expertise with a deep understanding of emerging technologies, creating smart strategies for impactful and future-ready investment.</p>
            </div>
        </div>

        <div class="milestone left">
            <span class="badge">05</span>
            <div class="content">
                <h3>Our Vision</h3>
                <p>Our vision is to help build a smarter, more resilient and greener world by backing ideas, people, and technologies that inspire progress on a global scale.</p>
            </div>
        </div>

        <div class="milestone right">
            <span class="badge">06</span>
            <div class="content">
                <h3>Impact</h3>
                <p>We measure success not only in numbers, but in the positive influence we enable—on people, communities, and the planet as a whole.</p>
            </div>
        </div>
    </section>
    <div class="infographic-modern">
        <!-- Floating cube backgrounds -->
        <img src="img/cube1.png" alt="Cube 1" class="bg-cube cube1" />
        <img src="img/cube2.png" alt="Cube 2" class="bg-cube cube2" />
        <img src="img/cube3.png" alt="Cube 3" class="bg-cube cube3" />

        <!-- Content -->
        <h2>Trust is the key to success</h2>
        <div class="infographic-grid">
            <div class="stat">
                <div class="icon">
                    <img src="img/about-icon1.png" alt="Assets" />
                </div>
                <div class="info">
                    <span class="number">5 billion</span>
                    <p>Assets under management</p>
                </div>
            </div>

            <div class="stat">
                <div class="icon">
                    <img src="img/about-icon2.png" alt="Investors" />
                </div>
                <div class="info">
                    <span class="number">150 thousand</span>
                    <p>Investors</p>
                </div>
            </div>

            <div class="stat">
                <div class="icon">
                    <img src="img/about-icon3.png" alt="Experience" />
                </div>
                <div class="info">
                    <span class="number">30+ years</span>
                    <p>Experience with asset management</p>
                </div>
            </div>
        </div>
    </div>
    <?php
        include 'footer.php';
    ?>
    <script src="js/smoothScroll.js"></script>
</body>

</html>