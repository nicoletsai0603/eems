function Smenu() {


    $("#greybg,mobile_menu_labIcon").removeClass("is-active");
    $("header.eems").removeClass("on");
    var winWidth = $(window).width();
    if (winWidth < 941) {

        $("#mobile_menu_labIcon").click(function() {
            $(this).toggleClass("is-active");
            if ($(this).hasClass("is-active")) {
                $("#greybg").addClass("is-active");

                $(".portfolio-filter.isotope-filter.pull-center,.nav-bar,header").addClass("on");

                $('.hamburger').addClass('is-active');
            } else {
                $("#greybg").removeClass("is-active");
                $(".portfolio-filter.isotope-filter.pull-center,.nav-bar,header").removeClass("on");

                $('.hamburger').removeClass('is-active');
            }
        })
        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");

        $(".submenu").children("li").click(function() {
            $(".submenu li .hasChild").removeClass("on animated slideInDown");
            $(this).toggleClass("is-active");
            if ($(this).hasClass("is-active")) {


                $(".submenu>li").removeClass("on animated slideInDown");
                $(this).find("div.hasChild").addClass("on animated slideInDown");



            } else {
                $(".submenu li .hasChild").removeClass("on animated slideInDown");

            }
        })



        $("#greybg").click(function() {

            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(".nav-bar").removeClass("on");
                $("header").removeClass("on");
                $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");

                $('.hamburger').removeClass('is-active');

            } else {
                $(this).addClass("is-active");
                $(".nav-bar").addClass("on");
                $("header").addClass("on");
                $(".portfolio-filter.isotope-filter.pull-center").addClass("on");

                $('.hamburger').addClass('is-active');

            }

        })
    } else {
        $("#greybg,.hamburger").removeClass("is-active");
        $("header.eems").removeClass("on");


    }
};

$(".list-inline-item a").keypress(function() {
    $(this).click();
});
var offset = 100,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');
$(window).scroll(function() {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
    }
});
$back_to_top.on('click',
    function(event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            },
            scroll_top_duration);
    });


$(window).scroll(function() {
    var winWidth = $(window).width(),
        topWindow = $(window).scrollTop();
    if (topWindow > 0 && winWidth > 941) {
        $('header').addClass("small animated fadeInDown");
    } else {
        $('header').removeClass("small animated fadeInDown ");
    }
});


$(window).resize(function() {
    Smenu();
    tabSet();

});

$(function() {
    Smenu();
    tabSet();
});