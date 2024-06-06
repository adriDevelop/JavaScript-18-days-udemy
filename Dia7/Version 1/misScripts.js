function dibujarVentas(id, min, numTiendas){
    let elementDiv = document.getElementById(id);

    for(let x = 0; x <= numTiendas; x++){

        let parrafo = document.createElement('p');

        let nuevoLabel = document.createElement('label');
        nuevoLabel.textContent = 'Tienda ' + x + ": ";
        nuevoLabel.setAttribute('for', 'input'+x);

        let nuevoInput = document.createElement('input');
        nuevoInput.setAttribute('type', 'number');
        nuevoInput.setAttribute('id', 'input'+x);
        nuevoInput.setAttribute('min', min);
        parrafo.appendChild(nuevoLabel);
        parrafo.appendChild(nuevoInput);

        elementDiv.appendChild(parrafo);
    }
}

function extraerNumeroDesdeElemento(elemento){
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function calcular(){
    let suma = 0;
    let elementDiv = document.getElementById('itemsVenta');

    for (numeroArray of elementDiv.children){
        suma += extraerNumeroDesdeElemento(numeroArray.children[1]);
        console.log(numeroArray.children[1].id)
    }

    let mensajeSalida = "Total ventas " + suma;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
    detectaMenorYMayor();
    
}

function detectaMenorYMayor(){
    let numeroMenor = 0;
    let numeroMayor = 0;
    let elementoMenor = '';
    let elementoMayor = '';
    let elementoDiv = document.getElementById('itemsVenta');

    for (elemento of elementoDiv.children){
        if (numeroMenor == 0) {
            numeroMenor = elemento.children[1].value;
            elementoMenor = document.getElementById(elemento.children[1].id);
        } else {
            if (elemento.children[1].value < numeroMenor){
                numeroMenor = elemento.children[contador].value;
                elementoMenor = document.getElementById(elemento.children[1].id);
            }
        }
        
        if (numeroMayor == 0){
            numeroMayor = elemento.children[1].value;
            elementoMayor = document.getElementById(elemento.children[1].id);
        } else {
            if (elemento.children[1].value > numeroMayor){
                numeroMayor = elemento.children[1].value;
                elementoMayor = document.getElementById(elemento.children[1].id);
            }
        }
    }

    elementoMenor.setAttribute('style', 'background-color: red');
    elementoMayor.setAttribute('style', 'background-color: green');
}