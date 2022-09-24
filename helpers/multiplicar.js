
const fs = require('fs');
const color = require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => {
    
    try{
        console.log('=========================================');
        console.log(`    Tabla del: ${ base }`);
        console.log('=========================================');
    
        let salida = '';
        let consola = '';
    
        for (let index = 0; index < hasta + 1; index++) {
            consola += `${ base.toString().red } x ${ index } = ${ base*index }\n`;
            salida += `${ base } x ${ index } = ${ base*index }\n`;  
        }
        if( listar ) {
            console.log( consola );
        }  
        
        fs.writeFileSync( `./salida/table-${ base }.txt`, salida );
        return `table-${ base }.txt`;
    } catch ( err ) {
        throw err;
    }


}


// Forma Promise
// const crearArchivo = ( base = 5 ) => {

//     return new Promise( ( resolve, reject ) => {
//         console.log('=========================================');
//         console.log(`    Tabla del: ${ base }`);
//         console.log('=========================================');
    
//         let salida = '';
    
//         for (let index = 0; index < 11; index++) {
//             salida += `${ base } x ${ index } = ${ base*index }\n`;  
//         }
//         console.log( salida );  
        
//         fs.writeFileSync( `table-${ base }.txt`, salida );
//         resolve (`table-${ base }.txt`);

//     })

        
// }

module.exports = {
    //funcion: crearArchivo
    //crearArchivo: crearArchivo
    crearArchivo
}