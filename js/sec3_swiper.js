$(document).ready(function(){

    var swiper_3 = new Swiper(".swiper_3", {
        autoplay: {
        delay: 2500,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    
      var mo_swiper_3 = new Swiper(".mo_swiper_3", {
        slidesPerView: "1.1",
        spaceBetween: 18,
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        mousewheel: true,
        breakpoints: {
          200:{
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

// => 스와이퍼 클래스명이 중복되어서 섹션 별 스와이퍼가 엉망이 될 경우
//    해결책 : 클래스명 추가 후 js에서 변수 이름을 바꾼다
//    해결책 : 스크립트를 각각 다 따로 뺀다