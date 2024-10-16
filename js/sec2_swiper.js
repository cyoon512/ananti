$(document).ready(function(){

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1.1",
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      400:{
        slidesPerView: "1.1",
        spaceBetween: 18,
      },
      768:{
        slidesPerView: "2.2",
        spaceBetween: 18,
      },
    }
  });

});