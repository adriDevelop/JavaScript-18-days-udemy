function comprobacionEdad(){
    let edad = document.getElementById("edad").value;
    let puedeBeber = edad >= 18;
    let puedeFiesta = edad >= 18 && edad <= 30;
    let entradaGratis = edad == 25 || edad == 30;
    beberAlcohol(puedeBeber);
    entrarAFiesta(puedeFiesta);
    entraGratis(entradaGratis);
}

function beberAlcohol(puedeBeber){
    document.getElementById("puedeBeber").textContent = puedeBeber;
}

function entrarAFiesta(entrarAFiesta){
    document.getElementById("puedeIngresar").textContent = entrarAFiesta;
}

function entraGratis(entradaGratis){
    document.getElementById("entraGratis").textContent = entradaGratis;
}