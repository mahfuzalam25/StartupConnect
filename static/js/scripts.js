// Initialize Swiper
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });

    // Category Navbar functionality
    const categoryNav = document.getElementById('categoryNav');
    const categoryBtn = document.querySelector('.category-btn');
    const categoryMenu = document.querySelector('.category-menu');
    const swiperSection = document.querySelector('.swiper-section');

    // Show/hide navbar when reaching swiper section
    function toggleCategoryNav() {
        const swiperTop = swiperSection.offsetTop;
        const scrollPosition = window.scrollY + 100;

        if (scrollPosition >= swiperTop) {
            categoryNav.classList.add('show');
        } else {
            categoryNav.classList.remove('show');
        }
    }

    // Toggle dropdown menu
    categoryBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        categoryMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        categoryMenu.classList.remove('show');
    });

    // Check scroll position
    window.addEventListener('scroll', toggleCategoryNav);
});

document.addEventListener('DOMContentLoaded', function () {
        var swiper = new Swiper(".Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });
});

