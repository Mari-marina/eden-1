// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {
  $(".certificates__slider").slick({
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    centerPadding: "40px",
  });
});