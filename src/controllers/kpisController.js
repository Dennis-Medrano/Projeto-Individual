var kpisModel = require("../models/kpisModel");

function kpiSuperior(req, res) {
    var id_usuario = req.query.id_usuario;
    kpisModel.kpiSuperior(id_usuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function rank(req, res) {
    var id_usuario = req.query.id_usuario;
    kpisModel.rank(id_usuario).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function Graficolinha(req, res) {
    var id_usuario = req.query.id_usuario;
    kpisModel.Graficolinha(id_usuario).then(function(resultado){
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