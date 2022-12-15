/*CARRUSEL HERO */
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");

let pressed = false;
let startX;
let x;

slider.addEventListener("mousedown", function(e) {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener("mouseenter", function() {
    slider.style.cursor = 'grab';
});

slider.addEventListener("mouseup", function() {
    slider.style.cursor = 'grab';
});

window.addEventListener("mouseup", function() {
    pressed = false;
});

slider.addEventListener("mousemove", function(e) {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startX}px`
    checkboundary();
})

function checkboundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    console.log(outer);
    console.log(inner);

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = "0px";
    }else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
 }