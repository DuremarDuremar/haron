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

/////////////////////////

let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".nav2");
let nav3 = document.querySelector(".nav3");

const tabElement = document.querySelector(".tab-nav");
console.log(tabElement);

tabElement.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav1")) {
    nav1.classList.add("activetab");
    nav2.classList.remove("activetab");
    nav3.classList.remove("activetab");
  } else if (event.target.classList.contains("nav2")) {
    nav2.classList.add("activetab");
    nav1.classList.remove("activetab");
    nav3.classList.remove("activetab");
  } else if (event.target.classList.contains("nav3")) {
    nav3.classList.add("activetab");
    nav2.classList.remove("activetab");
    nav1.classList.remove("activetab");
  }
});

window.onload = function () {
  nav1.click();
};
