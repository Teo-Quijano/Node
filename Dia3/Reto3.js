let express = require('express');

let app = express();

app.use((request, response, next) => {
 
    console.log(`${request.url} ${request.method}`)
    next();
})

app.get("/", (request, response, next) => {
    response.send(200, ('Content-Type', 'application/json'),
    response.send(JSON.stringify({ OK: "True", Message: "Recibido" })));
});

app.get("/bye", (request, response, next) => {
    response.send(200, ('Content-Type', 'application/json'),
    response.send(JSON.stringify({ OK: "True", Message: "Adios" })));
});

app.listen(3000, () => {
    console.log("Peticion recibida del Cliente", 3000);
});
