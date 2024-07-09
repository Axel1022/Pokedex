const express = require("express");
const router = express.Router();
const regionesController = require("../controllers/regionController");

router.get("/indexRegiones", regionesController.getIndexRegiones);
router.get("/modRegiones", regionesController.getModRegiones);
router.post("/addRegiones", regionesController.postModRegiones);
router.post("/EliminarRegiones", regionesController.postEliminarRegion);
router.post("/EditarRegion", regionesController.postEditRegion);
router.get("/EditarRegion/:RegiId", regionesController.getModEditRegiones);
module.exports = router;
