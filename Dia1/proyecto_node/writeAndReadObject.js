const fs = require("fs");

function writeAndReadObject(fichero, cliente, callback) {
  fs.writeFile(fichero, JSON.stringify(cliente, null, 2), () => {
    fs.readFile(fichero, (err, cliente) => {
      callback(JSON.parse(cliente));
    });
  });
}

module.exports = {writeAndReadObject};