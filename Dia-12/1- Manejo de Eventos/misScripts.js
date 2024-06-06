let boton = document.getElementById('miBoton');

function mostrarMensaje(){
    alert("Botón pulsado");
}

boton.addEventListener('click', mostrarMensaje);