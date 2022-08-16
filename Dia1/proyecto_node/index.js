const readConsole = require("./readConsole");
const writeAndReadObject = require("./writeAndReadObject");

readConsole.readConsole((cliente) => {
  writeAndReadObject.writeAndReadObject(
    "./fichero.json",
    cliente,
    (cliente) => {
      console.log("Name   :", cliente.name);
      console.log("Surname :", cliente.surname);
      console.log("Age     :", cliente.age);
    }
  );
});