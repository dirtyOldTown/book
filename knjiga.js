// #facebook, "email": Animacija (Promena boje: mouseover/mouseout)

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
// addEventListener (mouseout)
email.addEventListener("mouseout", () => {
  belaBoja(email)
});
facebook.addEventListener("mouseout", () => {
  belaBoja(facebook)
});

// 'navigation-bar': Animacija (Promena boje: mouseover/mouseout)

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

// 'umetnički blok', 'umetnički blok 2':
// Prelazak na flex-direction: column (matchMedia: max-width: 767px)

const mediaHandler = window.matchMedia('(max-width: 767px)');
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

// 'knjige-izdanja': Promena iz flex-direction: 'row' u flex-direction: 'column' 

const mediaHandler2 = window.matchMedia('(max-width: 670px)');
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

//'mima-arbid': Promena strukture teksta (matchMedia: max-width: 767px)

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

// 'biografija': Promena strukture teksta (max-width: 590px)

const biografijaText = document.querySelector(".biografija-text");
const biografijaTextPre = document.querySelector(".biografija-text pre");
const mediaHandler3 = window.matchMedia('(max-width: 590px)');

// Funkcija za mediaHandeler (max-width: 590px)
function biografijaPromena(x) {
  if (x.matches) {
    biografijaText.innerHTML = `
    <p id="wingdings-a">&#97;</p>
    <pre>
    Do you believe in destiny?
    Do you think that everything happens 
    for a reason? Do you ever have that 
    feeling of not belonging?
    <a href="#books">I DO NOT BELONG</a> is a story of a
    young girl desperately trying to find 
    herself and her place in the world after
    a tragic event in her life. A chance 
    encounter with an elderly 
    American couple and a misunderstanding 
    on their part changes her life forever. 
    She is catapultedinto a new  world 
    searching for her destiny. 
    Will she ever find it? 
    It's a relatable story inspired 
    by true events. An easy and fast read. 
    On Amazon, in paperback and kindle.
    </pre>
    <p id="wingdings-b">b</p>
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

// "#vrh-strane": Animacija (promena boje)
const vrhStrane = document.querySelector("#vrh-strane a");

vrhStrane.addEventListener("mouseover", (e) => {
e.target.style.backgroundColor = "#ced4da";
});
vrhStrane.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "transparent";
})
