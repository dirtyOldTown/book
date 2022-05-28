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

// Animacija za navigation-bar
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
// Sređivanje druge sekcije (biografija-text)
const mediaHandler = window.matchMedia("(max-width: 667px)");
const biografija = document.querySelector(".biografija-text");
const slika = document.querySelector(".biografija img");

function promena() {
if (mediaHandler.matches) {
  biografija.innerHTML = `
  
  Do you believe in destiny? Do you think that everything happens for a 
  reason? Do you ever have that feeling of not belonging?
  My book I DO NOT BELONG is a story of a young girl desperately trying to 
  find herself and her place in the world after a tragic event in her life. A 
  chance encounter with an elderly American couple and a misunderstanding 
  on their part changes her life forever.
  She is catapulted into a new world searching for her destiny. Will she ever 
  find it? It's a relatable story inspired by true events. An easy and fast read. 
  You can find it on Amazon in paperback or kindle. And all the art
  throughout the book, including the cover, is mine.
  Hope you enjoy reading it. Please let me know. On Amazon, tweeter, Insta
  gram or Facebook. Until we meet again! 
  `;
  biografija.setAttribute("style", "font-size: 1.1em; padding: 12px; text-align: justify; width: 90%");
  slika.setAttribute("style", "margin-top: 40px")
} else {
  biografija.innerHTML = `
  <pre>
  <span>a</span>
  Do you believe in destiny? Do you think that everything happens for a 
  reason? Do you ever have that feeling of not belonging?
  My book I DO NOT BELONG is a story of a young girl desperately trying to 
  find herself and her place in the world after a tragic event in her life. A 
  chance encounter with an elderly American couple and a misunderstanding 
  on their part changes her life forever.
  She is catapulted into a new world searching for her destiny. Will she ever 
    find it? It's a relatable story inspired by true events. An easy and fast read. 
  You can find it on Amazon in paperback or kindle. And all the art
  throughout the book, including the cover, is mine.
  Hope you enjoy reading it. Please let me know. On Amazon, tweeter, Insta
  gram or Facebook. Until we meet again! 
  <span>b</span>
  </pre>
  `;
  biografija.setAttribute("style", "font-size: 110%;; padding: 0px; text-align: center; width: 100%");
  slika.setAttribute("style", "top: 4px")
}
}
mediaHandler.onchange = () => {
  promena();
}