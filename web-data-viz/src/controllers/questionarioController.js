var questionarioModel = require("../models/questionarioModel")

function salvarQuestao(req, res) {
    let numPergunta = req.body.numeroPergunta;
    let letraQuestao = req.body.questao;
    let tipo = req.body.tipoPergunta;
    let usuario = req.body.idUsuario;

    if (numPergunta == undefined) {
        res.status(400).send("Seu numero da pergunta está vazio!");
    } else if (usuario == undefined || usuario == null) {
        res.status(400).send("A fk_usuario está vazia ou nula!");
    } else {
        questionarioModel.salvarQuestao(numPergunta, letraQuestao, tipo, usuario)
            .then(function (resultado) {
                res.json({
                    mensagem: "Questão cadastrada com sucesso!",
                    dados: {
                        numeroPergunta: numPergunta,
                        questao: letraQuestao,
                        tipoPergunta: tipo,
                        idUsuario: usuario
                    }
                });
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterEstatisticas(req, res) {
    questionarioModel.obterEstatisticas()
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function usuarioJogou(req, res) {
    var idUsuario = req.params.idUsuario;
    questionarioModel.usuarioJogou(idUsuario)
        .then(function(resultado) {
            res.json({ jogou: parseInt(resultado[0].total) > 0 });
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function deletarQuestoes(req, res) {
    let idUsuario = req.body.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está vazio!");
    } else {
        questionarioModel.deletarQuestoes(idUsuario)
            .then(function (resultado) {
                res.json({
                    mensagem: "Questões deletadas com sucesso!",
                    idUsuario: idUsuario
                });
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function obterEscolhasPorPergunta(req, res) {
    questionarioModel.obterEscolhasPorPergunta()
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterRespostasJogador(req, res) {
    var idUsuario = req.params.idUsuario;
    questionarioModel.obterRespostasJogador(idUsuario)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarQuestao,
    obterEstatisticas,
    usuarioJogou,
    deletarQuestoes,
    obterEscolhasPorPergunta,
    obterRespostasJogador
}