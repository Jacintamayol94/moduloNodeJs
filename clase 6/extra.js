let peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

let mejorPeli = 'Thor: amor y trueno'.toUpperCase();

console.log(mejorPeli);

console.log(peliculas.pop());

peliculas.unshift(mejorPeli);

console.log(peliculas);


let estrenos = ['Counter Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];

console.log(estrenos.shift());

console.log(estrenos);

let todas = peliculas.concat(estrenos);

console.log(todas);



