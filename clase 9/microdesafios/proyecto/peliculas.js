const uuid = require('uuid');

let peliculasFavoritas = [

rapidoYFurioso = {
    id: uuid.v4(),
    rating: 5,
    awards: 'oscar',
    length: '2hs',
    price: 2000000,
    genre: 'accion',

    },

elViajeDeChijiro = {
    id:uuid.v4(),
    rating: 7,
    awards: 'martin fierro',
    length: '3hs',
    price: 30000000,
    genre: 'animacion',

    },

Friends = {
    id:uuid.v4(),
    rating: 10,
    awards: 'oscar',
    length: '2,5 hs',
    price: 1000000,
    genre: 'comedia',

    },

elAngel = {
    id:uuid.v4(),
    rating: 6,
    awards: 'martin fierro',
    length: '1,5 hs',
    price: 10000000,
    genre: 'suspenso',

    }

]

module.exports = peliculasFavoritas;
