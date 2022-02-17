$(function() {
    $('.top-slider__inner').slick({
        arrows: false,
        dots:true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

var products = document.querySelector('[data-ref="products"]');
var design = document.querySelector('[data-ref="design"]');
var config = {
    controls: {
        scope: 'local'
    }
};
var mixer1 = mixitup(products, config);
var mixer2 = mixitup(design, config);

