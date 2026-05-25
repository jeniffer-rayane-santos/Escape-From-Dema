var database = require("../database/config")

function salvarQuestao(numPergunta, letraQuestao, tipo, usuario) {
    var instrucaoSql = `
        INSERT INTO questionario (numero_pergunta, letra_pergunta, personalidade, fk_usuario)
        VALUES (${numPergunta}, '${letraQuestao}', '${tipo}', ${usuario});
    `;
    return database.executar(instrucaoSql)
}

function obterEstatisticas() {
    var instrucaoSql = `SELECT personalidade, COUNT(*) as total FROM questionario GROUP BY personalidade`
    return database.executar(instrucaoSql)
}

function usuarioJogou(idUsuario) {
    var instrucaoSql = `SELECT COUNT(*) as total FROM questionario WHERE fk_usuario = ${idUsuario}`
    return database.executar(instrucaoSql)
}

function deletarQuestoes(idUsuario) {
    var instrucaoSql = `
        DELETE FROM questionario WHERE fk_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql)
}

function obterEscolhasPorPergunta() {
    var instrucaoSql = `
    SELECT numero_pergunta, personalidade, COUNT(*) as total
    FROM questionario
    GROUP BY numero_pergunta, personalidade
    ORDER BY (numero_pergunta + 0), personalidade;
    `
    return database.executar(instrucaoSql)
}

function obterRespostasJogador(idUsuario) {
    var instrucaoSql = `
        SELECT personalidade, COUNT(*) as total
        FROM questionario
        WHERE fk_usuario = ${idUsuario}
        GROUP BY personalidade
    `
    return database.executar(instrucaoSql)
}

module.exports = {
    salvarQuestao,
    obterEstatisticas,
    usuarioJogou,
    deletarQuestoes,
    obterEscolhasPorPergunta,
    obterRespostasJogador
}