const PokemonModel = require("../models/pokemones");
exports.getHome = (req, res, next) => {
  PokemonModel.getAll((pokemones) => {
    res.render("pokedex/home", {
      pageTitle: "Pokedex | Home",
      Pokemones: pokemones,
      hasPokemon: pokemones.length > 0,
    });
  });
};
