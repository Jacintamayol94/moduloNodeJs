/*

function sumatoriaBajoImporte (array) {
    let sumatoria = 0;
        for (let i = 0; i < array.length; i++) {
        let mes = array [i] ;
        if ((mes > 0) && (mes <= 1000)) {
            sumatoria+=mes;
        }
        } 
        return sumatoria;
    
    }

console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));

*/

/*

let asientoElegido = 50;


function asientosDisponibles (array, asientoElegido) {

    let cantidadAsientos = 0;
    
    for (let i = 0; i < array.length;i++) {
        cantidadAsientos++;
      }

    if (array.indexOf(asientoElegido) != -1) {
        return 'Felicitaciones, el asiento número '+ asientoElegido + ' está disponible.';
    } else {
        return 'Lo sentimos, el asiento número ' + asientoElegido + ' está ocupado, pero aún quedan ' + cantidadAsientos + ' asientos disponibles.';
    }

}

console.log(asientosDisponibles([15, 28, 44, 45, 70, 80], asientoElegido));

*/


/*

let cantidadEstaciones = 0;
array = [200, 20, 20, 20, 20, 40]

function conteoPasajeros (array) {

    let sumatoriaPasajeros = 0;

    for (let i = 0; i < array.length; i++) {
        const pasajerosTren = array [i];
        sumatoriaPasajeros += pasajerosTren;
    }

    return sumatoriaPasajeros;

}

console.log(conteoPasajeros([200, 20, 20, 20, 20, 40]));
   
 
 
 function reporteDePasajeros (cantidadEstaciones, array, cb) {

    const cantidadPasajerosTren = cb (pasajerosPorEstacion);

    switch (array) {
        case  pasajerosTren [0]:
            ['En la estación 0 hay ' + cantidadPasajerosTren + ' pasajeros arriba del tren'];
            break;
        case pasajerosTren [1]:
            ['En la estación 1 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren'];
            break;
        case pasajerosTren [2]:
            ['En la estación 2 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren'];
            break;
        case pasajerosTren [3]: 
            ['En la estación 3 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren'];
            break;
        case pasajerosTren [4]:
            ['En la estación 4 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren'];
            break;
        case pasajerosTren [5]:
            ['En la estación 5 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren'];
            break;
    }

    return cantidadEstaciones.join();

}

console.log (reporteDePasajeros(cantidadEstaciones, conteoPasajeros));





array = [200, 20, 20, 20, 20, 40];

function reporteDePasajeros (cantidadEstaciones) {

    let sumatoriaPasajeros = 0;

    for (let i = 0; i <= cantidadEstaciones; i++) {
        const pasajerosTren = array [i];
        sumatoriaPasajeros += pasajerosTren;
    }


    switch (estaciones){

    case 0: 
        console.log (['En la estación 0 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;
    
    case 1:     
        console.log (['En la estación 1 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;
    
    case 2:
        console.log (['En la estación 2 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;
   
    case 3:
        console.log (['En la estación 3 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;

   case 4:
        console.log (['En la estación 4 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;

    case 5: 
        console.log (['En la estación 5 hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren']);
        break;
    }

 return estaciones.join();   

}

console.log (reporteDePasajeros(5));




array = [0, 1, 2, 3, 4, 5];


function reporteDePasajeros (cantidadEstaciones) {

    let estaciones = array [i];
    cantidadEstaciones = array.indexOf();

        switch (estaciones){

        case 0: 
            console.log (['En la estación 0 hay 200 pasajeros arriba del tren']);
            break;
        
        case 1:     
            console.log (['En la estación 1 hay 220 pasajeros arriba del tren']);
            break;
        
        case 2:
            console.log (['En la estación 2 hay 240 pasajeros arriba del tren']);
            break;
       
        case 3:
            console.log (['En la estación 3 hay 260 pasajeros arriba del tren']);
            break;
    
        case 4:
            console.log (['En la estación 4 hay 280 pasajeros arriba del tren']);
            break;
    
        case 5: 
            console.log (['En la estación 5 hay 320 pasajeros arriba del tren']);
            break;
        }
    
     return estaciones.concat();

}

console.log(reporteDePasajeros(3));

*/
// arrayPasajeros = [200, 20, 20, 20, 20, 40]
// arrayEstaciones = [0, 1, 2, 3, 4, 5];

let suben = 50;
let bajan = 30;
let suben5 = 120;
let bajan5 = 80;

function reporteDePasajeros (cantidadEstaciones) {
let array = [];
let sumatoriaPasajeros = 200;

for (let i = 0; i <= cantidadEstaciones; i++) {

if (i == 0){
    array.push('En la estación ' + i + ' hay ' + sumatoriaPasajeros + ' arriba del tren');
} else if (i == 5) {
    array.push('En la estación ' + i + ' hay ' + (sumatoriaPasajeros += 40) + ' arriba del tren');
} else {
    array.push('En la estación ' + i + ' hay ' + (sumatoriaPasajeros += 20) + ' arriba del tren');
}

}

return array;

}

console.log(reporteDePasajeros(5));




/*

let suben= 50;
let bajan= 30;
let suben5= 120;
let bajan5= 80;

function reporteDePasajeros(cantidadEstaciones) {

    let sumatoriaPasajeros = 200;
    let array = [];
    for (let i = 0; i <= cantidadEstaciones; i++) {

        if (i == 0) {
            array.push('En la estación número ' + i + ' hay ' + sumatoriaPasajeros + ' pasajeros arriba del tren');
        } else if (i == 5) {
            array.push('En la estación número ' + i + ' hay ' + (sumatoriaPasajeros += (suben5 - bajan5)) + ' pasajeros arriba del tren');
        } else {
            (array.push('En la estación número ' + i + ' hay ' + (sumatoriaPasajeros += (suben - bajan)) + ' pasajeros arriba del tren'));
        }
    } return array;
}

console.log(reporteDePasajeros(5));

*/
