/*
//banco

let operacionesBancarias = [100, -50, 80, -10, 1000];

// callback

function calcularSaldos(array) {

    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;

    for(let contador = 0; contador < array.length; contador++) {
        const elementoActual = array[contador];

        saldoActual += elementoActual;

        if (elementoActual >= 0) {
        depositos += elementoActual;
        } else {
        retiros += elementoActual * (-1);
        }
    }

    return [depositos, retiros, saldoActual];
}

console.log(calcularSaldos(operacionesBancarias));

// mensaje

function informeDeSaldos (nombre, apellido, operaciones, cb) {
const saldos = cb(operaciones);


console.log('Estimada ' + nombre + ' ' + apellido + ': el monto total de los depósitos es de $' + saldos[0] + ', el monto total de los retiros es de $' + saldos [1] + '. Por lo tanto su saldo actual es de $' + saldos[2]);

}

console.log(informeDeSaldos('Jacinta', 'Mayol', operacionesBancarias, calcularSaldos));

*/

let numero = 5

console.log('Tabla del ' + numero); 

function tablaDeMultiplicar(numero) {
	let i = 1;
 	while (i <= 10) {
        const operacion = i * numero;
		tabla = console.log(numero + " * " + i + " = " + operacion);
		 i++ 
	 };
     return tabla;
}

console.log(tablaDeMultiplicar(numero));

 