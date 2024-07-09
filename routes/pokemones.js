const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router.get("/indexPokemones", pokemonController.getIndexPokemon);
router.get("/modPokemones", pokemonController.getModPokemon);
router.post("/addPokemones", pokemonController.postModPokemon);
router.post("/eliminarPokemon", pokemonController.postEliminarPokemon);
router.post("/EditarPokemon", pokemonController.postEditPokemon);
router.get("/EditarPokemon/:PokeId", pokemonController.getModEditPokemones);
module.exports = router;
