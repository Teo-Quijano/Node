

let readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fs = require("fs/promises");

let fichero = './fichero.json';

newArray();

async function newArray() {
    try {
        let nuevoCliente = { name: "",
                surname: "",
                age: ""}
        nuevoCliente.name = await pedirDatos("Escriba su Nombre:  ");
        nuevoCliente.surname = await pedirDatos("Escriba su Apellido:  ");
        nuevoCliente.age = await pedirDatos("Escriba su Edad:  ");

        await fs.writeFile(fichero, JSON.stringify(nuevoCliente));

        nuevoCliente = JSON.parse(await fs.readFile(fichero));
        console.log("Nombre   :", nuevoCliente.name);
        console.log("Apellido :", nuevoCliente.surname);
        console.log("Edad     :", nuevoCliente.age);

    
    } catch (error) {
        console.log(error)
    }
}

function pedirDatos(preguntas) {
    const promesa = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(preguntas, (respuestas) => {
            resolve(respuestas);
            rl.close();
        });
    });
    return promesa;
}