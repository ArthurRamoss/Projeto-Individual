var express = require("express");
var router = express.Router();

var pilotoController = require("../controllers/pilotoController");

router.get("/listarPiloto", function (req, res) {
  pilotoController.listar(req, res);
});

module.exports = router;