// callback

operacionesBancarias = [100, -60, 2000, -10000, 50000];

function saldosTotales (array) {

let depositos = 0;
let retiros = 0;
let saldoActual = 0;

    for(let contador = 0; contador < array.length; contador++){

    const elementoActual = array[contador];

    saldoActual += elementoActual;

        if(elementoActual >= 0){
        depositos += elementoActual;
        }else if(elementoActual < 0){
        retiros += elementoActual * (-1);
        }
    
    }

return [depositos, retiros, saldoActual];

}

console.log(saldosTotales([100, -60, 2000, -10000, 50000]));

// mensaje


function mensaje (nombre, apellido, operaciones, callback) {

const saldos = callback(operaciones);

console.log('Estimada ' + nombre + ' ' + apellido + ':');
console.log('El monto total de los depósitos es de: $' + saldos[0]);
console.log('El monto total de los retiros es de: $' + saldos[1]);
console.log('Por lo tanto su saldo actual en la cuenta es de: $' + saldos[2]);

}

console.log(mensaje('Jacinta', 'Mayol', operacionesBancarias, saldosTotales));


