// BACKTOTOPBUTTON
let backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    backToTopButton.classList.add("show-back-to-top");
  } else {
    backToTopButton.classList.remove("show-back-to-top");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function () {
    backToTopButton.classList.add("show-back-to-top");
  });
});

