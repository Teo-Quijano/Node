const fs = require("fs/promises")

function writeAndReadObject(fichero, objeto) {
    const promesa = new Promise((resolve, reject) => {
        fs.writeFile(fichero, JSON.stringify(objeto))
        .then(() => {
            return fs.readFile(fichero);
        })
        .then((datos) => {
            resolve(JSON.parse(datos));
        })
        .catch((error) => {
            reject(error);
        })
    });
    return promesa;
}

module.exports.writeAndReadObject = writeAndReadObject;