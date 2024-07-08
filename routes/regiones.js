const express = require("express");
const router = express.Router();
const regionesController = require("../controllers/regionController");

router.get("/indexRegiones", regionesController.getIndexRegiones);
router.get("/modRegiones", regionesController.getModRegiones);
router.post("/addRegiones", regionesController.postModRegiones);
module.exports = router;
