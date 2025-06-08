var database = require("../database/config")

function kpiSuperior(id_usuario) {
    var instrucao = `
        
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