var kpisModel = require("../models/kpisModel");

function kpiSuperior(req, res) {
    var ID_USUARIO = req.params.id_usuario;
    kpisModel.kpiSuperior(ID_USUARIO).then(function(resultado){
        console.log('id_usuario: ',ID_USUARIO)
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function rank(req, res) {
    var ID_USUARIO = req.params.id_usuario;
    kpisModel.rank(ID_USUARIO).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function Graficolinha(req, res) {
    var ID_USUARIO = req.params.id_usuario;
    kpisModel.Graficolinha(ID_USUARIO).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    kpiSuperior,
    rank,
    Graficolinha
}