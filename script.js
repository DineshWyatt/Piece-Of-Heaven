document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a, .hero-btns a, .footer-symbol-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(22, 17, 14, 0.9)';
            header.style.borderColor = 'rgba(230, 179, 126, 0.4)';
            header.style.boxShadow = '0 0 25px rgba(230, 179, 126, 0.3)';
        } else {
            header.style.background = 'rgba(22, 17, 14, 0.75)';
            header.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            header.style.boxShadow = '0 0 15px rgba(230, 179, 126, 0.15)';
        }
    });

    const searchTrigger = document.querySelector('.search-trigger');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInputField = document.getElementById('searchInputField');

    if (searchTrigger && searchOverlay) {
        searchTrigger.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            if(searchInputField) searchInputField.focus();
        });
    }

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    const cartCountSpan = document.querySelector('.cart-count');
    let currentCartCount = 2;

    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.product-card');
            const foodName = card ? card.getAttribute('data-name') : 'Item';
            
            currentCartCount++;
            if (cartCountSpan) {
                cartCountSpan.textContent = currentCartCount;
            }
            
            alert(`"${foodName}" has been successfully added to your order tray!`);
        });
    });

    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You currently have ${currentCartCount} items in your heavenly order tray.`);
        });
    }

    const reservationBtn = document.querySelector('.contact-form button');
    if (reservationBtn) {
        reservationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you! Your reservation request has been received. We will contact you shortly.');
        });
    }
});
