const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";
const animationDiamond = "path";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 6) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass, animationDiamond);
    } else {
      element.classList.remove(animationClass, animationDiamond);
    }
  });
}
animeScroll();
if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 10)
  );
  function initiScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smoth",
        block: "start",
      });
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
  initiScrollSuave();

  function initiAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

    if (sections.length) {
      const windowMetade = (window.innerHeight = 0.6);

      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowMetade < 0;
          if (isSectionVisible) section.classList.add("ativo");
          else section.classList.remove("ativo");
        });
      }

      animaScroll();

      window.addEventListener("scroll", animaScroll);
    }
  }
  initiAnimacaoScroll();
}
function toggle() {
  var sec = document.getElementById("sec");
  var nav = document.getElementById("navigation");

  sec.classList.toggle("active");
  nav.classList.toggle("active");
}
nav.addEventListener("click", toggle);
