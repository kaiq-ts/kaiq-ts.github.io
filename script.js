const lenis = new Lenis({ autoRaf: true });
let SwiperTop = new Swiper(".swiper--top", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
});

const backToTopButton = document.getElementById("back-to-top-button");
const body = document.body;
const documentElement = document.documentElement;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (body.scrollTop > 20 || documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function topFunction() {
  body.scrollTop = 0;
  documentElement.scrollTop = 0;
}
