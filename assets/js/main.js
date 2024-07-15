$(document).ready(function () {
    'use strict';

    //********* Animated Headline

    $('.animate-rotate-3').animatedHeadline({
        animationType: 'zoom'
    });

    //********** menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.nav-area');
        if ($(window).scrollTop() > 200) {
            menu_area.addClass('sticky_navigation');
        } else {
            menu_area.removeClass('sticky_navigation');
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

    //************ smooth scroll js

    $('a.smooth-menu,a.custom-btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });
    
    
    
    
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    
    

    //*************counter-up js

    $('.counter').counterUp({
        delay: 50,
        time: 8000
    });


     
    
    
    
    
    /*---- magnific popup ---*/
    
    
    $('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
		delegate: 'a',
		removalDelay: 400, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});

    


    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);


    //************* Owl Carousel

    $('.client-pet-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    
    //************ Testimonial Carousel


        $("#testimonial-carousel").owlCarousel({
            navigation: false,
            pagination: true,
            slideSpeed: 800,
            paginationSpeed: 800,
            smartSpeed: 500,
            autoplay: true,
            singleItem: true,
            loop: true,
            responsive:{
                0:{
                    items:1
                },
                680:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
    
    
    
    //************ Client Carousel

        var $clientCarousel = $('#client-carousel');
        if ($clientCarousel.length > 0) {
            $clientCarousel.owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                autoplay: true,
                dots: false,
                autoplayTimeout: 2500,
                smartSpeed: 250,
                responsive: {
                    0: {
                        items: 3
                    },
                    768: {
                        items: 3
                    },
                    1170: {
                        items: 5
                    }
                }
            });
        }
    
    
    

    $(".news-img-slider").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    



});
