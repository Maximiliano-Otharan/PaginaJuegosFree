class Casillero {
    constructor(ctx, inicioX, finX, inicioY, finY) {
        this.inicioX = inicioX;
        this.finX = finX;
        this.inicioY = inicioY;
        this.finY = finY;
        this.ctx = ctx;
        this.ocupado = false;
        this.obj = null;
        this.imgFicha= null;
        this.imgOcupacion = null;
        this.imgCasillero = new Image();
        this.imgCasillero.src = "assets/img/copaArgentinaCasillero.png";
    }
    //Metodo para dibujar el casillero.
    draw() {
        this.ctx.fillStyle = "#B2FFFF";
        this.ctx.fillRect(this.inicioX, this.inicioY, 105.3, 67);
        this.ctx.drawImage(this.imgCasillero, this.inicioX+10, this.inicioY+20);

        this.ctx.beginPath();
        this.ctx.arc(this.inicioX+52.65, this.inicioY+33.5, 25, 0, 2 * Math.PI);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();
    }
    //Metodo para obtener el inicio en el eje X.
    getInicioX() {
        return this.inicioX;
    }
    //Metodo para obtener el inicio en el eje Y.
    getInicioY() {
        return this.inicioY;
    }
    //Metodo para obtener el fin en el eje X.
    getFinX() {
        return this.finX;
    }
    //Metodo para obtener el fin en el eje Y.
    getFinY() {
        return this.finY;
    }
    //Metodo para setear su ocupacion, agregar el objeto y guardar su imagen.
    setOcupado(obj) {
        this.ocupado = true;
        this.obj = obj;
        this.imgFicha = this.obj.getImg();
    }
    //Metodo para eliminar el objeto que lo esta ocupando.
    deleteOcupado() {
        this.ocupado = false;
        this.obj = null;
    }
    //Metodo para dibujar el objeto ficha que fue dejada dentro de las posiciones de este casillero.
    drawObj() {
        if(this.ocupado == true) {
            this.ctx.beginPath();
            this.ctx.arc(this.inicioX +52.65, this.inicioY +33.5, 25, 0, 2 * Math.PI);
            this.ctx.fillStyle = this.obj.getFill();
            this.ctx.fill();
            this.ctx.closePath();

            this.imgOcupacion = new Image();
            this.imgOcupacion.src = this.imgFicha;
            this.ctx.drawImage(this.imgOcupacion, this.inicioX +52.65-15, this.inicioY +33.5-15);
        }
    }
    //Metodo para obtener el objeto que contiene el casillero.
    getObj() {
        return this.obj;
    }
    
}