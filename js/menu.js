const hamburguer = document.querySelector('.hamburguer');
const menuHamburguer = document.querySelector('.menuHamburguer');
const userSection = document.querySelector('.userSectionContainer');
const button1 = document.querySelector('.button-1');
const button2 = document.querySelector('.button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('.button-4');
const button5 = document.querySelector('.button-5');
const shareAccout = document.querySelector('.shareAccountContainer');

hamburguer.addEventListener("click", function(){
    hamburguer.classList.toggle("active");
    menuHamburguer.classList.toggle("open");   
    button1.classList.toggle("active");
    button2.classList.toggle("active");
    button3.classList.toggle("active");
    button4.classList.toggle("active");
    button5.classList.toggle("active");
    userSection.classList.toggle("active");
    shareAccout.classList.toggle("active");
});
