// App Logic for FlowCart (WCAG 2.2 Compliant)

document.addEventListener('DOMContentLoaded', () => {
    
    // DOM Elements
    const productGrid = document.getElementById('product-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const cartCountBadge = document.getElementById('cart-count');
    const cartLiveCount = document.getElementById('cart-live-count');
    const pillsContainer = document.getElementById('pills-container');
    const searchForm = document.getElementById('search-form');
    
    // State
    let cartCount = 0;
    
    // Render Products Function
    function renderProducts(productsList, targetGrid = productGrid) {
        targetGrid.innerHTML = ''; // Clear current grid
        
        productsList.forEach((product, index) => {
            // Determine badge HTML
            let badgeHTML = '';
            if (product.badge === 'Lightning Deal') {
                // 1.4.5 Accessible Badge
                badgeHTML = `
                <div class="badge badge-lightning" aria-hidden="true"><i class="fa-solid fa-bolt"></i> Deal</div>
                <span class="sr-only">Product flag: Lightning Deal</span>`;
            } else if (product.badge === 'Choice') {
                badgeHTML = `
                <div class="badge badge-choice" aria-hidden="true">Choice</div>
                <span class="sr-only">Product flag: Choice</span>`;
            } else if (product.badge) {
                badgeHTML = `
                <div class="badge" style="background-color: var(--dark)" aria-hidden="true">${product.badge}</div>
                <span class="sr-only">Product flag: ${product.badge}</span>`;
            }
            
            // Create Card Element
            const card = document.createElement('div');
            card.className = 'product-card';
            // Important for accessibility: if card wrapper is focusable, maybe a link. But we have a button inside.
            
            // Stagger animation delay
            card.style.animation = `pop 0.4s ease-out forwards`;
            card.style.animationDelay = `${index * 0.05}s`;
            card.style.opacity = '0';
            
            // 1.1.1 Alt text for image uses product.title
            card.innerHTML = `
                ${badgeHTML}
                <div class="product-img-wrapper">
                    <a href="product-detail.html?id=${product.id}" tabindex="-1" aria-hidden="true">
                        <img src="${product.image}" loading="lazy" alt="${product.title}" class="product-img">
                    </a>
                </div>
                <div class="product-info">
                    <a href="product-detail.html?id=${product.id}" class="product-title-link" style="text-decoration: none;">
                        <h3 class="product-title">${product.title}</h3>
                    </a>
                    <div class="product-rating" aria-label="Rating: ${product.rating} out of 5 stars from ${product.reviews} reviews">
                        <div class="stars" aria-hidden="true">
                            ★★★★★
                        </div>
                        <span aria-hidden="true">${product.rating}</span>
                        <span aria-hidden="true">(${product.reviews})</span>
                    </div>
                    <div class="product-price-row">
                        <div class="price-container">
                            <span class="current-price" aria-label="Current price $${product.price.toFixed(2)}">$${product.price.toFixed(2)}</span>
                            <span class="original-price" aria-label="Original price $${product.originalPrice.toFixed(2)}">$${product.originalPrice.toFixed(2)}</span>
                        </div>
                        <button class="add-cart-btn" data-id="${product.id}" aria-label="Add ${product.title} to cart">
                            <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // Append Card
            targetGrid.appendChild(card);
            
            // Fix visibility after animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.animation = 'none';
            }, 400 + (index * 50));
        });
        
        // Re-attach event listeners to new buttons
        attachCartListeners();
    }
    
    // Add to Cart Functionality
    function attachCartListeners() {
        const addCartBtns = document.querySelectorAll('.add-cart-btn');
        addCartBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                // Animation for button
                this.classList.add('pop-anim');
                setTimeout(() => this.classList.remove('pop-anim'), 300);
                
                // Update Cart Count
                cartCount++;
                cartCountBadge.textContent = cartCount;
                
                // Announce to screen readers
                if (cartLiveCount) {
                    cartLiveCount.textContent = `${cartCount} items in cart`;
                }
                
                // Animate Cart Icon
                cartCountBadge.parentElement.classList.add('pop-anim');
                setTimeout(() => cartCountBadge.parentElement.classList.remove('pop-anim'), 300);
            });
        });
    }
    
    // Additional DOM Elements for View Switching
    const promoBanner = document.getElementById('promo-banner-section');
    const categoryPillsSection = document.getElementById('category-pills-section');
    const mensShoesView = document.getElementById('mens-shoes-view');
    const mainContent = document.getElementById('main-content');
    const mensProductGrid = document.getElementById('mens-product-grid');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    const breadcrumbHome = document.getElementById('breadcrumb-home');

    // Breadcrumb Logic to Reset state
    if (breadcrumbHome) {
        breadcrumbHome.addEventListener('click', (e) => {
            e.preventDefault();
            if (promoBanner) promoBanner.style.display = 'block';
            if (categoryPillsSection) categoryPillsSection.style.display = 'block';
            if (mainContent) mainContent.style.display = 'block';
            if (mensShoesView) mensShoesView.style.display = 'none';
            if (breadcrumbCurrent) breadcrumbCurrent.textContent = 'All Categories';
            
            if (pillsContainer) {
                const pills = pillsContainer.querySelectorAll('.pill');
                pills.forEach(p => {
                    p.classList.remove('active');
                    p.setAttribute('aria-selected', 'false');
                    if(p.textContent === 'All Categories') {
                        p.classList.add('active');
                        p.setAttribute('aria-selected', 'true');
                    }
                });
            }
            renderProducts(window.products, productGrid);
        });
    }

    // Pill Filter Logic
    if (pillsContainer) {
        const pills = pillsContainer.querySelectorAll('.pill');
        pills.forEach(pill => {
            pill.addEventListener('click', function() {
                // Remove active class from all
                pills.forEach(p => {
                    p.classList.remove('active');
                    p.setAttribute('aria-selected', 'false');
                });
                
                // Add active to clicked
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                
                const category = this.textContent;
                let filteredProducts = window.products;
                
                if (category === "Men's Shoes") {
                    // Switch to Men's Shoes View
                    if (promoBanner) promoBanner.style.display = 'none';
                    if (categoryPillsSection) categoryPillsSection.style.display = 'none';
                    if (mainContent) mainContent.style.display = 'none';
                    if (mensShoesView) mensShoesView.style.display = 'block';
                    if (breadcrumbCurrent) breadcrumbCurrent.textContent = "Men's Shoes";
                    
                    // Filter specifically for Men's Shoes
                    filteredProducts = window.products.filter(p => p.category === 'Shoes' || p.title.toLowerCase().includes('shoes') || p.title.toLowerCase().includes('boots') || p.title.toLowerCase().includes('sneakers'));
                    
                    if (mensProductGrid) {
                        renderProducts(filteredProducts, mensProductGrid);
                    }
                } else {
                    // Default behavior for other categories
                    if (promoBanner) promoBanner.style.display = 'block';
                    if (categoryPillsSection) categoryPillsSection.style.display = 'block';
                    if (mainContent) mainContent.style.display = 'block';
                    if (mensShoesView) mensShoesView.style.display = 'none';
                    if (breadcrumbCurrent) breadcrumbCurrent.textContent = category;
                    
                    if (category !== 'All Categories') {
                        filteredProducts = window.products.filter(p => p.category === category || Math.random() > 0.4);
                    }
                    
                    renderProducts(filteredProducts, productGrid);
                }
            });
        });
    }
    
    // Header Search Simulation
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('search-input').value;
            if(input.trim() !== '') {
                // Filter products that include search term
                const filtered = window.products.filter(p => 
                    p.title.toLowerCase().includes(input.toLowerCase())
                );
                const currentGrid = (mensShoesView && mensShoesView.style.display === 'block') ? mensProductGrid : productGrid;
                renderProducts(filtered, currentGrid);
            }
        });
    }
    
    // Load More Simulation
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> <span class="sr-only">Loading more products</span> Loading...';
            
            setTimeout(() => {
                // Duplicate products to simulate more loading
                window.products = [...window.products, ...window.products];
                const currentGrid = (mensShoesView && mensShoesView.style.display === 'block') ? mensProductGrid : productGrid;
                renderProducts(window.products, currentGrid);
                this.innerHTML = originalText;
                
                // We'll hide button after one load for demo
                this.style.display = 'none';
            }, 800);
        });
    }
    
    // Load More Simulation for Men's Shoes
    const mensLoadMoreBtn = document.getElementById('mens-load-more-btn');
    if (mensLoadMoreBtn) {
        mensLoadMoreBtn.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> <span class="sr-only">Loading more products</span> Loading...';
            
            setTimeout(() => {
                // Filter specifically for Men's Shoes
                let filteredProducts = window.products.filter(p => p.category === 'Shoes' || p.title.toLowerCase().includes('shoes') || p.title.toLowerCase().includes('boots') || p.title.toLowerCase().includes('sneakers'));
                
                // Duplicate men's shoes to simulate more loading
                const appendedProducts = [...filteredProducts, ...filteredProducts];
                renderProducts(appendedProducts, mensProductGrid);
                this.innerHTML = originalText;
                
                // Hide button after one load for demo
                this.style.display = 'none';
            }, 800);
        });
    }
    
    // Filter & Sort Logic (Guideline 3.2.5: Apply only after confirmation step)
    const sortBtns = document.querySelectorAll('.sort-btn');
    const applyMensFiltersBtn = document.getElementById('apply-mens-filters-btn');

    if (sortBtns.length > 0) {
        sortBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active from all
                sortBtns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });
                // Add active to clicked
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');
            });
        });
    }

    if (applyMensFiltersBtn) {
        applyMensFiltersBtn.addEventListener('click', function() {
            // Provide feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Applying...';
            
            setTimeout(() => {
                // Find active sort
                const activeSort = document.querySelector('.sort-btn.active');
                const sortType = activeSort ? activeSort.textContent.trim() : 'Best Match';
                
                // Get strictly Men's Shoes
                let filteredProducts = window.products.filter(p => p.category === 'Shoes' || p.title.toLowerCase().includes('shoes') || p.title.toLowerCase().includes('boots') || p.title.toLowerCase().includes('sneakers'));
                
                // Demo sort application
                if (sortType.includes('Price')) {
                    filteredProducts.sort((a, b) => a.price - b.price);
                } else if (sortType === 'New Arrivals') {
                    filteredProducts = filteredProducts.reverse();
                } else if (sortType === 'Orders') {
                    filteredProducts.sort((a, b) => b.reviews - a.reviews);
                }
                
                renderProducts(filteredProducts, mensProductGrid);
                this.innerHTML = originalText;
            }, 400);
        });
    }
    
    // Initial Render
    if (typeof window.products !== 'undefined') {
        renderProducts(window.products, productGrid);
    }
    
    // Voice Search API (WCAG 2.5.6)
    const voiceSearchBtns = document.querySelectorAll('.voice-search-btn');
    const globalSearchInput = document.getElementById('search-input');
    
    if (voiceSearchBtns.length > 0 && globalSearchInput) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.interimResults = false;

            voiceSearchBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update UI lightly
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<i class="fa-solid fa-microphone-lines fa-fade" style="color:red;" aria-hidden="true"></i>';
                    btn.setAttribute('aria-label', 'Listening for search item');
                    
                    try { recognition.start(); } catch (err) {}

                    recognition.onresult = (e) => {
                        const transcript = e.results[0][0].transcript;
                        globalSearchInput.value = transcript;
                        // Focus field to allow user to review before manual submission explicitly
                        globalSearchInput.focus();
                    };
                    
                    recognition.onend = () => {
                        btn.innerHTML = originalHTML;
                        btn.setAttribute('aria-label', 'Search by voice');
                    };
                    
                    recognition.onerror = () => {
                        btn.innerHTML = originalHTML;
                        btn.setAttribute('aria-label', 'Search by voice');
                    };
                });
            });
        } else {
            voiceSearchBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    alert("Voice search is unavailable on this browser. Please use the keyboard.");
                });
            });
        }
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
