var questionarioModel = require("../models/questionarioModel")


function salvarQuestao(req, res) {

    var codigo = req.body.codigoServer
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    var idUsuario = req.body.idUsuario

    if (nome == undefined) {
        res.status(400).send("Seu nome está vazio!")
    } else if (email == undefined) {
        res.status(400).send("Seu email está vazio!")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está vazio!")
    } else if (codigo == undefined) {
        res.status(400).send("Seu código está vazio!")
    } else {

        usuarioModel.cadastrar(codigo, nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    autenticar,
    cadastrar
}