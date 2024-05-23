var pilotoModel = require("../models/pilotoModel");

function listarPiloto(req, res) {
    pilotoModel.listarPiloto().then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
  listarPiloto,
};
