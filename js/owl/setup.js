// SETUP  da demo Basic do owl.Carousel.js

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true, //Ativa duas setas para movimentação das imagens.
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{ //Se a tela possuir 1mil pix, exiba 5 elementos.
            items:5
        }
    }
})