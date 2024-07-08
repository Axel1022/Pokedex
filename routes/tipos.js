const express = require("express");
const router = express.Router();
const tipoController = require("../controllers/tipoController");

router.get("/indexTipos", tipoController.getIndexTipos);
router.get("/modTipos", tipoController.getModTipos);
router.post("/addTipos", tipoController.postModTipo);
module.exports = router;
