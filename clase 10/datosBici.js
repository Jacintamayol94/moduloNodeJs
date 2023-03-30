const fs = require('fs');

function importar (bicicletas) {

const jsonProducts = fs.readFileSync('./bicis.json', 'utf-8');

const productosImportados = JSON.parse(jsonProducts);

return productosImportados;

}

module.exports = importar;



