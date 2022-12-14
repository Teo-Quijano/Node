class Professional {
  constructor(name, age, genre, weight, height) {
    this.name = name;
    this.age = age;
    this.genre = genre;
    this.weight = weight;
    this.height = height;
  }
}

function postActores() {
  let actor = new Professional(
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("genre").value,
    document.getElementById("weight").value,
    document.getElementById("height").value
  );

  const url = "http://localhost:3000/profesionales";

  if (validar(actor)) {
    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(actor),
      method: "POST",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (result.error) showToast("ERROR: " + result.message, "bg-danger");
        else showToast("Actor Creado Correctamente", "bg-success");

        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function getActores()
{
    let url = "http://localhost:3000/profesionales";
    let name = document.getElementById("name")

    if (name != ""){
        url += `?i=${name}`
    }

    let param = 
    {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    fetch(url, param)
    .then(function(data)
    {
        return data.json()
    })
    .then(function(result)
    {      
        if (!result.error) {
            
            
            let array = result.res

            if (name === ""){

            for (let name = 0 ; name < array.length ; name++){
                
                final.innerHTML += `<p><div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                <div class="card-header">TU FAMOSO ES: </div>
                <div class="card-body">
                    <h5 class="card-title"><p>${array[0].name}</p></h5>
                    <p class="card-text">Edad: ${array[0].age} a??os</p>
                    <p class="card-text">Genero: ${array[0].genre}</p>
                    <p class="card-text">Peso: ${array[0].weight} Kg</p>
                    <p class="card-text">Altura: ${array[0].height} cm</p>
                </div>
                </div></p>`
            }
        }
    }
    else {
        showToast("ERROR: " +  result.message, "bg-danger")
    }})
    .catch(function(error)
    {
        console.log(error)
    })
    final.innerHTML = id="mostrar"
}


function putActores() {
  let profesional = new Professional(
    document.getElementById("name").value,
    document.getElementById("age").value,
    document.getElementById("genre").value,
    document.getElementById("weight").value,
    document.getElementById("height").value
  );

  const url = "http://localhost:3000/profesionales";

  let param = {
    headers: { "Content-type": "application/json; charset= UTF-8" },
    body: JSON.stringify(profesional),
    method: "PUT",
  };

  fetch(url, param)
    .then(function (data) {
      return data.json();
    })
    .then(function (result) {
      if (!result.error)
        showToast("Actor Actualizado Correctamente", "bg-success");
      else showToast("Error", "bg-success");
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteActores() {
  let name = document.getElementById("name").value;

  if (name != "") {
    name = String(name);

    let actor = new Professional("", "", "", "", "");

    const url = "http://localhost:3000/profesionales";

    let param = {
      headers: { "Content-type": "application/json; charset= UTF-8" },
      body: JSON.stringify(actor),
      method: "DELETE",
    };

    fetch(url, param)
      .then(function (data) {
        return data.json();
      })
      .then(function (result) {
        if (!result.error) {
          showToast("Actor Eliminado Correctamente", "bg-success");
        } else {
          showToast("El Actor no existe", "bg-danger");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    showToast("Introduce un Nombre", "bg-danger");
  }
}

function validar(actor) {
  resultado = false;
  if (actor.name == "" || actor.name == "null") {
    showToast("AVISO: Campo nombre no informado", "bg-warning");
  } else if (actor.age == "" || actor.age == "null") {
    showToast("AVISO: Campo edad no informado", "bg-warning");
  } else if (actor.genre == "" || actor.genre == "null") {
    showToast("AVISO: Campo genero no informado", "bg-warning");
  } else if (actor.weight == "" || actor.weight == "null") {
    showToast("AVISO: Campo peso no informado", "bg-warning");
  } else if (actor.height == "" || actor.height == "null") {
    showToast("AVISO: Campo altura no informado", "bg-warning");
  } else resultado = true;

  return resultado;
}

function showToast(message, color) {
  document.getElementById("toastText").innerText = message;
  let toastElement = document.getElementById("toast");

  toastElement.className =
    toastElement.className.replace("bg-warning").replace("bg-danger") +
    " " +
    color;

  let toast = new bootstrap.Toast(toastElement);
  toast.show();
}
