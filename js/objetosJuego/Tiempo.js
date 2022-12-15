class Tiempo{
    constructor(cronometro, max, milisegundos) {
        this.intervalo = null;
        this.cronometro = cronometro;
        this.max = max;
        this.milisegundos = milisegundos
    }
    //Metodo para inicar el cronometro de la partida.
    startCronometro() {
        this.intervalo = setInterval(() => {
            if(this.cronometro < this.max){
                this.cronometro++;
            }
        }, this.milisegundos);
    }
    //Metodo para detener el cronometro.
    stopCronometro() {
        this.cronometro = this.max;
        clearInterval(this.intervalo);
    }
    //Metodo para obtener la cantidad de minutos que pasaron.
    getCronometro() {
       return this.cronometro;
    }
    //Metodo para reiniciar la partida.
    setCronometro() {
        this.cronometro = 0;
    }

    getMax() {
        return this.max;
    }

    setMax(newMax) {
        this.max = newMax;
    }
}