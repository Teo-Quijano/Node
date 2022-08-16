let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readConsole(callback) {
  let fs = require("fs");
  let cliente = { name: "", surname: "", age: "" };

  rl.question("Ingrese su nombre ", (name) => {
    console.log((cliente.name = name));
    rl.question("Ingrese su apellido ", (surname) => {
      console.log((cliente.surname = surname));
      rl.question("Ingrese su edad ", (age) => {
        console.log((cliente.age = age));
        callback(cliente);

        rl.close();
      });
    });
  });
}

module.exports.readConsole = readConsole;