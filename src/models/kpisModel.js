var database = require("../database/config")

function kpiSuperior(id_usuario) {
    var instrucao = `
        SELECT
            Score AS maior_score,
            nomeMusica AS musica_maior_score FROM vw_Game
            WHERE id_usuario = ${id_usuario}
                ORDER BY Score DESC
                LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function rank(id_usuario) {
    var instrucao = `
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Graficolinha(id_usuario) {
    var instrucao = `
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiSuperior,
    rank,
    Graficolinha
};