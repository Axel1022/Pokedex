const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/indexPokemones", pokemonController.getIndexPokemon);
router.get("/modPokemones", pokemonController.getModPokemon);
router.post("/addPokemones", pokemonController.postModPokemon);
module.exports = router;
