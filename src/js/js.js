"use strict";
const $videoSectionsHiddenOnMobile = $('.video-seciton__list_3 ~ .video-seciton__list');

hide();
$(window).resize(hide);

function hide() {
    const width = $('body').innerWidth();
    $videoSectionsHiddenOnMobile.toggleClass('hidenn', width <= 768);
}

$('.js-button').on('click', function (event) {
    event.preventDefault();
    $(".hidenn").css("display", "block")
});

const $wrapper = $(".responsive");

slickSlider($wrapper);
$(window).resize(function () {
    slickSlider($wrapper)
});

function isSlickInitialized() {
    return $(".slick-initialized").length;
}

function slickSlider($wrapper) {
    if (isSlickInitialized() && $(window).width() <= 768) {
        console.log('Mobile, should unslick.');
        $wrapper.slick('unslick');
    } else if (!isSlickInitialized() && $(window).width() > 768) {
        console.log('Init new slick.');
        $wrapper.slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
}
