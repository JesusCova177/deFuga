const subHeader = document.querySelector(".sub-header");

const linkNav = document.querySelectorAll(".link-nav");

const navigation = document.querySelector(".main-header");

const aboutUs = document.querySelector(".text-about-us-content");

const filosofy = document.querySelector(".filosofy-text");

const p = document.querySelector(".contact-us-text");

const menu = document.querySelector(".nav-menu");

const openBtn = document.querySelector(".open-btn");

const closeBtn = document.querySelector(".close-btn");

const navList = document.querySelector(".main-nav-list");

const ajustarTexto = function () {
  const ancho = innerWidth;

  if (ancho < 770) {
    subHeader.textContent = "Vamos directo al punto.";

    aboutUs.textContent =
      "Nosotros no creamos laberintos trazamos líneas rectas. Tu idea es el punto de partida.";

    filosofy.textContent =
      "El éxito no es una línea recta, es un punto de fuga. Nosotros lo hacemos visible. Sin puntos intermedios. Sin desvíos. Hablemos claro.";

    p.textContent =
      "Las ideas dejan de ser puntos suspensivos y se convierten en hechos.";
  }
};

menu.addEventListener("click", function () {
  console.log("openmenu");
  if (!menu.classList.contains("hidden")) {
    openBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    navigation.classList.toggle("move-left");
  }
});

for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener("click", function () {
    openBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    navigation.classList.toggle("move-left");
  });
}
ajustarTexto();
