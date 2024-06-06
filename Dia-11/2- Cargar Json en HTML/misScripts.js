// Creamos nuestra variable que almacenara la respuesta del JSON.
let datosJSON;

// Ahora, continuamos haciendo la peticion de datos de nuestro JSON.
let xhr = new XMLHttpRequest();
xhr.open('GET', '../1- Crear json/persona.json', true);             // Ponemos el json que queremos obtener con el metodo GET, 
xhr.responseType = 'json';                                          // enlace del JSON, y si es de forma asincrona o no.

xhr.onload = function(){                                            // Ahora, llamamos a la funcion onload() que lo que hara será comprobar
    if(xhr.status === 200){                                         // si nuestro status retorna un valor correcto, como es el 200 y almacenará
        datosJSON = xhr.response;                                   // en la variable datosJSON el varos de la respuesta y posteriormente 
        let elementoTexto = document.getElementById("nombre");      // la cargamos en el document.
        elementoTexto.innerText = datosJSON.nombre;
    }
}

xhr.send();                                                         // Usamos el metodo send() para enviar todos los datos.