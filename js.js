$(document).ready(function(){
    $('#welcome').addClass('animated fadeIn slower').addClass('animated pulse slower');
});

$(window).scroll(function () {
    var homeDivHeight = $("#home").height();
    var aboutDivHeight = $("#about").height();
    var projectsDivHeight = $("#projects").height();
    var viewPortSize = $(window).height();
    
    var triggerAt = 150;
    var aboutTriggerHeight = (homeDivHeight - viewPortSize) + triggerAt;
    var projectsTriggerHeight = (homeDivHeight + aboutDivHeight - viewPortSize) + triggerAt;
    var connectTriggerHeight = (homeDivHeight + aboutDivHeight + projectsDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= aboutTriggerHeight) {
        $('#box1').addClass('animated fadeInLeft slower');
        $('#box2').addClass('animated fadeInUp slower');
    }
    
    if ($(window).scrollTop() >= projectsTriggerHeight) {
        $('#projects').addClass('animated fadeInUp slower');
    }
    
    if ($(window).scrollTop() >= connectTriggerHeight) {
        $('#connect-contents').addClass('animated fadeIn slower');
        $(this).off('scroll');
    }
});