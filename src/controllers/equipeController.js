var equipeModel = require("../models/equipeModel");

function listarEquipe(req, res) {
    equipeModel.listarEquipe().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
  listarEquipe,
};
