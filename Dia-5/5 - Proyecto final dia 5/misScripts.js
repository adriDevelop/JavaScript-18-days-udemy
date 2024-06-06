function buscar(categoria){
    let mostrarMensaje = document.getElementById('categoriaPorEdad');
    let edad = document.getElementById("edad");
    let catEdad;
    let cat;
    if (edad.value < 13){
        catEdad = "menores de 13 ";
    } else if (edad.value < 16 && edad.value >= 13) {
        catEdad = "menores de 16";
    } else if(edad.value >=16){
        catEdad = "16 o mayores";
    }
    let recomendacion;
    switch (categoria){
        case 'comedia':
            cat = "comedia";
            recomendacion = cat + " " + catEdad;
            break;
        case 'drama':
            cat = "drama";
            recomendacion = cat + " " + catEdad;
            break;
        case 'musical':
            cat = "musical";
            recomendacion = cat + " " + catEdad;
            break;
        case 'crimen':
            cat = "crimen";
            recomendacion = cat + " " + catEdad;
            break;
    }
    mostrarMensaje.textContent = recomendacion;
}
