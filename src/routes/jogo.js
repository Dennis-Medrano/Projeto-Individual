var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/jogo", function (req, res) {
    // função a ser chamada quando acessar /jogos/cadastrar
    jogoController.jogo(req, res);
});


module.exports = router;