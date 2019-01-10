$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".overlay, .menuWrap").fadeIn(180);
        $(".menu").animate({
            opacity: '1',
            left: '0px'
        }, 180);
    });

    $(".settings").click(function () {
        $(".config").animate({
            opacity: '1',
            right: '0px'
        }, 180);
        $(".menuWrap").fadeOut(180);
        $(".menu").animate({
            opacity: '0',
            left: '-320px'
        }, 180);
    });

});

$(".overlay").click(function () {
$(".overlay, .menuWrap").fadeOut(180);
$(".menu").animate({
    opacity: '0',
    left: '-320px'
}, 180);
$(".config").animate({
    opacity: '0',
    right: '-200vw'
}, 180);
});

