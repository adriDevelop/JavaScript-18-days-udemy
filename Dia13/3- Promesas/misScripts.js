/* let miPromesa = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (error){
            reject('La promesa ha fallado');
        } else {
            resolve('La promesa se ha cumplido');
        }
    })
});


miPromesa.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
}) */

/* let promise1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 2000, 'Hola');
});

let promise2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 4000, 'Mundo');
});

let valorPromesas = Promise.all([promise1, promise2]).then(function(valores){
    console.log(valores);
});
console.log("El codigo sigue su camino"); */

// LLAmada a API.

function obtenerUsuarios(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.statusText);
            }
        }
        xhr.send();
    })
}

obtenerUsuarios().then(function(usuarios){
    console.log(usuarios);
})
.catch(function(error){
    console.log(error);
});