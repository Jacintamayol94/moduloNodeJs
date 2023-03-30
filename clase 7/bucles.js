

// While primero chequea y despues ejecuta

// inicializacion 

let contador1 = 0

// condición

while(contador1 < 5) {
    console.log(contador1)
    console.log('Bienvenida')
    contador1++ // incremento/ decremento
}

// deja de ejecutarse cuando sea falsa la condición

// do primero ejecuta y despues chequea la condicion



let contador2 = 7

do{
    console.log('Bienvenida el valor del contador es ' + contador2);
} while ( contador2 < 5)


const numeros = [17, 22, 37, 48];

// for

for(let contador = 0; contador < numeros.length; contador++){
    console.log(numeros[contador]);
}

// variable acumuladora

let sumaTotal = 0

for(let contador = 0; contador < numeros.length; contador++){
    sumaTotal += numeros[contador];
}

console.log(sumaTotal);