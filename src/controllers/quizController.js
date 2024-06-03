    var quizModel = require("../models/quizModel");

    function registrarTentativa(req, res) {
        var idUsuario = req.body.idUsuario;
        var acertos = req.body.acertos;
        var erros = req.body.erros;
        var tentativa = req.body.tentativa;
        var tempo = req.body.tempo;
        var tipoQuiz = req.body.tipoQuiz;

        if (idUsuario == undefined) {
            res.status(400).send("O id do usuário está indefinido!");
            return;
        }
        if (acertos == undefined) {
            res.status(400).send("O número de acertos está indefinido!");
            return;
        }
        if (erros == undefined) {
            res.status(400).send("O número de erros está indefinido!");
            return;
        }
        if (tentativa == undefined) {
            res.status(400).send("O número da tentativa está indefinido!");
            return;
        }
        if (tempo == undefined) {
            res.status(400).send("O tempo está indefinido!");
            return;
        }
        if (tipoQuiz == undefined) {
            res.status(400).send("O tipo de quiz está indefinido!");
            return;
        }


        quizModel.registrarTentativa(idUsuario, acertos, erros, tentativa, tempo, tipoQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao registrar a tentativa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function verificarTentativas(req, res) {
        var idUsuario = req.params.idUsuario;
        var tipoQuiz = req.params.tipoQuiz;

        if (idUsuario == undefined) {
            res.status(400).send("O id do usuário está indefinido!");
            return;
        }
        if (tipoQuiz == undefined) {
            res.status(400).send("O tipo de quiz está indefinido!");
            return;
        }
        
        quizModel.verificarTentativas(idUsuario, tipoQuiz)
            .then(
                function (resultado) {
                    var tentativas = resultado[0].tentativas || 0;
                    res.json({ tentativas: tentativas });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao verificar as tentativas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

    function listarTentativas(req, res) {
        const idUsuario = req.params.idUsuario;
        const tipoQuiz = req.params.tipoQuiz;
    
        if (idUsuario === undefined) {
            res.status(400).send("O id do usuário está indefinido!");
            return;
        }
        if (tipoQuiz === undefined) {
            res.status(400).send("O tipo de quiz está indefinido!");
            return;
        }
    
        quizModel.listarTentativas(idUsuario, tipoQuiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.error(erro);
                    res.status(500).json({ error: "Erro ao listar as tentativas do usuário" });
                }
            );
    }

    module.exports = {
        registrarTentativa,
        verificarTentativas,
        listarTentativas
    };

