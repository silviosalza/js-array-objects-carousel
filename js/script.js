// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.


//creo array degli oggetti
const gameArray = [{
    titolo: "Spiderman Miles Morales",
    descrizione:"lorem ipsum",
    immagine: "./img/01.webp",
},
{
    titolo: "Ratchet & Clank Rift Apart",
    descrizione:"sdvffv f",
    immagine: "./img/02.webp",
},
    
{
    titolo: "Fortnite",
    descrizione:"sfzcefd",
    immagine: "./img/03.webp",
},
    
{
    titolo: "Stray",
    descrizione:"dfvsrdfver",
    immagine: "./img/04.webp",
},
{
    titolo: "Marvel Avengers",
    descrizione:"dwfvrverv",
    immagine: "./img/05.webp",
}
];

const itemsContainer = document.querySelector(".slider-items");
console.log(itemsContainer);

//prendo le immagini di ogni elemento dell'array e la inserisco nel mio html
let itemsDivs = ""
const currentImage = gameArray.map(element=> element.immagine);

for (let i = 0; i < currentImage.length; i++){
    itemsDivs +=  `<div class="item"><img src="${currentImage[i]}" alt=""></div>`;

}
itemsContainer.innerHTML += itemsDivs;

const itemsInfo = document.querySelector(".info");
let infoDivs = ""
const currentTitle = gameArray.map(element=> element.titolo);
const currentDescription = gameArray.map(element=> element.descrizione);
for (let k = 0; k < currentTitle.length; k++){
    infoDivs +=  `<div class="game"><h1 class="title">${currentTitle[k]}</h1>
     <p class="description">${currentDescription[k]}</p></div>`;
}
itemsInfo.innerHTML = infoDivs;









//bottoni up & down
const itemsArray = document.getElementsByClassName("item");
const infoArray = document.getElementsByClassName("game");
const nextBtn = document.querySelector(".down");
const prevBtn = document.querySelector(".up");

//fisso la prima immagine
let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
infoArray[activeItemIndex].classList.add("active");


//gestisco bottone down

nextBtn.addEventListener("click", function next() {
    prevBtn.classList.remove("hidden");

    itemsArray[activeItemIndex].classList.remove("active");
    infoArray[activeItemIndex].classList.remove("active");

    if (activeItemIndex < itemsArray.length - 1) {
        activeItemIndex++;
        
    } else {
        activeItemIndex= 0

    }
    itemsArray[activeItemIndex].classList.add("active");   
    infoArray[activeItemIndex].classList.add("active");
    clearInterval(autoplay)
    autoplay = setInterval(next, 3000)
})

//gestisco bottone up
prevBtn.addEventListener("click", function() {
    nextBtn.classList.remove("hidden");

    infoArray[activeItemIndex].classList.remove("active");
    itemsArray[activeItemIndex].classList.remove("active");

     if (activeItemIndex > 0) {
        activeItemIndex--;
        
    } else {
        activeItemIndex = itemsArray.length - 1
    }

    infoArray[activeItemIndex].classList.add("active");
    itemsArray[activeItemIndex].classList.add("active");
    clearInterval(autoplay)
    autoplay = setInterval(next, 3000)
})


//gestisco la funzionalità di autoplay
let autoplay;

let next = function() {
    prevBtn.classList.remove("hidden");

    infoArray[activeItemIndex].classList.remove("active");
    itemsArray[activeItemIndex].classList.remove("active");

    if (activeItemIndex < itemsArray.length - 1) {
        activeItemIndex++;
        
    } else {
        activeItemIndex= 0

    }
    itemsArray[activeItemIndex].classList.add("active");
    infoArray[activeItemIndex].classList.add("active");   
}

autoplay = setInterval(next, 3000)


