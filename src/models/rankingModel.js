var database = require("../database/config")

function obterRanking() {
    var instrucaoSql = `
        SELECT 
            usuario.idUsuario,
            usuario.nome,
            usuario.imgPerfil,
            piloto.NumPiloto,
            equipe.logo,
            SUM(tentativa.acertos) AS total_acertos,
            SUM(tentativa.erros) AS total_erros,
            MIN(tentativa.tempo) AS melhor_tempo
        FROM 
            quiz
        JOIN 
            usuario ON tentativa.idUsuario = usuario.idUsuario
        JOIN
            piloto ON usuario.fkPiloto = piloto.idPiloto
        JOIN
            equipe ON usuario.fkEquipe = equipe.idEquipe
        GROUP BY 
            usuario.idUsuario, usuario.nome, usuario.imgPerfil, piloto.NumPiloto, equipe.logo
        ORDER BY 
            total_acertos DESC, melhor_tempo ASC
        LIMIT 10;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql)
        .then(resultados => {
            return resultados.map(row => ({
                idUsuario: row.idUsuario,
                nome: row.nome,
                imgPerfil: row.imgPerfil,
                numeroPiloto: row.NumPiloto,
                nomeEquipe: row.nomeEquipe,
                logoEquipe: row.logo,
                total_acertos: row.total_acertos,
                total_erros: row.total_erros,
                melhor_tempo: formatarTempo(row.melhor_tempo)
            }));
        })
        .catch(error => {
            console.error("Erro ao obter ranking: ", error);
            throw error;
        });
}

module.exports = {
    obterRanking,
};
