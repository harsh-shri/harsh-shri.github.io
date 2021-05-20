if (window.innerWidth <=600) {
ScrollReveal().reveal('section', {
    interval: 30,
    reset: false
});
ScrollReveal().reveal('header', {
    interval: 30,
    reset: false
});
ScrollReveal().reveal('footer', {
    interval: 20,
    reset: false
});
}
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
});

let currentSlide = 0;
function moveslide(direction) {
    currentSlide = modulo(currentSlide + direction, 10);

    const image = document.querySelectorAll('.image');
    image.forEach(images => images.style.display = "none");
    image[currentSlide].style.display = "flex";
}

function modulo(num, mod) {
    return (num % mod + mod) % mod;
}