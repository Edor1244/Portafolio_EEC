let previousSection = null;

// obtener sección actual que está en la vista del cliente
const getCurrentSection = (currentSection) => {
    const sections = document.body.querySelectorAll('section')

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            currentSection = section;
        }
    });

    return currentSection;
};


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');

    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 75,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Obtener target de la sección del cliente
    const scrollTriggerLinks = document.querySelectorAll('a.js-scroll-trigger');

    // Obtener atributo href de cada enlace haciendo la iteración de cada enlace
    scrollTriggerLinks.forEach(link => {
        const target = link.getAttribute('href');
    });

    let timeout = null;

    window.addEventListener('scroll', () => {
        clearTimeout(timeout);
    
        timeout = setTimeout(() => {
            let currentSection = getCurrentSection();

            if (currentSection == null) {
                currentSection = 'interests';
            }
            if (currentSection.id == 'interests') {
                const txt_Interes = document.getElementById('Txt_Interes');
                if (!txt_Interes.classList.contains('completed')) {
                  txt_Interes.classList.add('animate', 'completed');
                }
              }else {
                const txt_Interes = document.getElementById('Txt_Interes');
                txt_Interes.classList.remove('animate');
            }
        }, 100);
    });

    // Mostrar sección actual en la consola cuando se desplaza
    window.addEventListener('scroll', () => {
        const currentSection = getCurrentSection();
        if (currentSection !== previousSection) {
            previousSection = currentSection;
        }
    });

});