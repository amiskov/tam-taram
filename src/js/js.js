function openbox(id) {
        display = document.getElementById(id).style.display;
        if (display == 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
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
$(document).ready(function(){
    slideDetect();
    $(window).resize(function() {
       slideDetect()
    });
});