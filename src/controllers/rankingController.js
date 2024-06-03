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
    rankingModel.obterRankingPorTipo()
        .then(ranking => {
            res.status(200).json(ranking);
        })
        .catch(error => {
            console.error("Erro ao obter ranking: ", error);
            res.status(500).json({ message: "Erro ao obter ranking", error: error.message });
        });
}

module.exports = {
    obterRanking,
    obterRankingPorTipo 
};
