// Creamos la clase Animal con su constructor y funcion informacion()
class Animal {
    constructor(nombre, peso, edad){
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    get peso(){
        return this._peso;
    }

    get edad(){
        return this._edad;
    }

    informacion(){
        return "Nombre: " + this.nombre + ", Peso: " + this.peso + ", Edad: " + this.edad;
    }
}

// Creamos las subclases.
// Perro.
class Perro extends Animal {
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this._raza = raza;
    }

    get raza(){
        return this._raza;
    }

    informacion(){
        return "Nombre: " + this.nombre + ", Peso: " + this.peso + ", Edad: " + this.edad + ", Raza: " + this.raza;
    }
}

// Gato.
class Gato extends Animal {
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this._sexo = sexo;
    }

    get sexo(){
        return this._sexo;
    }

    informacion(){
        return "Nombre: " + this.nombre + ", Peso: " + this.peso + ", Edad: " + this.edad + ", Sexo: " + this.sexo;
    }
}

// Conejo.
class Conejo extends Animal {
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this._color = color;
    }

    get color(){
        return this._color;
    }

    informacion(){
        return "Nombre: " + this.nombre + ", Peso: " + this.peso + ", Edad: " + this.edad + ", Color: " + this.color;
    }
}

// Creamos unos Animales y los pasamos a un array.
let animales = [];

animales.push(new Perro("Ronda", 14.4, 13, "Perro de agua"));
animales.push(new Gato("Chiquitin", 10, 7, "Macho"));
animales.push(new Conejo("Rabito", 3, 2, "negro"));

// Creamos una funcion que cree a los conejos en nuestra vista de html en forma de una lista.
function cargaAnimales(){
    let ul = document.getElementById('lista');
    for(let animal in animales){
        let li = document.createElement('li');
        li.innerText = animales[animal].informacion();
        ul.appendChild(li);
    }
}