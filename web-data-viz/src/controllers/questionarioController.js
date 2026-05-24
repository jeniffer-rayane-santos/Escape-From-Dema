var questionarioModel = require("../models/questionarioModel")


function salvarQuestao(req, res) {


    let numPergunta = req.body.numeroPergunta
    let letraQuestao = req.body.questao
    let tipo = req.body.tipoPergunta
    let usuario = req.body.idUsuario

    // trocar mensagem
    if (numPergunta == undefined) {
        res.status(400).send("Seu numero da pergunta está vazio!")
    } else {

        questionarioModel.salvarQuestao(numPergunta, letraQuestao, tipo, usuario)
            .then(
                function (resultado) {
                res.json({
                    mensagem: "Questão cadastrada com sucesso!",
                    dados: {
                        numeroPergunta: numPergunta,
                        questao: letraQuestao,
                        tipoPergunta: tipo,
                        idUsuario: usuario
                    }
                });
            }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da questao! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
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
                console.log("\nHouve um erro ao deletar as questões! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvarQuestao,
    deletarQuestoes
}