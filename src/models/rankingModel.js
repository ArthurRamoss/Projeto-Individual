var database = require("../database/config");

function listarPiloto() {
  var instrucaoSql = `SELECT * FROM piloto`;

  return database.executar(instrucaoSql);
}

module.exports = {listarPiloto};
