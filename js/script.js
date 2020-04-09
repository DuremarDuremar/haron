$(document).ready(function () {
  $(".slider").slick({
    arrow: true,
    dots: true, //точки
    adaptiveHeight: true, //адаптив под высоту обьекта
    slidesToShow: 1, //кол-во обьектов на странице
    slidesToScroll: 1, //кол-во обьектов при перелистование
    speed: 400, //скорость скролла
    easing: "linear", //метод скролла
    infinite: true, //конечность скролла
    initialSlide: 0, //с какого начать
    autoplay: false, //автопроигрывание
    autoplaySpeed: 500,
    centerMode: false,
    variablewidth: false,
    rows: 1,
    slaiderPerRow: 1,
    vertical: false,
    fade: false,
    responsive: [
      {
        breakpoint: 768,
        setting: {},
      },
    ],
  });
});
