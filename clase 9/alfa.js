// invertir texto

miCasa = 'la casa es grande';

/*
function invertirTexto (oracion) {
const largo = oracion.length;
let oracionInvertida = "";

for (i = oracion.length-1; i >= 0; i--) {
    oracionInvertida += oracion[i];
}
return oracionInvertida;
}

console.log (invertirTexto(miCasa)); */


// primera palabra

/*
function primeraPalabra (oracion) {
const largo = oracion.length;
let palabra = '';

for (i=0; i < largo; i++){
const caracter = oracion[i];
    if (caracter == ' '){
        return palabra;
    }else{
        palabra += caracter;
    }
}
return palabra;    
}

console.log (primeraPalabra('la casa es grande'));

*/
// ultima palabra
/*
function ultimaPalabra (oracion) {
    const largo = oracion.length;
    let palabraActual = '';
    
    for (i= 0; i < largo; i++){
    const caracter = oracion[i];
        if (caracter == ' '){
            palabraActual = '';
        }else{
            palabraActual += caracter;
        }
    }
    return palabraActual;    
    }
    
    console.log (ultimaPalabra('la casa es grande'));
*/

// string a array. Cantidad de palabras en la oracion.

/*

function listaDePalabras (oracion) {

    let lista = oracion.split(' ')

    let cantidad = 0;

    let largo = lista.length;

    for (i=0; i < largo; i++) {
        cantidad ++;
    }
    return cantidad;
}

console.log(listaDePalabras('la casa es grande'));

*/

// ultima palabra mas larga. primer palabra mas larga.

/*
function PalabraMasLarga (oracion) {
    const largo = oracion.length;
    let palabraMasLarga = '';
    let palabraActual = '';

    for (i=0, i < largo; i++;){
        const caracter = oracion[i];
        if (caracter == ' '){
            if (palabraActual.length >= palabraMasLarga.length) {
                palabraMasLarga = palabraActual;
            }
        palabraActual = '';
        } else {
            palabraActual += caracter;
        }    
    }
    return palabraMasLarga;
}

console.log (PalabraMasLarga('la casa es grande'));

*/



function PalabraMasLarga (oracion) {

let lista = oracion.split(' ');
const largo = lista.length;
let palabraMasLarga = '';
let palabraActual = '';

for (i=0, i < largo; i++;){
    const caracter = lista[i];
    if (caracter == ' '){
        if (palabraActual.length >= palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    palabraActual = '';
    } else {
        palabraActual += caracter;
    }    
}
return palabraMasLarga;
}

console.log (PalabraMasLarga('la casa es grande'));

