
var rankingModel = require('../models/rankingModel');

function obterRanking(req, res) {
    rankingModel.obterRanking()
        .then(ranking => {
            res.status(200).json(ranking);
        })
        .catch(error => {
            console.error("Erro ao obter ranking: ", error);
            res.status(500).json({ message: "Erro ao obter ranking", error: error.message });
        });
}

function obterRankingPorTipo(req, res) {
    const tipoQuiz = req.params.tipoQuiz; 

    if (tipoQuiz === undefined) {
        res.status(400).send("O tipo de quiz está indefinido!");
        return;
    }

    rankingModel.obterRankingPorTipo(tipoQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.error(erro);
                res.status(500).json({ error: "Erro ao listar o ranking por tipo " });
            }
        );
}

module.exports = {
    obterRanking,
    obterRankingPorTipo
};
