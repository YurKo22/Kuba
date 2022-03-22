$(function() {

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.footer__item-title--company').on('click', function() {
        $('.footer__item-list--company').slideToggle();
    });

    $('.footer__item-title--details').on('click', function() {
        $('.footer__item-list--details').slideToggle();
    });

    $('.footer__item-title--contacts').on('click', function() {
        $('.footer__item-list--contacts').slideToggle();
    });

    $('.footer__item-title--blog').on('click', function() {
        $('.footer__item-list--blog').slideToggle();
    });

});