let scrollTop = true;
let URLactual = window.location;
let sliderAnimation;
let animationActive;
let inicio;
let img;
let parrafoHero;
let imgAyrton;
let parrafoAyrton;

window.onscroll = function () {
    stickyFunction();

    if(document.querySelector(".slider") != null && document.querySelector(".inGameImg") != null && document.querySelector(".parrafoHero") != null
        && document.querySelector(".gameAyrton") != null && document.querySelector(".descripcionHero") != null){    
        let y = window.scrollY;
        console.log(y)
        teamAnimation(y);
        cardMoveFeatures(y);
        historyHero(y);
        descripcionHero(y);
    }
}

if(document.querySelector(".slider") != null && document.querySelector(".inGameImg") != null && document.querySelector(".parrafoHero") != null
    && document.querySelector(".gameAyrton") != null && document.querySelector(".descripcionHero") != null){

    sliderAnimation = document.querySelector(".slider");
    animationActive = false;
    inicio = false;
    img = document.querySelector(".inGameImg");
    parrafoHero = document.querySelector(".parrafoHero");
    imgAyrton = document.querySelector(".gameAyrton");
    parrafoAyrton = document.querySelector(".descripcionHero");
    sliderAnimation.classList.toggle("positionSlider");
}

function teamAnimation(y) {
    if(y < 800 && animationActive === true) {
        animationActive = false;
        if(inicio === true) {
            sliderAnimation.classList.toggle("carruselMove");
            sliderAnimation.classList.toggle("positionSlider");
        }
    }else if(y > 2000 && animationActive === false) {
        animationActive = true;
        sliderAnimation.classList.toggle("positionSlider");
        sliderAnimation.classList.toggle("carruselMove");
        inicio = true;
    }
}

let header = document.querySelector(".containerHeader");
let header1 = document.querySelector(".header-1");
let logo = document.querySelector(".logo");
let search = document.querySelector(".search");
let sticky = header.offsetTop;

function stickyFunction() {
    if(sticky != window.pageYOffset && scrollTop === true){
        header.classList.toggle("sticky");
        header1.classList.toggle("sticky");
        logo.classList.toggle("sticky");
        search.classList.toggle("sticky");
        scrollTop = false;
    }else if(sticky == window.pageYOffset && scrollTop === false){
        header.classList.toggle("sticky");
        header1.classList.toggle("sticky");
        logo.classList.toggle("sticky");
        search.classList.toggle("sticky");
        scrollTop = true;
    }
}

//Card 1
let activeCardMove = false;
let activeCardMove2 = false;

//card 2
let activeCard2Move = false;
let activeCard2Move2 = false;

//card 3
let activeCard3Move = false;
let activeCard3Move2 = false;

//card 4
let activeCard4Move = false;
let activeCard4Move2 = false;


function cardMoveFeatures(y) {
    //card 1
    if(y > 3300 && activeCardMove === false) {
        document.querySelector(".card").classList.toggle("cardMove");
        activeCardMove = true;
    }else if(y < 3300 && activeCardMove === true){
        document.querySelector(".card").classList.toggle("cardMove");
        activeCardMove = false;
    }

    if(y > 3450 && activeCardMove2 === false) {
        document.querySelector(".card").classList.toggle("cardMove2");
        activeCardMove2 = true;
    }else if(y < 3450 && activeCardMove2 === true){
        document.querySelector(".card").classList.toggle("cardMove2");
        activeCardMove2 = false;
    }

    //card 2
    if(y > 3800 && activeCard2Move === false) {
        document.querySelector(".card-2").classList.toggle("cardMove");
        activeCard2Move = true;
    }else if(y < 3800 && activeCard2Move === true){
        document.querySelector(".card-2").classList.toggle("cardMove");
        activeCard2Move = false;
    }

    if(y > 4000 && activeCard2Move2 === false) {
        document.querySelector(".card-2").classList.toggle("cardMove2");
        activeCard2Move2 = true;
    }else if(y < 4000 && activeCard2Move2 === true){
        document.querySelector(".card-2").classList.toggle("cardMove2");
        activeCard2Move2 = false;
    }

    //card 3
    if(y > 4200 && activeCard3Move === false) {
        document.querySelector(".card-3").classList.toggle("cardMove");
        activeCard3Move = true;
    }else if(y < 4200 && activeCard3Move === true){
        document.querySelector(".card-3").classList.toggle("cardMove");
        activeCard3Move = false;
    }

    if(y > 4400 && activeCard3Move2 === false) {
        document.querySelector(".card-3").classList.toggle("cardMove2");
        activeCard3Move2 = true;
    }else if(y < 4400 && activeCard3Move2 === true){
        document.querySelector(".card-3").classList.toggle("cardMove2");
        activeCard3Move2 = false;
    }

    //card 4
    if(y > 4800 && activeCard4Move === false) {
        document.querySelector(".card-4").classList.toggle("cardMove");
        activeCard4Move = true;
    }else if(y < 4800 && activeCard4Move === true){
        document.querySelector(".card-4").classList.toggle("cardMove");
        activeCard4Move = false;
    }

    if(y > 5000 && activeCard4Move2 === false) {
        document.querySelector(".card-4").classList.toggle("cardMove2");
        activeCard4Move2 = true;
    }else if(y < 5000 && activeCard4Move2 === true){
        document.querySelector(".card-4").classList.toggle("cardMove2");
        activeCard4Move2 = false;
    }
}

//imgHistory

let activateHistory = false;

function historyHero(y) {
    if(y > 1100 && activateHistory === false) {
        img.classList.toggle("inGameImgMove");
        parrafoHero.classList.toggle("parrafoHeroOpacity");
        activateHistory = true;
    }else if(y < 1100 && activateHistory === true) {
        img.classList.toggle("inGameImgMove");
        parrafoHero.classList.toggle("parrafoHeroOpacity");
        activateHistory = false;
    }
}

//imgDescripcion

let activateDescripcion = false;

function descripcionHero(y) {
    if(y > 2800 && activateDescripcion === false) {
        imgAyrton.classList.toggle("gameAyrtonMove");
        parrafoAyrton.classList.toggle("parrafoAyrtonOpacity");
        activateDescripcion = true;
    }else if(y < 2800 && activateDescripcion === true) {
        imgAyrton.classList.toggle("gameAyrtonMove");
        parrafoAyrton.classList.toggle("parrafoAyrtonOpacity");
        activateDescripcion = false;
    }
}
