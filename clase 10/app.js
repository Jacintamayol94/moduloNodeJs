const productosImportados = require('./bicicletas');


let dhBici = {
    bicicletas : productosImportados,
    buscarBici : function(id){
        let bicicleta = this.bicicletas.filter((bici) => bici.id === id);
        return bicicleta.length > 0 ? bicicleta[0] : null;
    }
};

console.log(dhBici.buscarBici(1));






