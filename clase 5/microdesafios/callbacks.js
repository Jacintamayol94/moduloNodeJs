// callback anonimo

setTimeout (function(){
    console.log("Hola!")
}, 1000)

// callback definido

let miCallback = () => console.log("Hola!");

setTimeout (miCallback, 1000);

