
const hero = document.getElementById('hero');
const floatingNav = document.getElementById('floatingNav');

window.addEventListener('scroll', () => {
    const trigger = hero.offsetHeight - 120;
    if (window.scrollY > trigger) {
        floatingNav.classList.remove('opacity-0', '-translate-y-8', 'pointer-events-none');
        floatingNav.classList.add('opacity-100', 'translate-y-0');
    } else {
        floatingNav.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
        floatingNav.classList.remove('opacity-100', 'translate-y-0');
    }
}, { passive: true });

// Drawer
const drawer = document.getElementById('mobileDrawer');
const backdrop = document.getElementById('drawerBackdrop');

function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('drawerClose').addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
});

// Logo fallback — show text if image 404s
document.querySelectorAll('img[alt="Purva"]').forEach(img => {
    img.addEventListener('error', function () {
        this.style.display = 'none';
        const sib = this.nextElementSibling;
        if (sib) sib.style.display = 'block';
    });
});

// Hero Background Slider
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    if (!slides.length) return;

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove("active");

        current = (current + 1) % slides.length;

        slides[current].classList.add("active");
    }, 4000);
});


window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 2500);

});

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".reveal-left, .reveal-right, .reveal-up, .reveal-scale"
    ).forEach(el => observer.observe(el));

});


document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);

            const updateCounter = () => {

                current += increment;

                if (current < target) {
                    counter.textContent = Math.floor(current) + "+";
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + "+";
                }

            };

            updateCounter();

            observer.unobserve(counter);

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));

});


