const PokemonModel = require("../models/pokemones");
const RegionModel = require("../models/regiones");
const TipoModel = require("../models/tipos");

exports.getIndexPokemon = (req, res, next) => {
  PokemonModel.getAll((pokemones) => {
    res.render("pokemones/index", {
      pageTitle: "Pokemones | Admin",
      Pokemones: pokemones,
      hasPokemon: pokemones.length > 0,
    });
  });
};
exports.getModPokemon = (req, res, next) => {
  RegionModel.getAll((regiones) => {
    TipoModel.getAll((tipos) => {
      res.render("pokemones/modPokemones", {
        pageTitle: "Pokemones | Modificad",
        Regiones: regiones,
        Tipos: tipos,
        EditMode: false,
      });
    });
  });
};
exports.postModPokemon = (req, res, next) => {
  const nombre = req.body.Title;
  const Url = req.body.ImgUrl;
  const tipo = req.body.Tipo;
  const region = req.body.Region;
  const Poke = new PokemonModel(null, nombre, Url, tipo, region);
  Poke.save();
  res.redirect("/indexPokemones");
};