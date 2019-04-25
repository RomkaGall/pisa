$(document).ready(function () {
  console.log("Скрипты подъехали")

  $('.partners__slider').slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    infinite: true
  })

  //wow
  $(function () {
    new WOW().init();
  })
});



