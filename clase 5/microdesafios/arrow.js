/* function sumar (a,b){
    return a+b;
}

console.log (sumar(2,4));


function sumar (numero1,numero2){
    console.log(numero1+numero2);
}

sumar(1,2);

let resultadoDeLaSuma = sumar(5,6); */

let sumar = (a,b) => a+b;

console.log(sumar(2,4));

let esMultiplo = (a,b) => {
    let resto = a%b
    return resto = 0;
}

console.log(esMultiplo(4,2));

let saludo = () => {return "Hola!"};

console.log(saludo ());


let horaActual = () => {
    let fecha = newDate ();
    return fecha.getHours () + ":" + fecha.getMinutes ();
}