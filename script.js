// SLIDER
$(document).ready(function () {
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 6,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        736: {
            slidesPerView: 4,
            spaceBetween: 40
          },
        1025: {
            slidesPerView: 6,
            spaceBetween: 40
          }
        }
  });

  
  const swiperPrevBtn = document.getElementById("js-swiper-prev");
  const swiperNextBtn = document.getElementById("js-swiper-next");
  
  swiperPrevBtn.addEventListener("click", () => {
    swiper.slidePrev();
  })

  swiperNextBtn.addEventListener("click", () => {
    swiper.slideNext();
  });
  // MAP
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
// BURGER MENU
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });


  $(".header__link").click(function (event) {
    $(".header__burger,.header__menu").removeClass("active");
    $("body").removeClass("lock");
  }); });