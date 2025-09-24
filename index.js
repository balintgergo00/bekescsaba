function info(a) {
        document.getElementById('munkacsymuzeum').style.display="none"
        document.getElementById('szechenyiliget').style.display="none"
        document.getElementById('kattemplom').style.display="none"
        document.getElementById('wenckheim').style.display="none"
        document.getElementById('arpadfurdo').style.display="none"
        document.getElementById('csabapark').style.display="none"

        document.getElementById('videostop').pause();
    

        document.getElementById('leiras').style.display="block"
        document.getElementById('bezar').style.display="block"
        document.getElementById(a).style.display="block"
        if(a=="arpadfurdo"){
            document.getElementById('videostop').play();
        }
}
function bezar(){
        document.getElementById('leiras').style.display="none";
        document.getElementById('videostop').pause();
}

// Scroll animation
 document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    
    // Smooth scrolling for CTA button
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


// Animation on scroll for new elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with animation
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Add event listener for scroll
window.addEventListener('scroll', animateOnScroll);
// Initial check on page load
window.addEventListener('load', animateOnScroll);