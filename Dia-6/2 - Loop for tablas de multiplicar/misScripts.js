function muestraTabla(){
    let elementoTabla = document.getElementById("listaTabla");
    let numero = document.getElementById("numero");
    for (x = 0; x <= 10; x++){
        let itemLista = document.createElement("li");
        itemLista.innerText = numero.value + " * " + x + "="+ numero.value * x;
        elementoTabla.appendChild(itemLista);
    }
}