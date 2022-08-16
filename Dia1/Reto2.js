// Reto 2 

'use strict';

const fs = require('fs');

let cliente = {
    name: "Teo",
    surname: "Quijano",
    age: 49
    };
    
    let ddbb = JSON.stringify(cliente, null, 2);

    fs.writeFile('./nuevoCliente.json', ddbb, err => {
        if (err) {
            console.log('Error al crear archivo', err)
        } else {
            console.log('Archivo creado correctamente')
        }
    })

    fs.readFile('nuevoCliente.json', (err, ddbb) => {

        if (err) throw err;
        let cliente = JSON.parse(ddbb);
        console.log(cliente);
    
    });