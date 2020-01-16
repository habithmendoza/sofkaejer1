let distanciaVuelo = prompt('Ingrese la distancia del vuelo');
let dias = prompt('Ingrese los días de estancia');
let valorKm = 3500;
let precioFinal = 0;

if (distanciaVuelo > 1000 && dias > 7) {
    precioFinal = ((valorKm * dias) * 30) / 100;
    alert('El precio de su tiquete es de $' + precioFinal + ' dolares, el precio incluye el descuento del 30%');

} else {
    precioFinal = valorKm * dias;
    alert('El precio de su tiquete es de $' + precioFinal + ' dolares');
}
