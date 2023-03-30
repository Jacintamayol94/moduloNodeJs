// micro desafio 1

let electrodomesticos = ["lavarropas", "pava", "cafetera", "heladera", "secarropas", "nespresso"];

//console.log(electrodomesticos[1], electrodomesticos[0]);

electrodomesticos.shift();

electrodomesticos.push("lavarropas");

electrodomesticos.push("minipimer", "licuadora");

//console.log(electrodomesticos.includes("pava"));

let buscar = electrodomesticos.includes ("plancha") === true ? "El producto fue encontrado" : "El producto no fue encontrado";


let cadenaTexto = electrodomesticos.join(" , ");

console.log(cadenaTexto);

console.log(cadenaTexto.length);

console.log(cadenaTexto.replace('nespresso', 'oster'));

console.log(cadenaTexto.split(','));





















