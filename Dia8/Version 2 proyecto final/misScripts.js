// Creamos el array donde almacenaremos todos los empleados.
let empleadosArray = [];

// Creamos el constructor de nuestro objeto Empleado.
function Empelado(nombre, apellidos, edad, direccion) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.direccion = direccion;
}

// Creamos el boton que nos añadira los empleados a nuestro array.
function enviarDatos(){
    let nomInp = document.getElementById('nombreInput');
    let apeInp = document.getElementById('apellidosInput');
    let edaInp = document.getElementById('edadInput');
    let dirInp = document.getElementById('direccionInput');

    let nuevoEmpleado = new Empelado(nomInp.value, apeInp.value, edaInp.value, dirInp.value);
    empleadosArray.push(nuevoEmpleado);

    alert("Empleado creado correctamente.");
}

// Creamos el boton que nos mostrara por pantalla a los empleados añadidos anteriormente.
function mostrarDatos(){
    let div = document.getElementById('empleadosMostrados');
    let parrafo = document.createElement('p');
    let br = document.createElement('br');

    for (empleado in empleadosArray){
        parrafo = "Nombre: " + empleadosArray[empleado].nombre;
        parrafo += ", " + empleadosArray[empleado].apellidos;
        parrafo += ", Edad: " + empleadosArray[empleado].edad;
        parrafo += ", Direccion: " + empleadosArray[empleado].direccion;
        div.append(parrafo);
        div.append(br);
    }
}
    
    

