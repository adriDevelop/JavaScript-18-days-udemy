// Creamos el metodo que devolvera todos los precios de forma periodica a cada sitio o cada lugar.
async function mostrarValores(){
  let promesa1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  await promesa1.json().then((datos) => {
    document.getElementById('valorBitcoin').append(datos.bpi.USD.rate);
  });

  let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
  await promesa2.json().then((datos2) => {
    document.getElementById('valorDolar').append(datos2.rates.USD);
  });

  let promesa3 = await fetch('https://open.er-api.com/v6/latest/ARS');
  await promesa3.json().then((datos3) => {
    document.getElementById('valorPesoArgentino').append(datos3.rates.ARS);
  });
  
}