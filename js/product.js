// Product Detail Page Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Parse URL Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Default product if none found
    let product = window.products ? window.products[0] : null;

    if (productId && window.products) {
        const found = window.products.find(p => p.id == productId);
        if (found) {
            product = found;
        }
    }

    if (!product) {
        document.getElementById('detail-title').textContent = "Product Not Found";
        return;
    }

    // 2. Populate DOM
    document.title = `${product.title} - FlowCart`;
    
    // Breadcrumb
    const breadcrumb = document.getElementById('breadcrumb-current-product');
    if (breadcrumb) breadcrumb.textContent = product.title.length > 30 ? product.title.substring(0, 30) + '...' : product.title;

    // Images
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) {
        mainImg.src = product.image;
        mainImg.alt = product.title;
    }

    // Thumbnails (generate a few mock variants based on the same image)
    const thumbnailList = document.getElementById('thumbnail-list');
    const mainVideo = document.getElementById('detail-main-video');
    if (thumbnailList) {
        thumbnailList.innerHTML = ''; // clear
        
        // Add Video Thumbnail
        const videoThumbWrapper = document.createElement('div');
        videoThumbWrapper.className = 'thumb-img-wrapper active';
        videoThumbWrapper.style.position = 'relative';
        videoThumbWrapper.style.display = 'inline-block';
        videoThumbWrapper.style.cursor = 'pointer';
        
        const videoThumb = document.createElement('img');
        videoThumb.src = product.image;
        videoThumb.className = 'thumb-img active';
        videoThumb.alt = 'Product Video Thumbnail';
        videoThumb.style.opacity = '0.8';
        
        const playIcon = document.createElement('i');
        playIcon.className = 'fa-solid fa-circle-play';
        playIcon.setAttribute('aria-hidden', 'true');
        playIcon.style.position = 'absolute';
        playIcon.style.top = '50%';
        playIcon.style.left = '50%';
        playIcon.style.transform = 'translate(-50%, -50%)';
        playIcon.style.fontSize = '24px';
        playIcon.style.color = '#fff';
        playIcon.style.textShadow = '0 0 10px rgba(0,0,0,0.5)';
        playIcon.style.pointerEvents = 'none';
        
        videoThumbWrapper.appendChild(videoThumb);
        videoThumbWrapper.appendChild(playIcon);
        
        videoThumbWrapper.addEventListener('click', function() {
            document.querySelectorAll('.thumb-img, .thumb-img-wrapper').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            videoThumb.classList.add('active');
            
            if (mainImg) mainImg.style.display = 'none';
            if (mainVideo) {
                mainVideo.style.display = 'block';
                const videoEl = mainVideo.querySelector('video');
                if (videoEl && typeof videoEl.play === 'function') videoEl.play();
            }
        });
        thumbnailList.appendChild(videoThumbWrapper);
        
        // Show video by default if mainVideo exists
        if (mainImg) mainImg.style.display = 'none';
        if (mainVideo) {
            mainVideo.style.display = 'block';
            const videoEl = mainVideo.querySelector('video');
            if (videoEl && typeof videoEl.play === 'function') videoEl.play();
        }

        // Add typical image thumbnails
        const thumbnailAltTexts = [
            'Hiking boots, front view', 
            'Hiking boots, side profile', 
            'Hiking boots, sole view'
        ];
        
        for(let i=1; i<4; i++) {
            const thumb = document.createElement('img');
            thumb.src = product.image; // Reusing main image for mock
            thumb.className = 'thumb-img';
            thumb.alt = thumbnailAltTexts[i-1];
            // Different zoom crops if desired, but we just use the same
            if (i > 1) thumb.style.filter = `hue-rotate(${i*40}deg)`; // Fake different colors
            
            thumb.addEventListener('click', function() {
                // remove active
                document.querySelectorAll('.thumb-img, .thumb-img-wrapper').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
                
                if (mainVideo) {
                    mainVideo.style.display = 'none';
                    const videoEl = mainVideo.querySelector('video');
                    if(videoEl && typeof videoEl.pause === 'function') videoEl.pause();
                }
                if (mainImg) {
                    mainImg.style.display = 'block';
                    mainImg.src = this.src;
                    mainImg.style.filter = this.style.filter;
                }
            });
            thumbnailList.appendChild(thumb);
        }
    }

    // Badge
    const badgeContainer = document.getElementById('detail-badge-container');
    if (badgeContainer && product.badge) {
        let badgeClass = 'badge';
        if (product.badge === 'Lightning Deal') badgeClass += ' badge-lightning';
        else if (product.badge === 'Choice') badgeClass += ' badge-choice';
        else badgeClass += ' badge-dark';
        
        badgeContainer.innerHTML = `<span class="${badgeClass}">${product.badge}</span>`;
    }

    // Title & Ratings
    document.getElementById('detail-title').textContent = product.title;
    document.getElementById('detail-rating-val').textContent = product.rating;
    document.getElementById('detail-review-count').textContent = product.reviews;

    // Prices
    document.getElementById('detail-price').textContent = product.price.toFixed(2);
    document.getElementById('detail-orig-price').textContent = '$' + product.originalPrice.toFixed(2);
    
    const discount = Math.round((1 - (product.price / product.originalPrice)) * 100);
    document.getElementById('detail-discount').textContent = `-${discount}%`;

    // Audio Description Toggle with Captions
    const audioDescToggle = document.getElementById('audio-desc-toggle');
    const captionOverlay = document.getElementById('video-caption-overlay');

    if (audioDescToggle) {
        audioDescToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isPressed = this.getAttribute('aria-pressed') === 'true';
            if (isPressed) {
                this.setAttribute('aria-pressed', 'false');
                this.innerHTML = '<i class="fa-solid fa-audio-description"></i> Audio Description: OFF';
                if (captionOverlay) captionOverlay.style.display = 'none';
            } else {
                this.setAttribute('aria-pressed', 'true');
                this.innerHTML = '<i class="fa-solid fa-audio-description"></i> Audio Description: ON';
                if (captionOverlay) captionOverlay.style.display = 'block';
            }
        });
    }

    // Dynamic Transcript sync
    const actualVideo = mainVideo ? mainVideo.querySelector('video') : null;
    const transcriptRows = document.querySelectorAll('.transcript-row');
    
    if (actualVideo && transcriptRows.length > 0) {
        actualVideo.addEventListener('timeupdate', () => {
            const currentTime = actualVideo.currentTime;
            transcriptRows.forEach(row => {
                const start = parseFloat(row.getAttribute('data-start'));
                const end = parseFloat(row.getAttribute('data-end'));
                if (currentTime >= start && currentTime < end) {
                    row.classList.add('active');
                } else {
                    row.classList.remove('active');
                }
            });
        });
    }

    // 3. Interactions
    // Color Selection
    const colorBtns = document.querySelectorAll('.color-btn');
    const colorName = document.getElementById('selected-color-name');
    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            colorBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-checked', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-checked', 'true');
            if(colorName) colorName.textContent = this.getAttribute('aria-label');
        });
    });

    // Size Selection
    const sizeBtns = document.querySelectorAll('.size-btn');
    const sizeName = document.getElementById('selected-size-name');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            sizeBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-checked', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-checked', 'true');
            if(sizeName) sizeName.textContent = this.textContent;
        });
    });

    // Quantity Selection
    const qtyInput = document.getElementById('qty-input');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

    if (qtyInput && qtyMinus && qtyPlus) {
        qtyMinus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if(val > 1) qtyInput.value = val - 1;
        });
        qtyPlus.addEventListener('click', () => {
            let val = parseInt(qtyInput.value);
            if(val < 99) qtyInput.value = val + 1;
        });
    }

    // Add to cart animation
    const btnAddCart = document.getElementById('btn-add-cart-large');
    const cartCountBadge = document.getElementById('cart-count');
    if (btnAddCart) {
        btnAddCart.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Adding...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fa-solid fa-check"></i> Added';
                this.classList.add('success');
                
                // update fake cart
                if (cartCountBadge) {
                    let current = parseInt(cartCountBadge.textContent) || 0;
                    current += parseInt(qtyInput ? qtyInput.value : 1);
                    cartCountBadge.textContent = current;
                    
                    cartCountBadge.parentElement.classList.add('pop-anim');
                    setTimeout(() => cartCountBadge.parentElement.classList.remove('pop-anim'), 300);
                }

                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('success');
                    this.disabled = false;
                }, 2000);
            }, 600);
        });
    }
});

// Screen Reader / Text to Speech for Tab Navigation
document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') {
        const activeEl = document.activeElement;
        if (activeEl && activeEl !== document.body) {
            let textToRead = activeEl.getAttribute('aria-label') || activeEl.innerText || activeEl.value || activeEl.title;
            if (activeEl.tagName === 'IMG') {
                textToRead = activeEl.getAttribute('alt') || textToRead;
            }
            if (activeEl.tagName === 'INPUT' && activeEl.type !== 'submit' && activeEl.type !== 'button') {
                textToRead = activeEl.value || activeEl.placeholder || activeEl.getAttribute('aria-label');
            }
            if (textToRead && typeof textToRead === 'string' && textToRead.trim() !== '') {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(textToRead.trim());
                window.speechSynthesis.speak(utterance);
            }
        }
    }
});
