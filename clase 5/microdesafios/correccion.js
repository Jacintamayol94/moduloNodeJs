// primera funcion callback

let totalAPagar  = (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) => {

    let precio;

    switch (tipoHamburguesa) {
        case "carne a la parrilla": 
        precio = 1800;
        break;
        case "pollo":
        precio = 1500;
        break;
        case "vegetariana":
        precio = 1200;
        break;
        default: 
        console.log("Elija un gusto existente");
        return;
    }

    if (jamon){
        return precio = precio + 30;
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
    if (lechuga) {
        precio = precio + 10;
    }
    if (cebolla) {
        precio = precio + 10;
    }

    return precio;

}

// console.log(totalAPagar("carne a la parrilla", true, true, true, true, true, true, true, true));


// segunda funcion mensaje

function mensaje (nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla, callback) {
    return "Estimado/a: " + nombre + " " + apellido + " el total a pagar es de $" + callback (tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla); 
}

console.log(mensaje("Jacinta", "Mayol", "carne a la parrilla", true, true, true, true, true, true, true, true, totalAPagar));