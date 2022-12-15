let imagenes = ["assets/img/gameImg-1.png", "assets/img/gameImg-2.png", "assets/img/gameImg-3.png", "assets/img/gameImg-4.png", "assets/img/gameImg-5.png"]

let btnIzquierda = document.getElementById("izquierda");

let btnDerecha = document.getElementById("derecha");

btnIzquierda.addEventListener("click", switchImageLeft);

btnDerecha.addEventListener("click", switchImageRight);

let img1 = document.querySelector(".imgGame-1");
img1.src = imagenes[0];

let img2 = document.querySelector(".imgGame-2");
img2.src = imagenes[1];

let i = 0;
let j = 1;

let reseteoRight = false;
let reseteoLeft = false;

function switchImageRight() {
    if(j < 4 && reseteoRight === false){
        i++;
        img1.classList.toggle("opacityImgGameRight");
        img1.src = imagenes[i];
        j++;
        img2.classList.toggle("opacityImgGameRight");
        img2.src = imagenes[j];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameRight");
            img2.classList.toggle("opacityImgGameRight");
        },500);
        if(j === 4) {
            reseteoRight = true;
        }
    }else if(j === 5){
        i = 0;
        j = 1
        img1.classList.toggle("opacityImgGameRight");
        img1.src = imagenes[i];
        img2.classList.toggle("opacityImgGameRight");
        img2.src = imagenes[j];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameRight");
            img2.classList.toggle("opacityImgGameRight");
        },500);

    }else {
        i = 4;
        j = 0;
        img1.classList.toggle("opacityImgGameRight");
        img1.src = imagenes[i];
        img2.classList.toggle("opacityImgGameRight");
        img2.src = imagenes[j];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameRight");
            img2.classList.toggle("opacityImgGameRight");
        },500);
        reseteoRight = false;
        i = -1;
    }
}

function switchImageLeft() {
    if(i > 0 && reseteoLeft === false){
        console.log(i)
        j--;
        img2.classList.toggle("opacityImgGameLeft");
        img2.src = imagenes[j];
        i--;
        img1.classList.toggle("opacityImgGameLeft");
        img1.src = imagenes[i];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameLeft");
            img2.classList.toggle("opacityImgGameLeft");
        },500);
        if(i === 0) {
            reseteoLeft = true;
        }
    }else if(i === -1){
        i = 3;
        j = 4;
        img1.classList.toggle("opacityImgGameRight");
        img1.src = imagenes[i];
        img2.classList.toggle("opacityImgGameRight");
        img2.src = imagenes[j];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameRight");
            img2.classList.toggle("opacityImgGameRight");
        },500);
    }else {
        i = 4;
        j = 0;
        img2.classList.toggle("opacityImgGameRight");
        img2.src = imagenes[j];
        img1.classList.toggle("opacityImgGameRight");
        img1.src = imagenes[i];
        setTimeout(() => {
            img1.classList.toggle("opacityImgGameRight");
            img2.classList.toggle("opacityImgGameRight");
        },500);
        reseteoLeft = false;
        j = 5;
    }
}