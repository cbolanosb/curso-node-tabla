
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log( argv.base );

// const [ , , arg3 = 'base=5' ] = process.argv
// const [ , base = 5 ] = arg3.split('=');

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;


crearArchivo( base, listar, hasta )
//     .then( nombreArchivo => console.log( nombreArchivo, 'creado') )
//     .catch( err => console.log( err ) );

