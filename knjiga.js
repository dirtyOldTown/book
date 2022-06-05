// PROMENE ZA LAPTOP + MOBILNI
//-----------------------------

// Animacija za email, facebook (Promena boja: mouseover/mouseout)

const email = document.querySelector(".kontakt-imejl p:last-of-type a");
const facebook = document.querySelector("#facebook a");
// Funkcije za animaciju
function plavaBoja(x) {
  x.setAttribute("style", "color: #90e0ef")
}
function belaBoja(x) {
    x.setAttribute("style", "color: white; background-color: transparent")
  }
// mouseover (addEventListener)
email.addEventListener("mouseover", () => {
  plavaBoja(email)
});
facebook.addEventListener("mouseover", () => {
  plavaBoja(facebook)
});
//  mouseout (addEventListener)
email.addEventListener("mouseout", () => {
  belaBoja(email)
});
facebook.addEventListener("mouseout", () => {
  belaBoja(facebook)
});
// Animacija za navigation-bar 

const navBar = document.querySelectorAll(".navigation-bar li a");
// Looping: moouseover (addEventListener)
for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mousemove", () => {
   navBar[i].setAttribute("style", "color: yellow")
  })
}
// Looping: moouseout (addEventListener)
for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mouseout", () => {
   navBar[i].setAttribute("style", "color: white")
  })
}

// MOBILNI
//---------------------