"use strict";
hide();
$(window).resize(hide);

function hide() {
var width = $('body').innerWidth()

if (width < 768) {
	$('div.video-seciton__list_6').addClass('hidenn');
    $('div.video-seciton__list_5').addClass('hidenn');
    $('div.video-seciton__list_4').addClass('hidenn');
	
} else if (width > 768) {
	$('div.video-seciton__list_4').removeClass('hidenn')
	$('div.video-seciton__list_5').removeClass('hidenn')
 	$('div.video-seciton__list_6').removeClass('hidenn')
}
}


$('div.button').bind('click', function(){
  $("div.hidenn").css("display", "block")
});


 slick_slider();
    $(window).resize(slick_slider);


    function slick_slider() {
        var wrapper = $(".responsive");
        if ($(".slick-initialized").length) {
            wrapper.slick('unslick');
        }
        wrapper.slick({
            dots: true,
  			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 768,
                settings: "unslick"
                }
                
            ]
        });
    }
