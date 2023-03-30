let catalogoCursos = [['html5', 400], ['css3', 500], ['javascript', 10000], ['react', 7000], ['nodejs', 15000]];

let cursosElegidos = ['HTML5', 'CSS3', 'JAVASCRIPT', 'NODEJS'];


// funcion callback



function calcularPrecio (catalogo, cursosAlumno) {
    
    let precio= 0;

    for (let i = 0; i < catalogo.length; i++) {
        const nombreCursoMayusc = catalogo [i][0].toUpperCase();

        if (cursosAlumno.includes(nombreCursoMayusc)) {
            precio += catalogo [i][1];
        }

    }

    return precio;

}


// segunda funcion

function facturar(nombre, apellido, cb) {

    const monto = cb (catalogoCursos, cursosElegidos);

    console.log ('Estimado: ' + nombre + ' ' + apellido +', en función de los cursos seleccionados:');

    for (let i = 0; i < cursosElegidos.length; i++) {
        console.log(i + 1 + '.-' + cursosElegidos[i])
    }


    console.log('El monto total a pagar es de: ' + monto + '.');
    'Bienvenido a la gran aventura Digital House.'

return [nombre + ' ' + apellido, monto];
}

console.log(facturar('Jacinta', 'Mayol', calcularPrecio));