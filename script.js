//MENUBUTTON
const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const isActive = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', isActive);
  event.currentTarget.setAttribute('aria-label', isActive ? 'Fechar Menu' : 'Abrir Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

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

