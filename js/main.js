$(function() {

    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    });

    //  $('').on('click', function() {
    //      $('.menu__list').slideToggle();
    //  });

    //  $(".menu__btn").on("click", function() {
    //      $(".menu__list").slideToggle("slow");
    //  });

    $(".menu__btn").click(function() {
        $(".menu__list").slideToggle();
    });

});