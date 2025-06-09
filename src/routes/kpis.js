var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

router.get("/kpiSuperior/:id_usuario", function (req, res) {
    
    kpisController.kpiSuperior(req, res);
});

router.get("/rank/:id_usuario", function (req, res) {
   
    kpisController.rank(req, res);
});


router.get("/Graficolinha/:id_usuario", function (req, res) {
    
    kpisController.Graficolinha(req, res);
});

module.exports = router;