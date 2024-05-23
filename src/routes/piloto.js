var express = require("express");
var router = express.Router();

var pilotoController = require("../controllers/pilotoController");

router.post("/cadastrar", function (req, res) {
    pilotoController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
  pilotoController.listar(req, res);
});

module.exports = router;