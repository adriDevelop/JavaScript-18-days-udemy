// Creamos nuestra variable datosJson
let datosJson;

// Ahora, procedemos a hacer el fetch.
fetch('../1- Crear json/persona.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;
    let elementoParrafo = document.getElementById('nombre');
    elementoParrafo.innerText = datosJson.nombre;
})
.catch((error) => {
    alert(error);
})