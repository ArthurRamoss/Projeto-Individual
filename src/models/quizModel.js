var database = require("../database/config")

function registrarTentativa(idUsuario, acertos, erros, tentativa, tempo, tipoQuiz) {
    console.log("ACESSEI O quiz MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():");

    var instrucaoSql = `
    INSERT INTO quiz (idUsuario, acertos, erros, tentativa, tempo, tipoQuiz) VALUES ('${idUsuario}', '${acertos}', '${erros}', '${tentativa}', '${tempo}', '${tipoQuiz}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function verificarTentativas(idUsuario, tipoQuiz) {
    var instrucaoSql = `
        SELECT COUNT(*) AS tentativas
        FROM quiz
        WHERE idUsuario = ${idUsuario} AND tipoQuiz = '${tipoQuiz}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTentativas(idUsuario, tipoQuiz) {
    const instrucaoSql = `
        SELECT acertos, erros, tentativa, tempo
        FROM quiz
        WHERE idUsuario = ${idUsuario} AND tipoQuiz = '${tipoQuiz}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa,
    verificarTentativas,
    listarTentativas
};