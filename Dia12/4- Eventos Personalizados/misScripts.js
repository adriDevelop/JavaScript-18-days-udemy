// Lo primero que hacemos el recoger los elementos de html que vamos a usar.
let audio = document.getElementById('audio');
let opciones = document.getElementById('listaCanciones');

opciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = opciones.value;
    audio.src = cancionElegida;
    audio.play();
    let customEvent = new CustomEvent('cambioCancion');
    audio.dispatchEvent(customEvent);
}   

audio.addEventListener('cambioCancion', mostrarCancion);

function mostrarCancion(){
    console.log("La cancion que se esta reproduciendo es " + opciones.value);
}