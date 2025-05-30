(function ($) {
    "use strict";
let splashScreen = document.getElementById('splash-screen');
let logoVar = document.getElementById('splash-logo');
document.addEventListener('DOMContentLoaded',
  function () {
    if (splashScreen) {
      setTimeout(function () {
        document.documentElement.style.overflow = "hidden";
        splashScreen.style.display = "flex"

        setTimeout(function () {
          document.documentElement.style.overflow = "unset";
          splashScreen.style.display = "none";

        }, 4000)

      }, 0)
    }
  }

)
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // Team carousel
    // $(".team-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 30,
    //     dots: false,
    //     loop: true,
    //     nav : true,
    //     navText : [
    //         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    //     ],
    //     responsive: {
    //         0:{
    //             items:1
    //         },
    //         576:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         },
    //         992:{
    //             items:3
    //         }
    //     }
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    //     const animationsIn = ['animate__lightSpeedInLeft',];
    // const animationsOut = ['animate__lightSpeedOutRight',];
    // main Hero carousel
    $(".main-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: false,
        autowidth: false,
        // navText: [
        //     '<i class="bi bi-chevron-double-left  nnnn btn btn-outline-light" aria-hidden="true"></i>',
        //     '<i class="bi bi-chevron-double-right nnnn2 btn btn-outline-light" aria-hidden="true"></i>'
        // ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });



    

})(jQuery);

let pCardOpen = document.getElementsByClassName('submersible-pumpsets-1');
                    // let pcard = document.getElementsByClassName('.pCard');

                    function pCardFun(index) {
                        pCardOpen[index].style.display = "block";
                        document.body.style.overflow = "hidden";

                    }


                    function closedClick(index) {
                        document.body.style.overflow = "auto";
                        pCardOpen[index].style.display = "none";
                    }

