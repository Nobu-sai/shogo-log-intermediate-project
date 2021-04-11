
$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    
    slidesPerView: 'auto',
    spaceBetween: 40,

    cssMode: true, 
  
    // breakpoints: {
    //   1200: {
    //      slidesPerView: 'auto',
    //      spaceBetween: 40,
    //   },
    //   830: {
    //      slidesPerView: 'auto',
    //      spaceBetween: 10, // <- doesn't work
    //   }
    // }  

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

});