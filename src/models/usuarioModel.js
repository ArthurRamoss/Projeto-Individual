var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    SELECT 
        fkEquipe AS idEquipe, 
        fkPiloto AS idPiloto,
        idUsuario, 
        nome, 
        email,
        imgPerfil
    FROM 
        usuario 
    WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(fkEquipe, fkPiloto, nome, email, senha, imgPerfil) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (fkEquipe, fkPiloto, nome, email, senha, imgPerfil) VALUES ('${fkEquipe}', '${fkPiloto}', '${nome}', '${email}', '${senha}', '${imgPerfil}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarInfo(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarInfo():", email);

    var instrucaoSql = `
    SELECT 
    usuario.idUsuario, 
    usuario.nome, 
    usuario.email, 
    usuario.imgPerfil, 
    equipe.logo AS logoEquipe, 
    piloto.imgNumPiloto
FROM 
    usuario 
INNER JOIN 
    equipe ON usuario.fkEquipe = equipe.idEquipe
INNER JOIN 
    piloto ON usuario.fkPiloto = piloto.idPiloto
WHERE 
    usuario.email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    listarInfo
};