class Tablero {
    //El Tablero recibe una matriz y el contexto del canvas.
    constructor(matriz, ctx) {
        this.matriz = matriz;
        this.ctx = ctx;
        this.casillero = null
    }

    //Metodo con el que creamos el tablero y sus datos.
    create(inicioY, finY, inicioTable, filas, columnas) {
        for (let x = 0; x < filas; x++) {
            let fila = [];
            let inicioX = inicioTable;
            let finX = inicioTable + 105.3;
            for (let y = 0; y < columnas; y++) {
                this.casillero = new Casillero(this.ctx, inicioX, finX, inicioY, finY);
                fila.push(this.casillero);
                inicioX = inicioX + 105.3;
                finX = finX + 105.3;
            }
            this.matriz.push(fila);
            inicioY = inicioY + 67;
            finY = finY + 67;
        }
    }

    //Metodo con el que dibujamos el tablero.
    drawTable() {
        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = 0; j < this.matriz[i].length; j++) {
                this.matriz[i][j].draw();
            }
        }
    }

    //Metodo con el que obtenemos la matriz.
    getMatriz() {
        return this.matriz;
    }

    //Metodo donde limpiamos el tablero para cuando actualicemos el canvas.
    clearTable() {
        this.drawTable();
        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = 0; j < this.matriz[i].length; j++) {
                this.casilleroDrawObj(i, j);
            }
        }
    }

    //Metodo para saber si se solto alguna ficha sobre el tablero y donde se solto.
    mouseUpTable(lastClickedFigure, i, j) {
        if(((lastClickedFigure.getPosX() > this.matriz[i][j].getInicioX()) && (lastClickedFigure.getPosX() < this.matriz[i][j].getFinX())) 
            && ((lastClickedFigure.getPosY() > this.matriz[i][j].getInicioY()) && (lastClickedFigure.getPosY() < this.matriz[i][j].getFinY()))) {
                return true;
        }
        return false;
    }

    //Metodo para la busqueda de la linea de manera de fila. Se envia el modo elegido(el largo).
    searchRow(mode) {
        let contador = 0;
        let aux = "";

        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = 0; j < this.matriz[i].length; j++) {
                if(contador < mode){
                    if(this.matriz[i][j].getObj() != null) {
                        if(contador == 0) {
                            aux = this.matriz[i][j].getObj().getName();
                            contador++;
                        }else if(contador > 0) {
                            if(this.matriz[i][j].getObj().getName() == aux) {
                                contador++;
                            }else {
                                contador = 1;
                                aux = this.matriz[i][j].getObj().getName();
                            }
                        }
                    }else {
                        if(this.matriz[i][j].getObj() == null) {
                            contador = 0;
                            aux = "";
                        }
                    }
                }else {
                    return true;
                        }
            }
            if(contador == mode) {
                return true;
            }else{
                contador = 0;
                aux = "";
            }
                    
        }
        return false;
    }

    //Metodo para la busqueda de la linea de manera de columna. Se envia el modo elegido(el largo).
    searchColumn(mode) {
        let contador = 0;
        let aux = "";

        let columna = 0;
        let fila = 0;

        while(columna < mode*2) {
            while(fila < mode*2) {
                if(contador < mode) {
                    if(this.matriz[fila][columna].getObj() != null) {
                        if(contador == 0) {
                            aux = this.matriz[fila][columna].getObj().getName();
                            contador++;
                        }else if(contador > 0) {
                            if(this.matriz[fila][columna].getObj().getName() == aux){
                                contador++;
                            }else {
                                aux = this.matriz[fila][columna].getObj().getName();
                                contador = 1;
                            }
                        }
                    }else if(this.matriz[fila][columna].getObj() == null) {
                        aux = "";
                        contador = 0;
                    }
                }else {
                    return true;
                }
                fila++;
            }
            if(contador == mode) {
                return true;
            }else{
                columna++;
                fila = 0;
                contador = 0;
                aux = "";
            }
        }
        return false;
    }

    //Metodo para la busqueda de la linea de manera de diagonal empezando desde la izquierda. Se envia el modo elegido(el largo).
    //Se rrecore de izquierda a derecha por columna, pero con cada objeto de la fila se empieza a rrecorer de manera diagonal(para la derecha) desde su posicion y asi con cada uno.
    searchDiagonalLeft(mode, filas, columnas) {
        let contador = 0;
        let aux = "";
        let busqueda = false;

        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = 0; j < this.matriz[i].length; j++) {
                if(this.matriz[i][j].getObj() != null) {
                    contador = 1;
                    aux = this.matriz[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while(busqueda === true) {
                        if(contador < mode) {
                            x++;
                            y++;
                            if(x < columnas && y < filas) {
                                if(this.matriz[y][x].getObj() != null) {
                                    if(this.matriz[y][x].getObj().getName() == aux) {
                                        contador++;
                                    }else {
                                        busqueda = false;
                                    }
                                }else if(this.matriz[y][x].getObj() == null) {
                                    busqueda = false;
                                }
                            }else{
                                return false;
                            }
                        }else if(contador == mode) {
                            busqueda = false;
                            return true;
                        }
                    }
                }
            }
            if(contador == mode) {
                return true;
            }
        }
        return false;
    }

    //Metodo para la busqueda de la linea de manera de diagonal empezando desde la derecha. Se envia el modo elegido(el largo).
    //Se rrecore de izquierda a derecha por columna, pero con cada objeto de la fila se empieza a rrecorer de manera diagonal(para la izquierda) desde su posicion y asi con cada uno.
    searchDiagonalRight(mode, filas, columnas) {
        let contador = 0;
        let aux = "";
        let busqueda = false;

        for (let i = 0; i < this.matriz.length; i++) {
            for (let j = columnas-1; j >= 0; j--) {
                if(this.matriz[i][j].getObj() != null) {
                    contador = 1;
                    aux = this.matriz[i][j].getObj().getName();
                    busqueda = true;
                    let x = j;
                    let y = i;
                    while(busqueda === true) {
                        if(contador < mode) {
                            x--;
                            y++;
                            if(x >= 0 && y < filas) {
                                if(this.matriz[y][x].getObj() != null) {
                                    if(this.matriz[y][x].getObj().getName() == aux) {
                                        contador++;
                                    }else {
                                        busqueda = false;
                                    }
                                }else if(this.matriz[y][x].getObj() == null) {
                                    busqueda = false;
                                }
                            }else{
                                return false;
                            }
                        }else if(contador == mode) {
                            busqueda = false;
                            return true;
                        }
                    }
                }
            }
            if(contador == mode) {
                return true;
            }
        }
        return false;
    }

    //Metodo para setear el ocupado del casillero.
    setOcupadoCasillero(lastClickedFigure, i, j) {
        this.matriz[i][j].setOcupado(lastClickedFigure);
    }

    //Metodo para dibujar el objeto que tiene el casillero.
    casilleroDrawObj(i, j) {
        this.matriz[i][j].drawObj();
    }
}