var express = require("express");
var router = express.Router();

var equipeController = require("../controllers/equipeController");

router.post("/cadastrar", function (req, res) {
    equipeController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
  equipeController.listar(req, res);
});

module.exports = router;