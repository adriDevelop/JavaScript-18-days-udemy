function seCompra(resultado){
    document.getElementById("seCompra").textContent = resultado;
}

function comprobarPrecio(){
    let precio = document.getElementById("precioLeche").value;
    if(precio <=5){
        seCompra("Si");
    } else {
        seCompra("No");
    }
}