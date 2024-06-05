var database = require("../database/config");

function obterRanking() {
    var instrucaoSql = `
    SELECT 
        u.nome,
        u.imgPerfil,
        p.imgNumPiloto,
        e.logo,
        q.acertos,
        q.erros,
        q.tentativa,
        q.tempo
    FROM 
        usuario u
    JOIN 
        quiz q ON u.idUsuario = q.idUsuario
    JOIN 
        piloto p ON u.fkPiloto = p.idPiloto
    JOIN 
        equipe e ON u.fkEquipe = e.idEquipe
    ORDER BY 
        q.acertos DESC,
        q.tempo ASC
    LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterRankingPorTipo(tipoQuiz) {
    var instrucaoSql = `
    SELECT 
        u.nome,
        u.imgPerfil,
        p.imgNumPiloto,
        e.logo,
        q.acertos,
        q.erros,
        q.tentativa,
        q.tempo
    FROM 
        usuario u
    JOIN 
        quiz q ON u.idUsuario = q.idUsuario
    JOIN 
        piloto p ON u.fkPiloto = p.idPiloto
    JOIN 
        equipe e ON u.fkEquipe = e.idEquipe
    WHERE 
        q.tipoQuiz = '${tipoQuiz}'
    ORDER BY 
        q.acertos DESC,
        q.tempo ASC
    LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterRanking,
    obterRankingPorTipo
};
