var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de questionarioController.js
router.post("/salvarQuestao", function (req, res) {
    questionarioController.salvarQuestao(req, res);
})

router.delete("/deletarQuestoes", function (req, res) {
    questionarioController.deletarQuestoes(req, res);
});

module.exports = router;