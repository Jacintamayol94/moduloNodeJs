//callback


let totalAPagar = (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {

    let precio;

    switch (tipoHamburguesa) {

        case "Carne a la parrilla":
            precio = 1800;
            break;
        case "Pollo":
            precio = 1500;
            break;
        case "Vegetariana":
            precio = 1200;
            break;
        default:
            console.log("Disculpe, no disponemos de ese sabor.");
            return;
    }

    /* precio = jamon ? precio + 10 : precio;
    precio = queso ? precio + 25 : precio;
    precio = salsaTomate ? precio + 5 : precio;
    precio = mayonesa ? precio + 5 : precio; */

    if (jamon) {
        precio = precio + 30;
    }
    if (queso) {
        precio = precio + 25;
    }
    if (salsaTomate) {
        precio = precio + 5;
    }
    if (mayonesa) {
        precio = precio + 5;
    }
    if (mostaza) {
        precio = precio + 5;
    }
    if (tomate) {
        precio = precio + 15;
    }
    if (cebolla) {
        precio = precio + 10;
    }
    if (lechuga) {
        precio = precio + 10;
    }

    
    return precio;
}


// segunda función


function mensaje(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    return 'Estimado ' + nombre + ' ' + apellido + ' el total a pagar es de: ' +callback(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) ;
}

console.log(mensaje("Ignacio", "García","Carne a la parrilla", true, true, true, true, true, true, true, true, totalAPagar));







