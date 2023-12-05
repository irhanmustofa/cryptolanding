(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(700);
    })

    $(document).ready(function () {

        /*==== header Section Start here =====*/
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                fixed_top.addClass("header--fixed animated fadeInDown");
            } else {
                fixed_top.removeClass("header--fixed animated fadeInDown");
            }
        });


        /*==== Multipage header Section Start here =====*/
        $("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        // drop down menu width overflow problem fix
        $('ul').parent('li').on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });
        $('.menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (parseInt($(window).width()) < 992) {
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(300, "swing");
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown(300, "swing");
                    element.siblings('li').children('ul').slideUp(300, "swing");
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(300, "swing");
                }
            }


        });

        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.menu').toggleClass('active');
        })

        //Header
        var fixed_top = $("header");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 300) {
                fixed_top.addClass("header-fixed fadeInUp");
            } else {
                fixed_top.removeClass("header-fixed fadeInUp");
            }
        });

        /*==== Multipage header Section End here =====*/


        //data asos initial
        AOS.init();

    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll The optional number
            // (800) specifies the number of milliseconds it takes to scroll to the
            // specified area
            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    // Partner slider start here
    var swiper = new Swiper('.partner__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1200,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
        loop: true
    });


    /*--------------------------------------------------------------
    Ajax Contact Form And Appointment
--------------------------------------------------------------*/
    //contact form js
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-message');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    // Set the message text.
                    $(formMessages).text(response);
                    // Clear the form.
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'problem' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('problem');
                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });
}(jQuery));