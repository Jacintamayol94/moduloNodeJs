/* let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas"
];

let fraseNueva = arrayFrase.join();

console.log(fraseNueva); 

let frase = 'Breaking Bad rules!';

console.log(frase.slice (-10));

let cancion = 'And Bingo was his name, oh!';

console.log(cancion.split(' '));

console.log(cancion.split(', ')); 

let dominio = 'digitalhouse.com.ar';

let separar = dominio.split();

console.log(separar);

let unir = separar.unshift('http://www.',);

console.log(unir); 

let dominio = "http://www." + "digitalhouse.com.ar";
console.log(dominio); 

let parteA = "http://www.";
let parteB = "digitalhouse.com.ar";

function dominio (parteA, parteB) {
   return parteA + parteB;
}

console.log(dominio("http://www.", "digitalhouse.com.ar")); */

/* let parametro = "digitalhouse.com.ar"

function dominio (parametro) {
   let array = parametro.split();
   let total = array.unshift ("http://www.");
   let completo = total.join();
}

console.log(dominio("digitalhouse.com.ar")); */

function dominio (url) {
    let array = url.split()
    array.unshift("http://www.");
    let junto = array.join("")
    return junto;
}

console.log(dominio("9gag.com"));





