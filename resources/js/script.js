
/*document.ready(function()) helps to inform the browser that JS will run only after loading the document fully
/* $ is used to select a particular element in JavaScript */
/*
$(document).ready(function () {
    $('h1').click(function () {
        $(this).css('background-color', '#ff0000') /*Changes the h1 element bg color to red when clicked
    })
})
*/

$(document).ready(function () {

    /*For the sticky navigation*/

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass("sticky");
        } else {
            $('nav').removeClass("sticky");
        }
    }, {
        offset: '60px;'
    });


    /*For the scroll on buttons*/

    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-signup').offset().top }, 1000)
    }
    );

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 500)
    }
    );


    /* Navigation scroll */
    $(function () {
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*Animation on scroll*/

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn') /*Features section*/
    }, {
        offset: '50%;'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp') /*App Screen*/
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn') /*Cities Section*/
    }, {
        offset: '50%;'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse') /*Sign Up Section*/
    }, {
        offset: '50%;'
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animate__animated animate__fadeInRight') /*Order Steps Section*/
    }, {
        offset: '100%;'
    });

    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animate__animated animate__fadeInRight') /*Order Steps Section*/
    }, {
        offset: '100%;'
    });

    $('.js--wp-7').waypoint(function (direction) {
        $('.js--wp-7').addClass('animate__animated animate__fadeInRight') /*Order Steps Section*/
    }, {
        offset: '100%;'
    });


    /*Mobile Navigation*/
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200); /* Opens and closes nav bar*/
        var icon = $('.js--nav-icon i');

        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });

});
