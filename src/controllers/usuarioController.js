    var usuarioModel = require("../models/usuarioModel");

    function autenticar(req, res) {
        var email = req.body.emailServer;
        var senha = req.body.senhaServer;

        if (email == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (senha == undefined) {
            res.status(400).send("Sua senha está indefinida!");
        } else {

            usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        const usuario = resultadoAutenticar[0];
                        res.json({
                            id: usuario.idUsuario,
                            email: usuario.email,
                            nome: usuario.nome,
                            senha: usuario.senha,
                            imgPerfil: usuario.imgPerfil
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
                );
        }
    }

    function cadastrar(req, res) {
        var fkEquipe = req.body.fkEquipeServer;
        var fkPiloto = req.body.fkPilotoServer;
        var nome = req.body.nomeServer;
        var email = req.body.emailServer;
        var senha = req.body.senhaServer;
        var imgPerfil = req.body.imgPerfilServer;


        if (nome == undefined) {
            res.status(400).send("Seu nome está undefined!");
        } else if (email == undefined) {
            res.status(400).send("Seu email está undefined!");
        } else if (senha == undefined) {
            res.status(400).send("Sua senha está undefined!");
        } else if (fkEquipe == undefined) {
            res.status(400).send("Sua equipe está undefined!");
        } else if (fkPiloto == undefined) {
            res.status(400).send("Seu piloto está undefined!");
        } else if (imgPerfil == undefined) {
            res.status(400).send("Sua foto de perfil está undefined!");}

            usuarioModel.cadastrar(fkEquipe, fkPiloto, nome, email, senha, imgPerfil)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }

    function listarInfo(req, res) {
        var email = req.params.email;

        usuarioModel.listarInfo(email)
        .then(
            function (resultado) {
                res.json(resultado);
            })
    }

    module.exports = {
        autenticar,
        cadastrar,
        listarInfo
    };
