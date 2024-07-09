const express = require("express");
const router = express.Router();
const tipoController = require("../controllers/tipoController");

router.get("/indexTipos", tipoController.getIndexTipos);
router.get("/modTipos", tipoController.getModTipos);
router.post("/addTipos", tipoController.postModTipo);
router.post("/EliminarTipos", tipoController.postEliminarTipo);
router.post("/EditarTipo", tipoController.postEditTipo);
router.get("/EditarTipo/:TipoId", tipoController.getModEditTipos);
module.exports = router;
