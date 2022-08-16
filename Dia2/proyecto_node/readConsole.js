const readline = require("readline");

function readConsole() {
  const promesa = new Promise((resolve, reject) => {
    let cliente = { name: null, surname: null, age: null };
    pedirDatos("Escriba su Nombre:  ")
      .then((respuesta) => {
        cliente.name = respuesta;
        return pedirDatos("Escriba su Apellido:  ");
      })
      .then((respuesta) => {
        cliente.surname = respuesta;
        return pedirDatos("Escriba su Edad:  ");
      })
      .then((respuesta) => {
        cliente.age = respuesta;
        resolve(cliente);
      });
  });
  return promesa;
}

function pedirDatos(preguntas) {
  const dato = new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(preguntas, (respuestas) => {
      resolve(respuestas);
      rl.close();
    });
  });
  return dato;
}

module.exports.readConsole = readConsole;
