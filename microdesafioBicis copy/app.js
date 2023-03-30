let bicicletasImportadas = require('./datosBici.js');


let dhBici = {
    bicicletas: bicicletasImportadas,

    buscarBici: function (idBuscar) {
        let bicicletaADevolver = this.bicicletas.filter(bicicleta => {
            return bicicleta.id == idBuscar
        })
        if(bicicletaADevolver.length > 0) {
            return bicicletaADevolver[0]
        }
        else {
            return null
        }
    },
    venderBici: function (idBuscar) {
        let biciBuscada = this.buscarBici(idBuscar);
        if (biciBuscada != null) {
           biciBuscada.vendida = true;
           return biciBuscada;
        } else {
            return("Bicicleta no encontrada");
        }
    },
    biciParaLaVenta: function (){
        let bicicletasSinVender = this.bicicletas.filter(bicicleta => {
            return bicicleta.vendida === false});
        return bicicletasSinVender;
    },
    totalVentas: function (){
        let bicicletasVendidas = this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida == true;
        })
        let ventaTotal = bicicletasVendidas.reduce(function(total, actual){
            return total + actual.precio
        }, 0);
        return ventaTotal;
    },
    aumentoBici: function (porcentajeAumento) {
        let precioBicicletas = this.bicicletas.filter(bicicleta =>{
            return bicicleta.precio;
        });
        let aumento = precioBicicletas.map(function(bicicleta){
            return bicicleta.precio * (porcentajeAumento/100) + bicicleta.precio;
        })
        return aumento;
    },
    biciPorRodado: function (rodadoBuscado){
        let biciRodado = this.bicicletas.filter(bicicleta => {
            return bicicleta.rodado == rodadoBuscado;
        })
        return biciRodado;
    },
    /*
    listarTodasLasBicis: function (){
        let listado = this.bicicletas.forEach(bicicleta => {
            console.log("----------");
            console.log(bicicleta);
        });
        return listado;
    }
    */
    listarTodasLasBicis: function (){
        console.log("El listado de todas las bicicletas del negocio:")
        for(let valor of dhBici.bicicletas){
            console.log(valor);
        }
    }
    
}


//console.log(dhBici.buscarBici(3));
//console.log(dhBici.venderBici(4));
//console.log(dhBici.biciParaLaVenta());
//console.log(dhBici.totalVentas());
//console.log(dhBici.aumentoBici(50));
//console.log(dhBici.biciPorRodado(26));
console.log(dhBici.listarTodasLasBicis());

