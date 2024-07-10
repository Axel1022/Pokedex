const PokemonModel = require("../models/pokemones");
const RegionModel = require("../models/regiones");
exports.getHome = (req, res, next) => {
  PokemonModel.getAll((pokemones) => {
    RegionModel.getAll((regiones) => {
      res.render("pokedex/home", {
        pageTitle: "Pokedex | Home",
        Pokemones: pokemones,
        hasPokemon: pokemones.length > 0,
        Regiones: regiones,
      });
    });
  });
};
exports.postBuscar = (req, res, next) => {
  const info = req.body.info;
  if (info) {
    PokemonModel.buscar(info, (resultados) => {
      res.render("pokedex/home", {
        pageTitle: `Home | "${info}"`,
        Pokemones: resultados,
        hasPokemon: resultados.length > 0,
      });
    });
  } else {
    res.redirect("/");
  }
};
