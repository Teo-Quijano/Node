const Profesional = require ("../profesional");

let reparto = [];

let actor1 = new Profesional ("Al Pacino", 82, "masculino", 75, 170, "castaño", 
                    "negro", "blanco", false, "USA", 1, "actor");

let actor2 = new Profesional ("Robert De Niro", 78, "masculino", 80, 180, "negro",
                    "negro", "blanco", false, "USA", 2, "actor");

let actor3 = new Profesional ("Val Kilmer", 62, "masculino", 80, 182, "rubio",
                    "azules", "blanco", false, "USA", 0, "actor");

reparto.push(actor1);
reparto.push(actor2);
reparto.push(actor3);

function getCast(request, response) {
  let respuesta = reparto;
  response.send(respuesta);
}

function getActores(request, response) {
  let id = request.query.id;
  console.log(id);
  let respuesta;

  if (id >= profesionales.length) {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No existe el ID solicitado",
    };
  } else if (profesionales != null && id) {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "ID encontrado",
      response: profesionales[id],
    };
  } else {
    respuesta = { error: false, response: profesionales };
  }
  response.send(respuesta);
}

function postActores(request, response) {
  let respuesta;
  let name = request.body.name;
  let age = request.body.age;
  let genre = request.body.genre;
  let weight = request.body.weight;
  let height = request.body.height;
  let hairColor = request.body.hairColor;
  let eyeColor = request.body.eyeColor;
  let race = request.body.race;
  let isRetired = request.body.isRetired;
  let nationality = request.body.nationality;
  let oscarsNumber = request.body.oscarsNumber;
  let profession = request.body.profession;

  let profesional = new Profesional(
    name,
    age,
    genre,
    weight,
    height,
    hairColor,
    eyeColor,
    race,
    isRetired,
    nationality,
    oscarsNumber,
    profession
  );

  profesionales.push(profesional);
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Nuevo Actor creado",
    response: profesional,
  };
  response.send(respuesta);
}

function putActores(request, response) {
  let respuesta;
  let name = request.body.name;
  let age = request.body.age;
  let genre = request.body.genre;
  let weight = request.body.weight;
  let height = request.body.height;
  let hairColor = request.body.hairColor;
  let eyeColor = request.body.eyeColor;
  let race = request.body.race;
  let isRetired = request.body.isRetired;
  let nationality = request.body.nationality;
  let oscarsNumber = request.body.oscarsNumber;
  let profession = request.body.profession;
  let id = request.body.id;

  if (id >= profesionales.length) {
    respuesta = { error: false, codigo: 200, mensaje: "El dato no existe" };
  } else if (profesionales[id] == null) {
    respuesta = { error: false, codigo: 200, mensaje: "El Actor no existe" };
  } else {
    profesionales[id] = new Profesional(
      name,
      age,
      genre,
      weight,
      height,
      hairColor,
      eyeColor,
      race,
      isRetired,
      nationality,
      oscarsNumber,
      profession
    );

    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Actor modificado correctamente",
      response: profesionales,
    };
  }
  response.send(respuesta);
}

function deleteActores(request, response) {
  let respuesta;
  let id = request.body.id;

  if (profesionales != null) {
    profesionales.splice(id, 1);
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Actor eliminado correctamente",
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No se ha eliminado ningún Actor",
    };
  }
  response.send(respuesta);
}

module.exports = {
  getCast,
  getActores,
  postActores,
  putActores,
  deleteActores,
};