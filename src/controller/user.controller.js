
const Profesional = require ("../profesional");

let profesional = new Profesional ("Bryan Cranston", 66, "masculino", 80, 179, "castaño",
                                "grises", "caucasico", false, "USA", 0, "actor");

function getProfesional(request, response) {
  let respuesta;

  if (profesional != null) {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Existe el Profesional",
      response: profesional,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No existe el Profesional",
    };
  }
  response.send(respuesta);
}

function postProfesional(request, response) {
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

  if (profesional == null) {
    new Profesional(
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
      mensaje: "Profesional creado exitosamente",
      response: profesional,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Profesional ya existe",
      response: null,
    };
  }
  response.send(respuesta);
}

function putProfesional(request, response) {
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

  if (profesional != null) {
    new Profesional(
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
      mensaje: "Profesional modificado con éxito",
      response: profesional,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No existe el profesional",
      response: profesional,
    };
  }
  response.send(respuesta);
}

function deleteProfesional(request, response) {
  let respuesta;

  if (profesional != null) {
    profesional = null;
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Profesional eliminado correctamente.",
      response: profesional,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "Profesional no existe",
      response: profesional,
    };
  }
  response.send(respuesta);
}

module.exports = {
  getProfesional,
  postProfesional,
  putProfesional,
  deleteProfesional,
};