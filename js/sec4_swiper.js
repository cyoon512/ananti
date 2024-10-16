$(document).ready(function(){

  var swiper_4 = new Swiper(".swiper_4", {
      slidesPerView: "2.2",
      spaceBetween: 18,
      grabCursor: true,
      breakpoints: {
        1060:{
          slidesPerView: "3.5",
          spaceBetween: 0,
          grabCursor: true,
        },
      }
    });
});