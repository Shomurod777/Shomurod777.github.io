window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        setTimeout(() => {
            preloader.style.transition = "opacity 0.6s ease";
            preloader.style.opacity = "0";
            setTimeout(() => { preloader.style.display = "none"; }, 600);
        }, 800);
    }
});

/* ========================= */
/* PARTICLE EFFECT */
/* ========================= */
const particleContainer = document.getElementById("particle-container");
if (particleContainer) {
    function createParticle() {
        const p = document.createElement("div");
        p.classList.add("particle");
        const size = Math.random() * 12 + 8;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.animation = `floatUp ${5 + Math.random() * 8}s linear infinite`;
        particleContainer.appendChild(p);
        setTimeout(() => p.remove(), 12000);
    }
    setInterval(createParticle, 300);
}

/* ========================= */
/* SCROLL ACTIVE MENU */
/* ========================= */
const menuLinks = document.querySelectorAll(".side-menu a");
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
    });
    menuLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) link.classList.add("active");
    });
});

/* ========================= */
/* CONTACT FORM */
/* ========================= */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
if (form && status) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.textContent = "Sending message...";
        status.style.color = "#00ccff";
        setTimeout(() => {
            status.textContent = "Thank you for your message! I'll get back to you soon.";
            status.style.color = "#0f0";
            form.reset();
        }, 1500);
    });
}






document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById('bg-video');
    const videoSource = document.getElementById('video-source');

    const videoList = [
      'videos/998175465.mp4',
      'videos/102852-661022019_medium.mp4',
      'videos/80645-572367655.mp4'
    ];

    // 1. Tasodifiy indeksni hisoblash
    let currentVideoIndex = Math.floor(Math.random() * videoList.length);
    
    // Konsolda tekshirish uchun (F12 -> Console bo'limiga qarang)
    console.log("Tanlangan video indeksi: " + currentVideoIndex);
    console.log("Fayl yo'li: " + videoList[currentVideoIndex]);

    // 2. Videoni yuklash
    videoSource.src = videoList[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play().catch(e => console.log("Avtomatik ijro to'sildi"));

    // 3. Video tugaganda keyingisiga o'tish
    videoPlayer.addEventListener('ended', () => {
        currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
        videoSource.src = videoList[currentVideoIndex];
        videoPlayer.load();
        videoPlayer.play();
    });
});