// Creamos la función que nos permitirá cargar a los clientes.
function cargaClientes(){
    let ul = document.getElementById('datosCliente');
    fetch("resumen.json")
        .then(res => res.json())
        .then((salida) => {
            let nomElemento = document.createElement('li');
            let cueElemento = document.createElement('li');
            let salElemento = document.createElement('ul');
            let cbuElemento = document.createElement('li');

                nomElemento.innerText = "Nombre: " + salida.titular;
                cueElemento.innerText = "Nro cuenta: "+ salida.nro_cuenta;
                salElemento.innerText = "Saldo: "

                for(let monto in salida.saldo){
                    let li = document.createElement('li');
                    li.innerText = salida.saldo[monto].monto + ", " + salida.saldo[monto].moneda;
                    salElemento.appendChild(li);
                }
                
                cbuElemento.innerText = "CBU: " + salida.cbu;

                ul.appendChild(nomElemento);
                ul.appendChild(cueElemento);
                ul.appendChild(salElemento);
                ul.appendChild(cbuElemento);
            
        })
        .catch((error) =>{
            console.log(error)
        })
}