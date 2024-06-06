function avanzaFila(callback){
    setTimeout(function(){
        console.log("Tu turno ha llegado");
        callback();
    }, 5000);
}

function mujerLlama(){
    console.log("Te presentas a tu turno");
}

console.log("Llegas a la fila");
avanzaFila(mujerLlama);