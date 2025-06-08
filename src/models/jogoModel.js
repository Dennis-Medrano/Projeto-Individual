var database = require("../database/config")

function jogo() {
    var instrucao = `
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    jogo
};