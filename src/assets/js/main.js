let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (document.querySelector(".icon-menu")) {
  document.querySelector(".icon-menu").addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("lock");
    document.documentElement.classList.toggle("menu-open");
  });
}


// if (document.querySelector(".main__wrapper")) {
//   document.querySelector(".main__wrapper").addEventListener("click", function (e) {
//     document.querySelector("body").classList.toggle("lock");
//     document.documentElement.classList.toggle("menu-open");
//   });
// }

const mm = document.querySelector(".mm");
const form1 = document.querySelector(".request__form-mobile");
const form2 = document.querySelector(".request__form-mobile.two");
const formBtn = document.querySelector(".mobile__BTNtext");
const formBtn2 = document.querySelector(".mobile__BTNtext.two");
<<<<<<< HEAD
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((element) => {
  element.addEventListener("click", function (e) {
    document.querySelector("body").classList.remove("lock");
    document.documentElement.classList.remove("menu-open");
  });
});
=======
// const navigation = document.querySelector(".main__wrapper");

>>>>>>> 33b2f3294a3c54b15c5ff415d3a346f2d72b9045

mm.addEventListener("click", function (e) {
  document.querySelector("body").classList.remove("lock");
  document.documentElement.classList.remove("menu-open");
});

// navigation.addEventListener("click", function (e) {
//   document.querySelector("body").classList.remove("lock");
//   document.documentElement.classList.remove("menu-open");
// });

formBtn.addEventListener("click", function (e) {
  form2.classList.remove("active");
  form1.classList.add("active");
});
formBtn2.addEventListener("click", function (e) {
  form2.classList.add("active");
  form1.classList.remove("active");
});



