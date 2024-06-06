// Declaramos los elementos de los que haremos uso en nuestra página.
let seleccionCategoria = document.getElementById('seleccionCategoria');

seleccionCategoria.addEventListener('change', seleccionarJson);
// Función que devuelve el json seleccionado según la selección del usuario.
function seleccionarJson(){
    let jsonSeleccionado = seleccionCategoria.value;
    let eventoPersonalizado = new CustomEvent('mostrarAlert');
    seleccionCategoria.dispatchEvent(eventoPersonalizado);
    return jsonSeleccionado;
}

// Creamos el eventListener que llamará a nuestro eventoPersonalizado.
seleccionCategoria.addEventListener('mostrarAlert', mostrarAlert);

function mostrarAlert(){
    alert(seleccionCategoria.value);
}

// El input solo admite letras, espacio y borrar.
let inputUsuario = document.getElementById('busquedaUsuario');
let datosEscritos;

inputUsuario.addEventListener('keypress', verificarTecla);
inputUsuario.addEventListener('keyup', recogeDatos);

function verificarTecla(event){
    if(event.keyCode != 127 &&  event.keyCode != 32 && event.keyCode < 97 || event.keyCode > 122){
        event.preventDefault();
    }
}

function recogeDatos(event){
    datosEscritos = event.target.value.toUpperCase();
    console.log(datosEscritos);
}

// El evento de búsqueda se lanza cuando se pulse el botón click.
let botonBuscar = document.getElementById('botonBusqueda');
let listaElementos = document.getElementById('elementosEncontrados');

botonBusqueda.addEventListener('click', buscarElemento);

function buscarElemento(){
    fetch(seleccionCategoria.value)
    .then(res => res.json())    
    .then((salida) => {
        for(let elem of salida.data){
            if (elem.nombre.startsWith(datosEscritos)){
                let p = document.createElement('p');
                let li = document.createElement('li');
                li.innerText = elem.nombre;
                listaElementos.appendChild(li);

                li.addEventListener('mouseover', function(event){
                    p.innerText = elem.sinopsis;
                    li.appendChild(p);
                    p.style.display ='block';
                })

                li.addEventListener('mouseout', function(event){
                    p.style.display ='none';
                })
                console.log(elem.nombre);
            }
        }
    });
}
