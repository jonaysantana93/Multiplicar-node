//requireds
const fs = require('fs'); // require existente en node
const color = require('colors');

let listarTabla = (base, limit) => {

    if (!Number(base)) {
        console.log(`El valor introducido como base '${base}' no es un numero`);
        return;
    }
    if (!Number(limit)) {
        console.log(`El valor introducido como limite '${limit}' no es un numero`);
        return;
    }

    console.log('***************************'.green);
    console.log(` Tabla del ${base} `.green)
    console.log('***************************'.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }
};


let crearArchivo = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {

                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};