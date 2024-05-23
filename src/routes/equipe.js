var express = require("express");
var router = express.Router();

var equipeController = require("../controllers/equipeController");

router.get("/listarEquipe", function (req, res) {
  equipeController.listarEquipe(req, res);
});

module.exports = router;