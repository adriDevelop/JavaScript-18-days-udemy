// Declaramos la clase principal.
class Deportista {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Y ahora, realizamos la herencia con la Subclase.
class Futbolista extends Deportista {
    constructor(nombre, edad, cantidadGoles){
        super(nombre, edad);
        this.cantidadGoles = cantidadGoles;
    }
}