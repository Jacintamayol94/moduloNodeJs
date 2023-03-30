let bicicletasImportadas = require('./datosBici.js');

let dhBici = {
    bicicletas: bicicletasImportadas,
    buscarBici: function (idBuscar) {
        const cleta = this.bicicletas.filter((bici) => bici.id === idBuscar);
        return cleta.length > 0 ? cleta[0] : null;
    }
    /*
    venderBici: function (idBuscar) {
        const nave = this.bicicletas.filter((bici) => bici.id === idBuscar);
        if (nave.length > 0) {
           nave[0].vendida === 'si';
           return nave[0];
        
        } else {
            return console.log("bicicleta no encontrada");
        }
    },
    biciParaLaVenta: function (){
        const shimano = this.bicicletas.filter((noVendida) => noVendida.vendida === false);
        return shimano;
    },
    totalVentas: function (){
        const biciPrecio = this.bicicletas.precio;
        this.bicicletas.reduce(function(acumulador, biciPrecio){
            acumulador + biciPrecio;
        });
        return biciPrecio;
    },
    aumentoBici: function(){
        this.bicicletas.map();
    },
    biciPorRodado
    */
}


console.log(dhBici.buscarBici(3));
//console.log(dhBici.venderBici(9));
//console.log(dhBici.biciParaLaVenta());
//console.log(dhBici.totalVentas());
