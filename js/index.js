/*CARRUSEL DEPORTES */

let sliderCategoriesDeportes = document.querySelector("#slider-categories-deportes");
let innerSliderCategoriesDeportes = document.querySelector("#slider-inner-categories-deportes");

let pressedCategoriesDeportes = false;
let startXcategoriesDeportes;
let xCategoriesDeportes;

sliderCategoriesDeportes.addEventListener("mousedown", function(e) {
    pressedCategoriesDeportes = true;
    startXcategoriesDeportes = e.offsetX - innerSliderCategoriesDeportes.offsetLeft;
    sliderCategoriesDeportes.style.cursor = 'grabbing';
});

sliderCategoriesDeportes.addEventListener("mouseenter", function() {
    sliderCategoriesDeportes.style.cursor = 'grab';
});

sliderCategoriesDeportes.addEventListener("mouseup", function() {
    sliderCategoriesDeportes.style.cursor = 'grab';
});

window.addEventListener("mouseup", function() {
    pressedCategoriesDeportes = false;
});

sliderCategoriesDeportes.addEventListener("mousemove", function(e) {
    if(!pressedCategoriesDeportes) return;
    e.preventDefault();

    xCategoriesDeportes = e.offsetX

    innerSliderCategoriesDeportes.style.left = `${xCategoriesDeportes - startXcategoriesDeportes}px`
    checkboundaryDeportes();
})

function checkboundaryDeportes(){
    let outerCategoriesDeportes = sliderCategoriesDeportes.getBoundingClientRect();
    let innerCategoriesDeportes = innerSliderCategoriesDeportes.getBoundingClientRect();

    console.log(outerCategoriesDeportes);
    console.log(innerCategoriesDeportes);

    if(parseInt(innerSliderCategoriesDeportes.style.left) > 0){
        innerSliderCategoriesDeportes.style.left = "0px";
    }else if(innerCategoriesDeportes.right < outerCategoriesDeportes.right){
        innerSliderCategoriesDeportes.style.left = `-${innerCategoriesDeportes.width - outerCategoriesDeportes.width}px`
    }
 }

 /*CARRUSEL JUEGOS DE MESA */

 let sliderCategoriesJuegosDeMesa = document.querySelector("#slider-categories-juegosDeMesa");
let innerSliderCategoriesJuegosDeMesa = document.querySelector("#slider-inner-categories-juegosDeMesa");

let pressedCategoriesJuegosDeMesa = false;
let startXcategoriesJuegosDeMesa;
let xCategoriesJuegosDeMesa;

sliderCategoriesJuegosDeMesa.addEventListener("mousedown", function(e) {
    pressedCategoriesJuegosDeMesa = true;
    startXcategoriesJuegosDeMesa = e.offsetX - innerSliderCategoriesJuegosDeMesa.offsetLeft;
    sliderCategoriesJuegosDeMesa.style.cursor = 'grabbing';
});

sliderCategoriesJuegosDeMesa.addEventListener("mouseenter", function() {
    sliderCategoriesJuegosDeMesa.style.cursor = 'grab';
});

sliderCategoriesJuegosDeMesa.addEventListener("mouseup", function() {
    sliderCategoriesJuegosDeMesa.style.cursor = 'grab';
});

window.addEventListener("mouseup", function() {
    pressedCategoriesJuegosDeMesa = false;
});

sliderCategoriesJuegosDeMesa.addEventListener("mousemove", function(e) {
    if(!pressedCategoriesJuegosDeMesa) return;
    e.preventDefault();

    xCategoriesJuegosDeMesa = e.offsetX

    innerSliderCategoriesJuegosDeMesa.style.left = `${xCategoriesJuegosDeMesa - startXcategoriesJuegosDeMesa}px`
    checkboundaryJuegosDeMesa();
})

function checkboundaryJuegosDeMesa(){
    let outerCategoriesJuegosDeMesa = sliderCategoriesJuegosDeMesa.getBoundingClientRect();
    let innerCategoriesJuegosDeMesa = innerSliderCategoriesJuegosDeMesa.getBoundingClientRect();

    console.log(outerCategoriesJuegosDeMesa);
    console.log(innerCategoriesJuegosDeMesa);

    if(parseInt(innerSliderCategoriesJuegosDeMesa.style.left) > 0){
        innerSliderCategoriesJuegosDeMesa.style.left = "0px";
    }else if(innerCategoriesJuegosDeMesa.right < outerCategoriesJuegosDeMesa.right){
        innerSliderCategoriesJuegosDeMesa.style.left = `-${innerCategoriesJuegosDeMesa.width - outerCategoriesJuegosDeMesa.width}px`
    }
 }

 /*JUEGOS DE ACCION */

 let sliderCategoriesAccion = document.querySelector("#slider-categories-accion");
let innerSliderCategoriesAccion = document.querySelector("#slider-inner-categories-accion");

let pressedCategoriesAccion = false;
let startXcategoriesAccion;
let xCategoriesAccion;

sliderCategoriesAccion.addEventListener("mousedown", function(e) {
    pressedCategoriesAccion = true;
    startXcategoriesAccion = e.offsetX - innerSliderCategoriesAccion.offsetLeft;
    sliderCategoriesAccion.style.cursor = 'grabbing';
});

sliderCategoriesAccion.addEventListener("mouseenter", function() {
    sliderCategoriesAccion.style.cursor = 'grab';
});

sliderCategoriesAccion.addEventListener("mouseup", function() {
    sliderCategoriesAccion.style.cursor = 'grab';
});

window.addEventListener("mouseup", function() {
    pressedCategoriesAccion = false;
});

sliderCategoriesAccion.addEventListener("mousemove", function(e) {
    if(!pressedCategoriesAccion) return;
    e.preventDefault();

    xCategoriesAccion = e.offsetX

    innerSliderCategoriesAccion.style.left = `${xCategoriesAccion - startXcategoriesAccion}px`
    checkboundaryAccion();
})

function checkboundaryAccion(){
    let outerCategoriesAccion = sliderCategoriesAccion.getBoundingClientRect();
    let innerCategoriesAccion = innerSliderCategoriesAccion.getBoundingClientRect();

    console.log(outerCategoriesAccion);
    console.log(innerCategoriesAccion);

    if(parseInt(innerSliderCategoriesAccion.style.left) > 0){
        innerSliderCategoriesAccion.style.left = "0px";
    }else if(innerCategoriesAccion.right < outerCategoriesAccion.right){
        innerSliderCategoriesAccion.style.left = `-${innerCategoriesAccion.width - outerCategoriesAccion.width}px`
    }
 }

 /*JUEGOS DE HABILIDAD */

 let sliderCategoriesHabilidad = document.querySelector("#slider-categories-habilidad");
 let innerSliderCategoriesHabilidad = document.querySelector("#slider-inner-categories-habilidad");
 
 let pressedCategoriesHabilidad = false;
 let startXcategoriesHabilidad;
 let xCategoriesHabilidad;
 
 sliderCategoriesHabilidad.addEventListener("mousedown", function(e) {
     pressedCategoriesHabilidad = true;
     startXcategoriesHabilidad = e.offsetX - innerSliderCategoriesHabilidad.offsetLeft;
     sliderCategoriesHabilidad.style.cursor = 'grabbing';
 });
 
 sliderCategoriesHabilidad.addEventListener("mouseenter", function() {
     sliderCategoriesHabilidad.style.cursor = 'grab';
 });
 
 sliderCategoriesHabilidad.addEventListener("mouseup", function() {
     sliderCategoriesHabilidad.style.cursor = 'grab';
 });
 
 window.addEventListener("mouseup", function() {
     pressedCategoriesHabilidad = false;
 });
 
 sliderCategoriesHabilidad.addEventListener("mousemove", function(e) {
     if(!pressedCategoriesHabilidad) return;
     e.preventDefault();
 
     xCategoriesHabilidad = e.offsetX
 
     innerSliderCategoriesHabilidad.style.left = `${xCategoriesHabilidad - startXcategoriesHabilidad}px`
     checkboundaryHabilidad();
 })
 
 function checkboundaryHabilidad(){
     let outerCategoriesHabilidad = sliderCategoriesHabilidad.getBoundingClientRect();
     let innerCategoriesHabilidad = innerSliderCategoriesHabilidad.getBoundingClientRect();
 
     console.log(outerCategoriesHabilidad);
     console.log(innerCategoriesHabilidad);
 
     if(parseInt(innerSliderCategoriesHabilidad.style.left) > 0){
         innerSliderCategoriesHabilidad.style.left = "0px";
     }else if(innerCategoriesHabilidad.right < outerCategoriesHabilidad.right){
         innerSliderCategoriesHabilidad.style.left = `-${innerCategoriesHabilidad.width - outerCategoriesHabilidad.width}px`
     }
    }