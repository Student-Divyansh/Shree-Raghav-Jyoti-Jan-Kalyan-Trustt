// NAVBAR START
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // 1. Mobile hamburger menu toggle handler
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            menuBtn.classList.toggle('active');
            
            const bars = menuBtn.querySelectorAll('.bar');
            if(mobileMenu.classList.contains('open')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // 2. Scroll trigger for navbar transparency change
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Dynamic Underline Link Switcher Engine (Fixes the wrong underline bug)
    const currentPath = window.location.pathname.split("/").pop();
    const currentHash = window.location.hash;
    const allLinks = document.querySelectorAll('.nav-link, .mobile-link');

    allLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // URL validation logic for files (index.html, work.html, about.html)
        if (linkHref === currentPath || (currentPath === "" && linkHref === "index.html")) {
            link.classList.add('active');
        }

        // URL validation logic if direct hash anchor link is active
        if (currentHash && linkHref.includes(currentHash)) {
            allLinks.forEach(el => el.classList.remove('active'));
            link.classList.add('active');
        }

        // Fallback user click navigation sync
        link.addEventListener('click', () => {
            allLinks.forEach(el => el.classList.remove('active'));
            link.classList.add('active');
            
            // Mobile drawer autosync auto-close on navigate
            if(mobileMenu && mobileMenu.classList.contains('open')) {
                menuBtn.click();
            }
        });
    });
});
// NAVBAR END

// HEHRO SECTION START
// Image Carousel Slider Configuration
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    let currentSlide = 0;
    let slideInterval;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    };

    const nextSlideFunc = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlideFunc = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    // Auto Advance Timer Setup (Runs every 4 seconds)
    const startSlider = () => {
        slideInterval = setInterval(nextSlideFunc, 4000);
    };

    const resetSlider = () => {
        clearInterval(slideInterval);
        startSlider();
    };

    // Register Button Event Handlers
    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', () => {
            nextSlideFunc();
            resetSlider();
        });

        prevBtn.addEventListener('click', () => {
            prevSlideFunc();
            resetSlider();
        });

        startSlider();
    }
});
// HERO SECTION END

// FOUNDER SECTION START
// Founder Profile Image Reveal Dynamic Trigger
document.addEventListener('DOMContentLoaded', () => {
    const founderWrapper = document.querySelector('.founder-image-wrapper');
    
    if(founderWrapper) {
        founderWrapper.addEventListener('mousemove', (e) => {
            const img = founderWrapper.querySelector('.founder-img');
            const rect = founderWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width/2);
            const y = e.clientY - rect.top - (rect.height/2);
            
            // Subtle premium tilt effect on hover
            img.style.transform = `scale(1.04) translate(${x * 0.03}px, ${y * 0.03}px)`;
        });
        
        founderWrapper.addEventListener('mouseleave', () => {
            const img = founderWrapper.querySelector('.founder-img');
            img.style.transform = 'scale(1) translate(0px, 0px)';
        });
    }
});
// FOUNDER SECTION END

// ABOUT SECTION START
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grid-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.card-icon i');
            if(icon) {
                icon.style.transform = 'scale(1.15) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.card-icon i');
            if(icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});
// ABOUT SECTION END

// Service SECTION START
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon-box i');
            if (icon) {
                icon.style.transform = 'scale(1.15)';
                icon.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon-box i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
});
// SERVICE SECTION END

// ENVIRONMENT START
document.addEventListener('DOMContentLoaded', () => {
    const leaderCards = document.querySelectorAll('.leader-card');

    leaderCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('.leader-image-zone img');
            if(img) {
                img.style.transform = 'scale(1.04)';
                img.style.transition = 'transform 0.4s ease';
            }
        });

        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('.leader-image-zone img');
            if(img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
});
// ENVIRONMENT END

// Cow Welfare Section START
document.addEventListener('DOMContentLoaded', () => {
    const gauBox = document.querySelector('.gau-video-box');
    
    if(gauBox) {
        gauBox.addEventListener('mouseenter', () => {
            const floatingCard = gauBox.querySelector('.gau-floating-card');
            if(floatingCard) {
                floatingCard.style.transform = 'translateY(-5px)';
                floatingCard.style.transition = 'transform 0.3s ease';
            }
        });
        
        gauBox.addEventListener('mouseleave', () => {
            const floatingCard = gauBox.querySelector('.gau-floating-card');
            if(floatingCard) {
                floatingCard.style.transform = 'translateY(0)';
            }
        });
    }
});
// Cow Welfare Section END

// Team Members Section START

// Team Members Section END

// Premium News & Event Section START
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
    });
});
// Premium News & Event Section END
