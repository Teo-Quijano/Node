
// let rlSync = require('readline-sync');


// let datoNombre = rlSync.question('Ingrese su Nombre\n');
// let datoApellido = rlSync.question('Ingrese su Apellido\n');
// let datoEdad = rlSync.question('Ingrese su Edad\n');

// console.log(Sus datos son ${datoNombre} ${datoApellido} y tiene ${datoEdad} años);


let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cliente = { name: "", surname: "", age: "" };

let fs = require("fs");

rl.question("Ingrese su nombre ", (name) => {
  console.log((cliente.name = name));
  rl.question("Ingrese su apellido ", (surname) => {
    console.log((cliente.surname = surname));
    rl.question("Ingrese su edad ", (age) => {
      console.log((cliente.age = age));

      let data = JSON.stringify(cliente);
      fs.writeFile("nuevoCliente.JSON", data, () => {
        fs.readFile("nuevoCliente.json", (err, ddbb) => {
          if (err) throw err;
          let cliente = JSON.parse(ddbb);
          console.log(cliente);
        });
      });
      console.log("Proceso Terminado");
      rl.close();
    });
  });
});
