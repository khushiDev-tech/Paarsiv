const header = () => {

const headerSection = document.querySelector("#main-header");

headerSection.innerHTML = `

<!-- Top Bar -->
<div class="top-bar">
<div class="container d-flex justify-content-between align-items-center">

<div>
<a href="mailto:jsmwealth@gmail.com">jsmwealth@gmail.com</a> |
<span><i class="fas fa-phone"></i> +91-9406960918</span>
</div>

<div class="social-icoons">
<span class="me-2">Follow Us On:</span>

<a href="/JSMProject/index.php#finance-section">
<i class="fab fa-facebook-f"></i>
</a>

<a href="/JSMProject/index.php#finance-section">
<i class="fab fa-x-twitter"></i>
</a>

<a href="/JSMProject/index.php#finance-section">
<i class="fab fa-instagram"></i>
</a>

<a href="/JSMProject/index.php#finance-section">
<i class="fab fa-pinterest-p"></i>
</a>

</div>

</div>
</div>


<!-- Navigation -->
<nav class="main-nav">

<div class="containers d-flex align-items-center justify-content-between">

<!-- Logo -->
<div class="logo">
<a href="index.php">
<img src="static/image/jsm.logo.png" alt="JSM Wealth Logo">
</a>
</div>


<!-- Mobile Toggle -->
<button class="menu-toggle" id="menuToggle">
☰
</button>


<!-- Navigation Links -->
<ul class="nav-links align-items-center mb-0" id="navLinks">

<li>
<a href="index.php">Home</a>
</li>

<li>
<a href="index.php#about-section">About Us</a>
</li>

<li>
<a href="index.php#services-section">JSM Wealth</a>
</li>

<li>
<a href="index.php#services-sections">JSM Insurance</a>
</li>

<li>
<a href="sip.php">SMART SIP 360</a>
</li>

<li>
<a href="index.php#finance-section">Contact</a>
</li>

</ul>


<a href="index.php#finance-section" class="btn-quote">
GET A QUOTE
</a>

</div>

</nav>

`;

}

header();


// Mobile Menu Toggle
// const toggle = document.getElementById("menuToggle");
// const nav = document.getElementById("navLinks");

// if(toggle){
// toggle.addEventListener("click", () => {
// nav.classList.toggle("active");
// });
// }