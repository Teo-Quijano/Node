
const app = require("./app")

app.listen(app.get("port"), function () {
  console.log("Servidor escuchando en el Puerto" + app.get("port"))
})