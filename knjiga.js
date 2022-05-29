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
const mediaHandler = window.matchMedia("screen and (max-width: 667px)" );

const biografija = document.querySelector(".biografija-text");
const slika = document.querySelector(".biografija img");

function promena(x) {
if (x.matches) {
  biografija.innerHTML = `
  Do you believe in destiny? Do you think that everything happens for a 
  reason? Do you ever have that feeling of not belonging?
  My book I DO NOT BELONG is a story of a young girl desperately trying to 
  find herself and her place in the world after a tragic event in her life. A 
  chance encounter with an elderly American couple and a misunderstanding 
  on their part changes her life forever.
  <hr style="border: 3px double grey;">
  She is catapulted into a new world searching for her destiny. Will she ever 
  find it? It's a relatable story inspired by true events. An easy and fast read. 
  You can find it on Amazon in paperback or kindle. And all the art
  throughout the book, including the cover, is mine.
  Hope you enjoy reading it. Please let me know. On Amazon, tweeter, Insta
  gram or Facebook. Until we meet again! 
  `;
  biografija.classList.remove("biografija-text");
  biografija.classList.add("mobilni");
  slika.setAttribute("style", "margin-top: 20px");
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
biografija.classList.remove("mobilni");
biografija.classList.add("biografija-text");
  slika.setAttribute("style", "top: 4px");
}
}

promena(mediaHandler);
mediaHandler.addEventListener("change",promena);

// Promene za mobilni
const brisanjeSlike = window.matchMedia("(max-width: 500px)");
const četkice = document.getElementById("četkice");
const artBlok1 = document.getElementById("art");
const palme = document.querySelector(".palme");
const palmice = document.querySelector(".palme img");
const text = document.querySelector(".palme p");
const aboutMima = document.querySelector(".about");
const aboutMima2 = document.querySelector(".about2");

function promena2(x) {
  if (x.matches) {
    // Brisanje slike "četkice" i bojenje pozadine tamno sivom bojom
    artBlok1.removeChild(četkice);
    artBlok1.style.backgroundColor = "#343a40";
    artBlok1.style.color = "#f2f2f2";
    palmice.style.marginLeft = "8%";
    palmice.style.marginTop = "44px";
    text.style.marginLeft = "8%";
    aboutMima.innerHTML = `
    <pre style="font-size: 3.4vw">
    <q>This is a place for a qoute about paintings moved from former as 
    a young adult after completing her degree in English and Literature 
    from the University of Belgrade.</q>
  </pre>
    `
    aboutMima2.innerHTML = `
    <pre style="font-size: 3.4vw">
    <q>This is a place for a qoute about paintings moved from former as 
    a young adult after completing her degree in English and Literature 
    from the University of Belgrade.</q>
  </pre>
    `
  } else {
   artBlok1.insertBefore(četkice, palme);
   artBlok1.style.backgroundColor = "transparent";
   artBlok1.style.color = "black";
   aboutMima.innerHTML = `
   <pre>
    <q>This is a place for a qoute about paintings moved from former as a young adult
    after completing her degree in English and Literature from the
    University of Belgrade.</q>
  </pre>
   `
   aboutMima2.innerHTML = `
   <pre>
    <q>This is a place for a qoute about paintings moved from former as a young adult
    after completing her degree in English and Literature from the
    University of Belgrade.</q>
  </pre>
   `

  }
  // Unošenje blok-elementa iznad slike sa natpisom - Mima's arts

}
promena2(brisanjeSlike);
brisanjeSlike.addEventListener("change", promena2);