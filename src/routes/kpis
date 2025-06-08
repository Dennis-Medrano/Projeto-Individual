var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController");

router.post("/kpiSuperior/:id_usuario", function (req, res) {
    
    kpisController.kpiSuperio(req, res);
});

router.get("/kpis/rank/:id_usuario", function (req, res) {
   
    kpisController.rank(req, res);
});


router.get("/kpis/Graficolinha/:id_usuario", function (req, res) {
    
    kpisController.Graficolinha(req, res);
});

module.exports = router;