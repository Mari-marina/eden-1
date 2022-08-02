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

const infoBlock = document.querySelectorAll(".benefits__wrap");

for (let i = 0; i < infoBlock.length; i++) {
  infoBlock[i].addEventListener("mouseenter", function (e) {
    infoBlock[i].classList.add("open-info");
  });
  infoBlock[i].addEventListener("mouseout", function (e) {
    infoBlock[i].classList.remove("open-info");
  });
}
