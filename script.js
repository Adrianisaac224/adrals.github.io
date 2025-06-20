document.addEventListener('DOMContentLoaded', function() {
    // Sample gallery images - you'll replace these with your own
    const galleryImages = [
        { src: 'suit1.jpg', alt: 'Bespoke suit mending example 1' },
        { src: 'suit2.jpg', alt: 'Bespoke suit mending example 2' },
        { src: 'suit3.jpg', alt: 'Bespoke suit mending example 3' },
        { src: 'suit4.jpg', alt: 'Bespoke suit mending example 4' },
        { src: 'suit5.jpg', alt: 'Bespoke suit mending example 5' },
        { src: 'suit6.jpg', alt: 'Bespoke suit mending example 6' }
    ];
    
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Function to load gallery images
    function loadGallery() {
        galleryContainer.innerHTML = '';
        
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'lazy';
            
            galleryItem.appendChild(img);
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Initial load
    loadGallery();
    
    // Function to add a new image to the gallery
    window.addNewImage = function(src, alt) {
        galleryImages.unshift({ src, alt }); // Add to beginning of array
        loadGallery();
    };
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});