// Creamos la clase con su constructor, getters y setters.
class Ejemplo {
    constructor(){
        this._algo = 0;
    }

    get algo(){
        return this._algo;
    }

    set algo(nuevoValor){
        this._algo = nuevoValor;
    }
}