
function errorHandling(err, request, response, next) {
  response.status(500).json({ message: err.message });
}

module.exports = errorHandling;