
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

// Prelazak na flex-direction: column (matchMedia: max-width: 767px)
// za 'umetnički blok', 'umetnički blok 2':
//----------------------------------------------------------------------
const mediaHandler = window.matchMedia('screen and (max-width: 767px)');
const umetničkiBlok = document.querySelector(".umetnički-blok");
const umetničkiBlok2 = document.querySelector(".umetnički-blok2");
// Funkcija za mediaHandler (max-width: 767px)
function promenaTexta(x) {
  if (x.matches) {
    umetničkiBlok.setAttribute("style", "flex-direction: column; align-items: flex-start");
    umetničkiBlok2.setAttribute("style", "flex-direction: column-reverse; align-items: flex-start");
  } else {
    umetničkiBlok.setAttribute("style", "flex-direction: row; align-items: flex-end");
    umetničkiBlok2.setAttribute("style", "flex-direction: row; align-items: flex-end");
  }
}
// Realizovanje funkcije (addEventListener)
promenaTexta(mediaHandler);
mediaHandler.addEventListener("change", promenaTexta)

// Prelazak na flex-direction: column za 'knjige-izdanja'
//----------------------------------------------------------------------
const mediaHandler2 = window.matchMedia('screen and (max-width: 670px)');
const knjigeIzdanja = document.querySelector(".knjige-izdanja");
// funkcija za mediaHandler2 (max-width: 670px)
function column(x) {
  if (x.matches) {
    knjigeIzdanja.setAttribute("style", "flex-direction: column");
  } else {
    knjigeIzdanja.setAttribute("style", "flex-direction: row");
  }
}
// Realizovanje funkcije (addEventListener)
column(mediaHandler2);
mediaHandler2.addEventListener("change", column);

// Promena strukture teksta (matchMedia: max-width: 767px) za 'mima-arbid'
//---------------------------------------------------------------------------
const mimaarbidPre = document.querySelector(".mimaarbid pre");
//  Funkcija za mediaHandler (max-width: 767px)
function mimaarbidPromena(x) {
  if (x.matches) {
    mimaarbidPre.innerHTML = `
    Mima Arbid moved from former Yugoslavia 
    as a young adult after completing her 
    degree in English and Literature from 
    University of Belgrade. She has traveled 
    the world embracing different cultures. 
    <span style="line-height:2.2em">Mima is a mother, wife, artist and writer.</span>
    <span style="line-height:1.5em">I DO NOT BELONG is her first novel.</span>
    `
  } else {
    mimaarbidPre.innerHTML = `
    Mima Arbid moved from former Yugoslavia as a young adult after completing her degree
    in English and Literature from University of Belgrade. She has traveled the world
    embracing different cultures. Mima is a mother, wife, artist and writer.
    I DO NOT BELONG is her first novel.
    `
  }
}
// Realizovanje funkcije (addEventListener)
mimaarbidPromena(mediaHandler);
mediaHandler.addEventListener("change", mimaarbidPromena);

// Promena strukture teksta (max-width: 590px) za 'biografija-text'
//--------------------------------------------------------------------------
const mediaHandler3 = window.matchMedia('screen and (max-width: 590px)');
const biografijaText = document.querySelector(".biografija-text");
const biografijaTextPre = document.querySelector(".biografija-text pre");
// Funkcija za mediaHandeler (max-width: 590px)
function biografijaPromena(x) {
  if (x.matches) {
    biografijaText.innerHTML = `
    <pre>
    Do you believe in destiny?
    Do you think that everything happens 
    for a reason? Do you ever have that 
    feeling of not belonging?
    <a href="https://www.goodreads.com/book/show/56043154-i-do-not-belong">I DO NOT BELONG</a> is a story of a
    young girl desperately trying to find 
    herself and her place in the world after
    a tragic event in her life. A chance 
    encounter with an elderly 
    American couple and a misunderstanding 
    on their part changes her life forever. 
    She is catapulted into a new  world 
    searching for her destiny. 
    Will she ever find it? 
    It's a relatable story inspired 
    by true events. An easy and fast read. 
    On Amazon, in paperback and kindle.
    </pre>
    `
  } else  {
    biografijaText.innerHTML = `
    <p id="wingdings-a">&#97;</p>
    <pre>
    Do you believe in destiny?
     Do you think that everything happens for a reason? 
     Do you ever have that feeling of not belonging?
    <a href="https://www.goodreads.com/book/show/56043154-i-do-not-belong">I DO NOT BELONG</a> is a story of a young girl desperately trying 
    to find herself and her place in the world after a tragic event 
    in her life. A chance encounter with an elderly American 
    couple and a misunderstanding on their part changes her life forever.
    She is catapulted into a new world searching for her destiny. 
    Will she ever find it? 
    It's a relatable story inspired by true events. 
    An easy and fast read. 
    On Amazon, in paperback and kindle.
    </pre>
    <p id="wingdings-b">b</p>
    `
  }
}
// Realizovanje funkcije (addEventListener)
biografijaPromena(mediaHandler3);
mediaHandler3.addEventListener("change", biografijaPromena);

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

// Promena strukture teksta (max-width: 491px) za mobilni
//----------------------------------------------------------
const slikaText = document.querySelector(".slika-text");
const mediaHandler4 = window.matchMedia('screen and (max-width: 491px)');
//Funkcija za mediaHandler4 (max-width: 491px)
function slikaTextPromena(x) {
  if (x.matches) {
    slikaText.innerHTML = `
    <p>"There's no other trees that I</p>
    <p>like more than palm trees. Palm trees,</p>
    <p> beaches and perpetual sunshine..."</p>
    `
  } else {
    slikaText.innerHTML = `
      <p>"There's no other trees that I like more than palm trees.</p>
      <p>They are what I see when I close my eyes.</p>
      <p>Palm trees, beaches and perpetual sunshine..."</p>
      <p></p>
      `
  }
}
// Realizovanje funkcije (addEventListener)
slikaTextPromena(mediaHandler4);
mediaHandler4.addEventListener("change", slikaTextPromena);

/* Text-blok za link za amazon (Da se kupi knjiga "I Do Not Belong")
const knjige = document.querySelector(".knjige");
const element = document.createElement("p");
element.classList.add("amazon")
element.innerHTML = "By Mima's book on Amazon!";
knjige.insertAdjacentElement ("afterbegin", element);*/




