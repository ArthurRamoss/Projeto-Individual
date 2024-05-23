var database = require("../database/config");

function listarEquipe() {
  var instrucaoSql = `SELECT * FROM equipe`;

  return database.executar(instrucaoSql);
}

module.exports = {listarEquipe};
