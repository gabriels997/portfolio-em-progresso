function showConhec() {
    const conhecimentos = document.querySelectorAll('.js-conhecimentos dd');
    conhecimentos[0].nextElementSibling.classList.add('ativo');

    function showContent() {
        this.nextElementSibling.classList.toggle('ativo')
    }

    conhecimentos.forEach((item) => {
        item.addEventListener('click', showContent)
    });
}
showConhec();

function scrollToSec() {
    const linkInterno = document.querySelectorAll('.js-nav a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linkInterno.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};
scrollToSec();

const section = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.9;
section[0].classList.add('animar');

 
function animaScroll() {
    section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - windowMetade) < 0;
        if(sectionVisible) {
            section.classList.add('animar')
        } else {
            section.classList.remove('animar')
        }
    });
}

window.addEventListener('scroll', animaScroll)
