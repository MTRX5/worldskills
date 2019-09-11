// Stop AutoPlay
$(document).ready;
$(function () {
    var screenWidth = $(window).width();
    if (screenWidth >= 800) {
        $('#video').attr('autoplay', 'autoplay');
    }
});