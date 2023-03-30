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

console.log(primeraPalabra("La casa es grande"));


function ultimaPalabra (oracion){
    const largo = oracion.length
    let palabraActual = "";

    for (let i = largo - 1; i >=0 ; i--){
        const caracter = oracion [i];
        if (caracter == " ") {
        palabraActual = "";   
        }
        else {
            palabraActual += caracter;
        }
    }
    return palabra;
}

console.log(primeraPalabra("La casa es grande"));