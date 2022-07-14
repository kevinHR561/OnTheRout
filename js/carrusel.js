window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: '.carrusel_indicadores',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        }
    });
});