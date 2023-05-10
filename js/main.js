// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
        // $('.navbar').addClass('sticky-top');
        $('.navbar').addClass('nav-bg');

    }
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('nav-bg-white');
    }

    else {
        $('.navbar').removeClass('sticky-top');
        $('.navbar').removeClass('nav-bg');
        $('.navbar').removeClass('nav-bg-white');
    }
});

// $(window).scroll(fuction(){

//     else{

//     }



// })

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 40) {
//         $('.navbar').addClass('sticky-top');
//     } else {
//         $('.navbar').removeClass('sticky-top');
//     }
// });

// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    new Swiper('.clients-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 70
            }
        }
    });


    $(function () {
        // $('#myTab li:last-child a').tab('show');
        $('select').niceSelect();
    })
})(jQuery);