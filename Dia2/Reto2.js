const fs = require("fs/promises");

let fichero = "./fichero.json";
let persona = { name: "Teo", surname: "Quijano", age: 49 };

array();

async function array() {
  try {
    await fs.writeFile(fichero, JSON.stringify(persona));

    let jsonPersona = JSON.parse(await fs.readFile(fichero));
    console.log("Name   :", jsonPersona.name);
    console.log("Surname :", jsonPersona.surname);
    console.log("Age    :", jsonPersona.age);
  } catch (error) {
    console.log(error);
  }
}