
const http = require('http');
const { json } = require('stream/consumers');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type':'text/plain'

    })

    response.write("Peticion recibida del Cliente");
    response.end();
}).listen(3000);    

function sendData (OK, message) {

    fetch("http://localhost:3000/get", {
    method: "Get",
    mode: "cors",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({OK: true, message: 'Recibido!'})
})
.then(response => response.json()
.then(json => console.log(json)));
}