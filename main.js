// Activating Mobile Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');

// Toggling Menu by clicking in mobile menu links
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Active Menu section while scrolling
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? "<i class='bx bx-moon'></i>" : "<i class='bx bx-sun'></i>";
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
} else {
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
}

themeToggle.addEventListener('click', toggleTheme);

// Music Toggle
const musicToggle = document.getElementById('music-toggle');
const audio = document.getElementById('background-music');
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicToggle.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        audio.pause();
        musicToggle.innerHTML = "<i class='bx bx-play'></i>";
    }
}
musicToggle.addEventListener('click', toggleMusic);

// Scroll Reveal Settings
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-title', {});
sr.reveal('.home-scroll', {delay: 200});
sr.reveal('.home-img', {origin: 'right', delay: 400});
sr.reveal('.about-img', {delay: 500});
sr.reveal('.about-subtitle', {delay: 300});
sr.reveal('.about-profession', {delay: 400});
sr.reveal('.about-text', {delay: 500});
sr.reveal('.about-social-icon', {delay: 600, interval: 200});
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills-img', {delay: 400});
sr.reveal('.portfolio-img', {interval: 200});
sr.reveal('.contact-subtitle', {});
sr.reveal('.contact-text', {interval: 200});
sr.reveal('.contact-input', {delay: 400});
sr.reveal('.contact-button', {delay: 600});