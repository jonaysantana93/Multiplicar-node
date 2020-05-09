const argv = require('./Config/yargs').argv;
const color = require('colors/safe');

const { crearArchivo, listarTabla } = require('./Operacion/multiplicar');

//console.log(`base: ${argv.base}`);
//console.log(`limite: ${argv.limit}`);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limit);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log(`Archivo creado: `, color.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`Comando no reconocido`);
}