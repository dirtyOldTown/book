// PROMENE ZA LAPTOP + MOBILNI
//-----------------------------

// Animacija za email i facebook

const email = document.querySelector(".contact p:last-of-type a");
const facebook = document.querySelector("#facebook a");

// Funkcije za promenu boje
function plavaBoja(x) {
  x.setAttribute("style", "color: #90e0ef; padding: 4px")
}
function belaBoja(x) {
    x.setAttribute("style", "color: white; background-color: transparent; padding: 4px")
  }

// Promena boje u plavo
email.addEventListener("mouseover", () => {
  plavaBoja(email)
});
facebook.addEventListener("mouseover", () => {
  plavaBoja(facebook)
});

// Promena boje u belo (vraćanje na startne vrednosti)
email.addEventListener("mouseout", () => {
  belaBoja(email)
});
facebook.addEventListener("mouseout", () => {
  belaBoja(facebook)
});

// Animacija za navigation bar

const navBar = document.querySelectorAll(".navigation-bar li a");

for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mousemove", () => {
   navBar[i].setAttribute("style", "color: yellow")
  })
}

for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mouseout", () => {
   navBar[i].setAttribute("style", "color: white")
  })
}

// PROMENE ZA MOBILNI
//----------------------


