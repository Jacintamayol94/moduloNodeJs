function convertir(palabra){
    return palabra.toUpperCase();
} 

console.log(convertir("jacinta"));





function tipoDeDato(dato) {
    return typeof(dato);
}

console.log(typeof("Jacinta"));


function edadPerro (años){
    return 7 * años;
}

console.log(edadPerro(5));


function pagoHoraDeTrabajo(salariomensual, diastrabajados, horaspordia) {
    return (salariomensual/diastrabajados)/horaspordia;
}

console.log(pagoHoraDeTrabajo(1500,30,8));