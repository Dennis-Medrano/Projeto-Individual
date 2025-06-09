var database = require("../database/config")
console.log('Cheguei no model')

function jogoInserir(pontuacao,fkJogador,fkMusica) {
    var instrucao = `
        insert into tentativa (fkUsuario,fkMusica,score,dataRegistro) values
            (${fkJogador},${fkMusica},${pontuacao},default);
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    jogoInserir
};