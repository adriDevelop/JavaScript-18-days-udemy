function seCompra(resultado){
    document.getElementById("seCompra").textContent = resultado;
}

function comprobarPrecio(){
    let precio = document.getElementById("precioLeche").value;
    if(precio <=5){
        seCompra("Compra dos Cartones de leche.");
    } else {
        seCompra("Compra un carton de leche.");
    }
}