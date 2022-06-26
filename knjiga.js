
// Animacija (Promena boje: mouseover/mouseout) za #facebook, "email"
//----------------------------------------------------------------------
const email = document.querySelector(".kontakt-imejl p > a");
const facebook = document.querySelector("#facebook a");
// Funkcije za animaciju
function plavaBoja(x) {
  x.setAttribute("style", "color:#8ecae6")
}
function belaBoja(x) {
    x.setAttribute("style", "color: white; background-color: transparent")
  }
// addEventListener (mouseover)
facebook.addEventListener("mouseover", () => {
  plavaBoja(facebook);
});
email.addEventListener("mouseover", () => {
  email.style.color = "blue";
});
// addEventListener (mouseout i mouseup)
facebook.addEventListener("mouseout", () => {
  belaBoja(facebook)
});
facebook.addEventListener("mouseup", () => {
  belaBoja(facebook)
});
email.addEventListener("mouseout", () => {
  email.style.color = "#8ecae6";
});
email.addEventListener("mouseup", () => {
  email.style.color = "#8ecae6";
});

//  Animacija (Promena boje: mouseover/mouseout) za 'navigation-bar'
//----------------------------------------------------------------------
const navBar = document.querySelectorAll(".navigation-bar li a");
// For-Loop: addEventListener (moouseover)
for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mousemove", () => {
   navBar[i].setAttribute("style", "color: yellow")
  })
}
// For-Loop: addEventListener (moouseout)
for (let i = 0; i < navBar.length; i++) {
  navBar[i].addEventListener("mouseout", () => {
   navBar[i].setAttribute("style", "color: white")
  })
}
// Text-blok za link za amazon (Da se kupi knjiga "I Do Not Belong")
const knjige = document.querySelector(".knjige");
const element = document.createElement("p");
element.classList.add("amazon")
element.innerHTML = "By Mima's book on Amazon!";
knjige.insertAdjacentElement ("afterbegin", element);

// Tooltip za BOOKS
const amazon = document.querySelector(".amazon");
const tooltip = document.getElementById("belong");
// addEventListener(mouseover)
tooltip.addEventListener("mousemove", () => {
  amazon.style.visibility = "visible";
});
// addEventListener (mouseout)
tooltip.addEventListener("mouseout", () => {
  amazon.style.visibility = "hidden";
  });

  // Animacija (promena boje) za "#vrh-strane"
//----------------------------------------------------------------------
const vrhStrane = document.querySelector("#vrh-strane a");
vrhStrane.addEventListener("mouseover", (e) => {
e.target.style.backgroundColor = "#ced4da";
});
vrhStrane.addEventListener("mouseup", (e) => {
  e.target.style.backgroundColor = "#f2f2f2";
});
vrhStrane.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "#f2f2f2";
});




