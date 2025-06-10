var database = require("../database/config")

function kpiSuperior(ID_USUARIO) {
    var instrucao = `
        SELECT
            Score AS maior_score,
            nomeMusica AS musica_maior_score FROM vw_Game
            WHERE id_usuario = ${ID_USUARIO}
                ORDER BY Score DESC
                LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function rank() {
    var instrucao = `
        select * from vw_ranking; 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function Graficolinha(ID_USUARIO) {
    var instrucao = `
        SELECT
            Score,
            DATE_FORMAT(dataRegistro, '%d-%m - %H:%i') AS dataRegistro
            FROM vw_Game
            WHERE id_usuario = ${ID_USUARIO}
                ORDER BY dataRegistro asc;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiSuperior,
    rank,
    Graficolinha
};