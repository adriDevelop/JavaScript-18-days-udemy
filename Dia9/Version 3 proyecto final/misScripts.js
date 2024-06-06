// Creamos el constructor de nuestro automovil.
function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

// Creamos un array donde almacenar los automoviles.
let automoviles = [];

// Creamos automoviles usando el constructor y los agregamos al array.
automoviles.push(automovil1 = new Automovil("nissan", "pulsar", "rojo", 2018, "Maria José"));
automoviles.push(automovil2 = new Automovil("nissan", "juke", "rojo", 2018, "Yolanda"));
automoviles.push(automovil3 = new Automovil("kia", "carens", "gris", 2004, "Elena"));

// Creamos tres metodos mediante los parametros del objeto.
Automovil.prototype.venderAuto = function(titular){
    console.log(this.modelo + " " + this.anio + " " + titular);
}

Automovil.prototype.encenderAuto = function(){
    alert(this.modelo + " coche arrancado.");
}

Automovil.prototype.verAuto = function(){
    let texto = this.marca + ", " + this.modelo + ", " + 
    this.color + ", " + this.anio + ", " + this.titular;

    return texto;
}

function muestraCoches(){
    let lista = document.getElementById('lista');

    for(let automovil in automoviles){
        let li = document.createElement('li');
        li.innerText = automoviles[automovil].verAuto();
        lista.appendChild(li);
    }
}