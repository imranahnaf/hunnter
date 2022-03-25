$(document).ready(function() {
    'use strict';

    // ======== *****preloader js starts***** ======== //
    $('#preloader-bg').delay(5500).fadeOut(1500);
    // ======== *****preloader js ends***** ======== //


    // ======== *****banner slider js starts***** ======== //
    $('#banner-slider').slick({
        arrows: true,
        prevArrow: '<i class="fa fa-arrow-left prevarrow"> </i>',
        nextArrow: '<i class="fa fa-arrow-right nextarrow"> </i>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: false,

        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // ======== *****banner slider js ends***** ======== //



});