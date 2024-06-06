let notas = [5, 6, 5, 7, 4];

function mostrarLista(){
    let listaDocumento = document.getElementById("listaNotas");
    for (nota of notas){
        let elemento = document.createElement('li');
        elemento.innerText = nota;
        listaDocumento.appendChild(elemento);
    }
}

function calcularPromedio(){
    let promedio = 0;
    let listaDocumento = document.getElementById("listaNotas");
    for (nota of notas){
        promedio += nota;
    }
    promedio = promedio / notas.length;
    let elemento = document.createElement('li');
    elemento.innerText = "El promedio es: " + promedio;
    listaDocumento.appendChild(elemento);
}

function obtenerNotaAlta(){
    let mayor = 0;
    let listaDocumento = document.getElementById("listaNotas");
    for (nota of notas){
        if (nota > mayor){
            mayor = nota;
        };
    }
    let elemento = document.createElement('li');
    elemento.innerText = "La nota mas alta es: " + mayor;
    listaDocumento.appendChild(elemento);
}

function existeAplazo(){
    let suspenso = false;
    let listaDocumento = document.getElementById("listaNotas");
    for(nota of notas){
        if (nota <= 4){
            suspenso = true;
            break;
        }
    }
    let elemento = document.createElement('li');
    elemento.innerText = "¿Hay suspensos?: " + suspenso;
    listaDocumento.appendChild(elemento);
}