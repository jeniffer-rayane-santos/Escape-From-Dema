var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/salvarQuestao", function (req, res) {
    questionarioController.salvarQuestao(req, res);
})

router.get("/estatisticas", function (req, res) {
    questionarioController.obterEstatisticas(req, res);
})

router.get("/jogou/:idUsuario", function (req, res) {
    questionarioController.usuarioJogou(req, res);
})

router.delete("/deletarQuestoes", function (req, res) {
    questionarioController.deletarQuestoes(req, res);
});

router.get("/escolhasPorPergunta", function (req, res) {
    questionarioController.obterEscolhasPorPergunta(req, res);
});

router.get("/respostasJogador/:idUsuario", function (req, res) {
    questionarioController.obterRespostasJogador(req, res);
});

module.exports = router;