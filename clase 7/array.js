
/*

let clave = [ "s", "", "e", "n", "u", "l", " ", "s", "", "e", " ", "a", "í", "", "d", " ", "l", "", "E", ""];

function descifrarClave(array) {
    let clave= [];
    for (let i = array.length -1; i >= 0; i--) {
        const element = array[i];
        if (element != '') {
            clave.push(element)
        }
    } return clave.join('');
}

console.log (descifrarClave(clave));

*/

let clave = [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];

function descifrarClave(array) {
    let clave= [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element != '*') {
            clave.unshift(element)
        }
    } return clave.join('');
}

console.log (descifrarClave(clave));
