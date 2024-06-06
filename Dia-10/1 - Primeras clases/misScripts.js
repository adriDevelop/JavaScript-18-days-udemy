// Declaracion de clase.
class Papel{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// Expresion de clase no nombrada.
let PapelA = class {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// Expresion de clase nombrada.
let PapelB = class PapelB {
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}