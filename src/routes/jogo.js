var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/jogoInserir", function (req, res) {
    console.log('Cheguei no model')
    // função a ser chamada quando acessar /jogos/cadastrar
    jogoController.jogoInserir(req, res);
});


module.exports = router;