class Circle {
    constructor(name, posX, posY, radius, fill, ctx, img){
        this.name = name;
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.ctx = ctx;
        this.radius = radius;
        this.source = img;
        this.img = new Image();
        this.img.src = img;
    }
    //Metodo para dibujar la ficha con la imagen elegida. La imagen aparecera luego de interactuar con el canvas. Se quiso usar el image.onload pero no cargaba la imagen.
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.fill;
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.drawImage(this.img, this.posX-15, this.posY-15);
    }
    //Metodo para obtener el nombre de la ficha(el equipo)
    getName() {
        return this.name;
    }
    //Metodo para obtener su color.
    getFill() {
        return this.fill;
    }
    //Metodo para obtener su radio.
    getRadius(){
        return this.radius;
    }
    //Metodo para obtener si estamos clickeando dentro del radio de la ficha o no. Se devolvera un true si es asi.
    isPointInside(x, y){
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }
    //Metodo para devolver la posicion de la ficha.
    getPosition() {
        return {
            x: this.posX,
            y: this.posY
        }
    }
    //Metodo el cual seteara la ubicacion de la ficha y la cual permite actualizarla.
    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }
    //Metodo para obtener la posicion en X.
    getPosX() {
        return this.posX;
    }
    //Metodo para obtener la posicion en Y.
    getPosY() {
        return this.posY;
    }
    //Metodo para obtener la imagen.
    getImg() {
        return this.source;
    }
}