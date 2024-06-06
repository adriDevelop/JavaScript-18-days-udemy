function consultarPrecio(){
    let elementoRespuesta = document.getElementById("numeroFruta");
    let numeroFruta = elementoRespuesta.value;
    let textoPrecio = document.getElementById("textoPrecio");

    switch(numeroFruta)
    {
        case "1":
            textoPrecio.textContent = "2.51";
            break;
        case "2":
            textoPrecio.textContent = "1.85";
            break;
        case "3":
            textoPrecio.textContent = "2.10";
            break;
        case "4":
            textoPrecio.textContent = "1.95";
            break;
        case "5":
            textoPrecio.textContent = "2.00";
            break;
    }
}