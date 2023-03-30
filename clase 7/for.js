/* for (let i = 0; i < 4; i++) {
    console.log("Hola!");
}


for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número' + vuelta);
}

for (let i = 0; i <= 4; i++) {
    console.log('acá i tiene el valor de ' + i);
}
*/
/*
let vuelta = 1;
while (vuelta <= 5) {
    console.log ('dando la vuelta número ' + vuelta);
    vuelta++
}

let circulo = 1
do {
    console.log ('dando el circulo número ' + circulo);
    circulo++
} while(circulo <= 5);

*/

// ejersicio While

/*

function tablaDeMultiplicar(numero) {
	let i = 1;
 	while (i <= 10) {
        let operacion = numero * i;
		 console.log(numero + "*" + i + "=" + operacion);
		 i++ 
	 }
}

console.log(tablaDeMultiplicar(2));

*/

// integración

/*

function cantidadDeMesesConGanancia(unPeriodo) {

    let cantidad = 0;
    
    for (let i = 0; i < unPeriodo.length;i++) {
        if (unPeriodo [i] > 0) {
            cantidad++
        }
      }
    
    return cantidad;

    }

    console.log(cantidadDeMesesConGanancia([10, -10, 2, 100]));

    */

    // let saldosMeses = [100, 20, 0, - 10, 10];

    /*

    function saldosDeMesesConGanancia () {

        let mesesGanancia = 0;

        for (let i = 0; i < unPeriodo.length; i++) {

            if (unPeriodo [i] > 0) {
                mesesGanancia;
            }
          }
        
    return mesesGanancia;
    
    }

    console.log(saldosDeMesesConGanancia([100, 20, 0, - 10, 10]));


*/
/*


let num = 1
for (let i = 0; i < 20;) {
    if (num%2!=0) {
        console.log(num);
    i++;
    }
    num++
}

*/

// numeros primos

function esNumeroPrimo (n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++){
        if (n % i == 0) return false;
    }
return true;
}

console.log (esNumeroPrimo(4));






