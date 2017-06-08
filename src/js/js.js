"use strict";

function openbox(id) {
    // const display = document.getElementById(id).style.display;
    const $box = $('#' + id);

    if ($box.is(':hidden')) {
        $box.show();
    } else {
        $box.hide();
    }
}


function slideDetect() {
    if (document.documentElement.clientWidth > 768) {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    } else if (document.documentElement.clientWidth < 768) {
        $('.slider').slick('unslick');
    }
}
$(document).ready(function () {
    slideDetect();
    $(window).resize(function () {
        slideDetect()
    });
});