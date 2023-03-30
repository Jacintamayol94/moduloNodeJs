/*
// impares

function noParesDeContarImparesHasta(numero) {
    let cantidad = 0;
    for (let i = 0; i <= numero; i++) {
        if (i%2!=0) {
        cantidad += 1;
    }
    }
    return cantidad;
}

    console.log(noParesDeContarImparesHasta(7));

//sumatorias


let gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre [1] + unSemestre[3] + unSemestre [4] + unSemestre [5];
}

console.log(sumatoriaGananciasSemestre([50, -12, 1000, 300, 200, 0]));


function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]));
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));

// conteos

function cantidadDeMesesConGanancia(unPeriodo) {

    let cantidad = 0;
    
    for (let i = 0; i < unPeriodo.length;i++) {
        if (unPeriodo [i] > 0) {
            cantidad++
        }
      }
    
    return cantidad;

    }

console.log(cantidadDeMesesConGanancia([2,3,-1]));



// filtrados


function saldosDeMesesConGanancia(array) {

let ganancias = [];

for (let i = 0; i < array.length;i++) {
    let meses = array[i];
    if (meses > 0) {
        ganancias.push(meses);
    }
}

return ganancias;

}

console.log(saldosDeMesesConGanancia([100, 20, -50, 10]));

*/
