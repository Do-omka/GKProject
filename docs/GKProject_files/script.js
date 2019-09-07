$(document).ready(function(){
    var element = $('.shema_raboty_inner .priem_two .name:contains(заявк)');
    var text = element.html();
    element.html('<a href="" data-toggle="modal" data-target="#callback">'+text+'</a>');

    $(".reviews-carousel").owlCarousel({
        items:1,
        autoplay: true,
        loop : true,
        autoplayTimeout: 10000,
        nav:true,
        autoplayHoverPause: true

    });
    $(".uslugi_carousel").owlCarousel({
        items:1,
        autoplay: true,
        loop : true,
        autoplayTimeout: 10000,
        nav:true,
        autoplayHoverPause: true
       
    });
    $(".main-services-carousel").owlCarousel({
        loop:true,
        items:1,
       nav:true,
       
       
    });
    $('.fancy').fancybox({
		loop : true
	});
    $('.catalog').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.protects_more').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        $('.clients').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
           // prevArrow: '<button type="button" class="slick-prev-white">Previous</button>',
           // nextArrow: '<button type="button" class="slick-next-white">next</button>',
            prevArrow: '',
            nextArrow: '',
            dotsClass: 'slick-dots-white',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
});