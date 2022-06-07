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
// addEventListener (mouseover)
email.addEventListener("mouseover", () => {
  plavaBoja(email)
});
facebook.addEventListener("mouseover", () => {
  plavaBoja(facebook)
});
//   addEventListener (mouseout)
email.addEventListener("mouseout", () => {
  belaBoja(email)
});
facebook.addEventListener("mouseout", () => {
  belaBoja(facebook)
});

// Animacija za navigation-bar  (Promena boja: mouseover/mouseout)

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

// Promena strukture teksta (matchMedia: max-width: 767px )

const biografijaText = document.querySelector(".biografija-text");
const umetničkiBlok = document.querySelector(".umetnički-blok");
const umetničkiBlok2 = document.querySelector(".umetnički-blok2");
const mediaHandler = window.matchMedia('screen and (max-width: 767px)');
// Funkcija za mediaHandler (max-width: 767px)
function promenaTexta(x) {
  if (x.matches) {
    biografijaText.innerHTML = `
    <pre>
    Do you believe in destiny? Do you think that everything 
    happens for a reason? Do you ever have that feeling of 
    not belonging? My book <a href="#books">I DO NOT BELONG</a> is a story
    of a young girl desperately trying to find herself and
    her place in the world after a tragic event in her life. 
    A chance encounter with an elderly American couple and a 
    misunderstanding on their part changes her life forever. 
    She is catapulted into a new world searching for her 
    destiny. Will she ever find it? It's a relatable story 
    inspired by true events. An easy and fast read. You can 
    find it on Amazon in paperback or kindle. And all the art 
    throughout the book, including the cover, is mine. 
    Hope you enjoy reading it. Please let me know. On Amazon, 
    Tweeter, Instagram or Facebook. Until we meet again! 
   </pre>
    `
    umetničkiBlok.setAttribute("style", "flex-direction: column; align-items: flex-start");
    umetničkiBlok2.setAttribute("style", "flex-direction: column-reverse; align-items: flex-start");
  } else {
    biografijaText.innerHTML = `
    <p id="wingdings-a">a</p>
    <pre>
     Do you believe in destiny? Do you think that everything happens for a 
     reason? Do you ever have that feeling of not belonging?
     My book <a href="#books">I DO NOT BELONG</a> is a story of a young girl desperately trying to 
     find herself and her place in the world after a tragic event in her life. A 
     chance encounter with an elderly American couple and a misunderstanding 
     on their part changes her life forever.
     She is catapulted into a new world searching for her destiny. Will she ever 
     find it? It's a relatable story inspired by true events. An easy and fast read. 
     You can find it on Amazon in paperback or kindle. And all the art
     throughout the book, including the cover, is mine.
     Hope you enjoy reading it. Please let me know. On Amazon, tweeter, Insta-
     gram or Facebook. Until we meet again! 
    </pre>
    <p id="wingdings-b">b</p>      
    `
    umetničkiBlok.setAttribute("style", "flex-direction: row; align-items: flex-end");
    umetničkiBlok2.setAttribute("style", "flex-direction: row; align-items: flex-end");
  }
}
// Realizovanje funkcije (addEventListener)
promenaTexta(mediaHandler);
mediaHandler.addEventListener("change",promenaTexta)

