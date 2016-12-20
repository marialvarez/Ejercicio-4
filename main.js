var tiempo, costoMinuto, costoLlamada;
 
tiempo = prompt("Por favor, ingresa el tiempo de tu llamada choche");
costoMinuto = prompt("Por favor, ingresa el costo por minuto de tu llamada");

costoLlamada = parseFloat(tiempo) * parseFloat(costoMinuto);

alert(costoLlamada);