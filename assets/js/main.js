/* Nav hover function */
$('li.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


/* Swiper JS */

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


/* scroll to anchor */
$(".nav_home").click(function () {
    $("html, body").animate({
            scrollTop: $(".hero").offset().top
        },
        800
    );
});
$(".nav_contact").click(function () {
    $("html, body").animate({
            scrollTop: $(".footer").offset().top
        },
        800
    );
});