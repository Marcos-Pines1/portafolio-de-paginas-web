/*================= Loader function ====================*/

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
});

/*================= Mostrar el botton de nav ====================*/

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// si damos click al toggle agrega la clase show-menu

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// si damos click al close-button remueve la clase show-menu

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*============== Remove menu mobile ==============*/

const navLinks = document.querySelectorAll(".nav__item")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  // cuando damos click al link nav este removera el menu
  navMenu.classList.remove("show-menu")
}

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction)
})

/*=============== SCROLL UP ===============*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  // cuando el scroll sea superior a 350 de altura del viewport, agrega show-scroll 
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*================= Funcion para los botones seccion lcd y performance ====================*/

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button__interactive');

  if (buttons.length === 0) {
    // Si no hay botones interactivos en la página, salir sin ejecutar nada más
    return;
  }

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Seleccionar el contenedor del botón
      const container = button.parentElement;
      const targetClass = button.getAttribute('data-target');
      
      // Encontrar y desactivar cualquier contenedor activo dentro del mismo contenedor padre
      const activeContainer = container.parentElement.querySelector('.interactive__text__container.active');
      if (activeContainer && activeContainer !== container) {
        activeContainer.classList.remove('active');
      }

      // Alternar la clase 'active' en el contenedor del botón
      container.classList.toggle('active');

      // Determinar el contenedor de imágenes correspondiente
      const imgsContainer = container.closest('section').querySelector('.active-imgs') || container.closest('section').querySelector('.performance-imgs');
      
      // Encontrar y desactivar cualquier imagen activa dentro del mismo contenedor padre
      const activeImage = imgsContainer.querySelector('.active');
      if (activeImage) {
        activeImage.classList.remove('active');
      }

      // Activar la imagen correspondiente
      const targetImage = imgsContainer.querySelector(`.${targetClass}`);
      if (targetImage) {
        targetImage.classList.add('active');
      }
    });
  });
});

/*================= Swipper js ====================*/

const swiperContainer = document.querySelector(".other__swiper");

// Si no hay contenedor Swiper en la página, salir sin ejecutar nada más
if (swiperContainer) {
  let swiper = new Swiper(swiperContainer, {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.other-products, .info__sponsor`, { origin: 'bottom' })
sr.reveal('.interactive__text__container', { origin: 'left', delay: 300, interval: 300 })
sr.reveal(`.lcd__info__titles`, { origin: 'left', delay: 200 })
sr.reveal('.sponsor__img', { interval: 200 })

function applyScrollReveal() {
  const sr = ScrollReveal();

  sr.clean('.info__container__img, .concept__text');

  if (window.innerWidth >= 768) {
    sr.reveal(`.main__text, .home__product__img, .especific__info`)
    sr.reveal(`.info__container__text, .concept__relative, .info__video, .shop__info`, {origin: 'left'})
    sr.reveal(`.info__container__img, .concept__text, .info__iframe, .contact__mail`, { origin: 'right' })
    sr.reveal(`.float__social`, { origin: 'left', delay: 200 })
  } else {
    sr.reveal(`.main__text, .home__product__img, .float__social, .info__container__img, .info__container__text, .concept__relative, .concept__text, .video__info, .especific__info,.shop__product, .contact__mail`)

  }
}

applyScrollReveal();

window.addEventListener('resize', applyScrollReveal);
