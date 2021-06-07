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
    currentSlide = modulo(currentSlide + direction, 6);

    const image = document.querySelectorAll('.image');
    image.forEach(images => images.style.display = "none");
    image[currentSlide].style.display = "flex";
}

function modulo(num, mod) {
    return (num % mod + mod) % mod;
}
