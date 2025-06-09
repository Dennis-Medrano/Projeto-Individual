var jogoModel = require("../models/jogoModel");

function jogoInserir(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var fkJogador = req.body.idJogadorServer;
    var fkMusica = req.body.fkMusicaServer;
    console.log('Cheguei no controll')

    jogoModel.jogoInserir(pontuacao,fkJogador,fkMusica).then(function(resposta){
        console.log('deu certo no controll')
        res.status(200).send("Carro criado com sucesso");
        console.log('Resposta: ', resposta)
    }).catch(function(erro){
        console.log('Deu merda no controll')

        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    jogoInserir
}