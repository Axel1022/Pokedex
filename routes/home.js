const express = require("express");
const router = express.Router();
const Homecontroller = require("../controllers/homeController");

router.get("/", Homecontroller.getHome);
module.exports = router;
