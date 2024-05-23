var express = require("express");
var router = express.Router();

var equipeController = require("../controllers/equipeController");

router.get("/listarEquipe", function (req, res) {
  equipeController.listar(req, res);
});

module.exports = router;