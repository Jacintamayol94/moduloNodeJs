let fs = require('fs');
let dato = fs.readFileSync('./bicicletas.json', 'utf8');
let objJson = JSON.parse(dato)

console.log(objJson);

module.exports = objJson;