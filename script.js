// Smooth scrolling
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// --- SCRIPT DE ANIMAÇÃO CORRIGIDO ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Anima as barras de habilidade dentro do elemento que se tornou visível
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
mobileMenuButton.addEventListener('click', function() {
    // Lógica para um menu real seria implementada aqui
    alert('O menu móvel apareceria aqui em uma implementação completa.');
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sua mensagem foi enviada.Logo entro em contato com você');
});

// Initial animations on load for the hero section
document.addEventListener('DOMContentLoaded', () => {
     const heroElements = document.querySelectorAll('#home .fade-in');
     heroElements.forEach((el, index) => {
         setTimeout(() => {
             el.classList.add('visible');
         }, index * 200);
     });
});

