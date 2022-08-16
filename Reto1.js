
const http = require('http');

http.createServer((request, response) => {

    console.log("Peticion Recibida del Cliente");
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers['content-type']);
    console.log(request.headers['content-lenght']);
    console.log(request.headers['user-agent']);

    if (request.url == '/') {
        return response.writeHead(200, ('Content-Type', 'application/json'),
        response.end(JSON.stringify({ OK: "True", Message: "Recibido" })));}

    else if (request.url == '/bye') {
        return response.writeHead(200, ('Content-Type', 'application/json'),
        response.end(JSON.stringify({ OK: "True", Message: "Adios" })));}

    else (response.end());

    }).listen(3000);