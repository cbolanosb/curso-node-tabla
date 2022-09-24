const argv = require('yargs')
                .option( 'b', {
                    alias: 'base',
                    type: 'number',
                    description: 'La base de la tabla de multiplicar',
                    demandOption: true
                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: true,
                    description: 'Mostrar en consola la tabla impresa'
                })
                .option( 'h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    demandOption: true,
                    description: 'Hasta que número se hace la tabla'
                })
                .check( ( argv, option ) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;