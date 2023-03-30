let fs = require('fs');

let rutaArchivo = "./bicicletas.json";
let bicicletasJSON = fs.readFileSync(rutaArchivo, "utf8");
let bicicletasArray = JSON.parse(bicicletasJSON)

module.exports = bicicletasArray;