// Image Lightbox Gallery for Thread Docs
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
    <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <div class="lightbox-caption"></div>
    </div>
    `;
    document.body.appendChild(lightbox);

    // Get all clickable images
    const clickableImages = document.querySelectorAll('.project-card-image, .project-hero, .progress-image');
    let currentImageIndex = 0;
    let imageArray = Array.from(clickableImages);

    // Add click functionality to images
    clickableImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentImageIndex = index;
            showLightbox(this.src, this.alt);
        });
    });

    function showLightbox(src, alt) {
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const caption = lightbox.querySelector('.lightbox-caption');
        
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        caption.textContent = alt;
        
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close lightbox
    lightbox.querySelector('.lightbox-close').addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) hideLightbox();
    });

    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') hideLightbox();
            if (e.key === 'ArrowRight') lightbox.querySelector('.lightbox-next').click();
            if (e.key === 'ArrowLeft') lightbox.querySelector('.lightbox-prev').click();
        }
    });
});