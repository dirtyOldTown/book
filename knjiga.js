// Animacija za email i facebook
const email = document.querySelector(".contact p:last-of-type a");
const facebook = document.querySelector("#facebook a");

// Funkcije za promenu boje
function plavaBoja(x) {
  x.setAttribute("style", "color: blue; background-color: white; padding: 4px")
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

