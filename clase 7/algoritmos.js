// let oracion = ["La", " ", "casa", " ", "es", " ", "grande"];

/*

function invertirTexto (oracion){

const largo = oracion.length;

let oracionInvertida = "";

for (let i = largo -1; i >= 0; i--) {
    oracionInvertida += oracion [i];
}

return oracionInvertida;

}

console.log(invertirTexto(["La", " ", "casa", " ", "es", " ", "grande"]));

*/

/*
function primeraPalabra (oracion) {
    let primera = oracion[0];
    return primera;
}

console.log (primeraPalabra(["La", " ", "casa", " ", "es", " ", "grande"]));

function primeraPalabra (oracion) {
    let primera = oracion[0];
    return primera;
}

console.log (primeraPalabra(["La", " ", "casa", " ", "es", " ", "grande"]));

*/

/*

function primeraPalabra (oracion){
    const largo = oracion.length
    let palabra = "";

    for (let i = 0; i < largo; i++){
        const caracter = oracion [i];
        if (caracter == " ") {
        return palabra;   
        }
        else {
            palabra += caracter;
        }
    }
    return palabra;
}

console.log(primeraPalabra(["La"]));

*/

/*

function ultimaPalabra (oracion){
    const largo = oracion.length
    let palabra = "";

    for (let i = largo - 1; i >= 0; i--){
        const caracter = oracion [i];
        if (caracter == " ") {
        return palabra; ;   
        }
        else {
            palabra += caracter;
        }
    }
    return palabra;
}

console.log(ultimaPalabra(["La", " ", "casa", " ", "es", " ", "grande"]));

*/

/*
 
oracion = 'esta es una frase muy interesante';

function listaDePalabras2 () {

    let cantidad = 0;

    let frase = oracion.split(" ");

    for (let i = 0; i < frase.length; i++) {
        cantidad++
    }

    return cantidad;
}

console.log(listaDePalabras2 ('esta es una frase muy interesante'));

*/


function listaDePalabras (oracion) {

    const largo = oracion.length;

    let palabras = [];

    let palabraActual = "";

    for (let i = 0; i < largo; i++) {
        
        const caracter = oracion [i];

        if (caracter == " ") {
        palabras.push(palabraActual);
        palabraActual = "";   
        } else {
          palabraActual += caracter;  
        }
    }

    return palabras;
}

console.log(listaDePalabras("esta es una frase muy interesante"));


