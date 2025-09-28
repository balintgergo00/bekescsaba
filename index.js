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

// Animation on scroll
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






// Mobile menu functionality
        const mobileToggle = document.getElementById('mobileToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileToggle.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking on overlay
        mobileNavOverlay.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            
            // Reset icon
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                
                // Reset icon
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });


// --- Rendezvenyek.html gallery lightbox ---
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-container .gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const imageCounter = document.getElementById('imageCounter');
    let currentIndex = 0;

    if (galleryItems.length && lightbox && lightboxImage) {
        function showLightbox(index) {
            currentIndex = index;
            lightboxImage.src = galleryItems[index].src;
            lightboxImage.alt = galleryItems[index].alt;
            imageCounter.textContent = `${index + 1} / ${galleryItems.length}`;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        galleryItems.forEach((img, idx) => {
            img.addEventListener('click', () => showLightbox(idx));
        });

        document.getElementById('lightboxClose').onclick = function() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        document.getElementById('lightboxPrev').onclick = function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showLightbox(currentIndex);
        };

        document.getElementById('lightboxNext').onclick = function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showLightbox(currentIndex);
        };

        // Close on background click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                    showLightbox(currentIndex);
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % galleryItems.length;
                    showLightbox(currentIndex);
                }
            }
        });
    }
});