async function obtenerDatos(){
     let respuesta = await fetch('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/')
    
    let datos = await respuesta.json();
    console.log(datos); 
    
}

obtenerDatos();