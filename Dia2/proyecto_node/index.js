const fs = require("fs/promises");


const readTheConsole = require("./readConsole");
const writeAndRead = require("./writeAndReadObject");

let fichero = './fichero1.json';

readTheConsole.readConsole ()
.then((cliente) => {
    return writeAndRead.writeAndReadObject(fichero, cliente);
})
.then((cliente) => {
    console.log("Name   :", cliente.name);
    console.log("Surname :", cliente.surname);
    console.log("Edad     :", cliente.age);
    return fs.unlink(fichero);
})
.catch((error) => {
    console.log(error);
})