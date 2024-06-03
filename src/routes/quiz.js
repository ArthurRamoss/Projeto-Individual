var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quizController');

router.post("/registrarTentativa", function (req, res) {
    quizController.registrarTentativa(req, res);
});

router.get('/verificarTentativas/:idUsuario/:tipoQuiz', function (req, res) {
    quizController.verificarTentativas(req, res);
});

router.get('/listarTentativas/:idUsuario/:tipoQuiz', function (req, res) {
    quizController.listarTentativas(req, res);
});

module.exports = router;
