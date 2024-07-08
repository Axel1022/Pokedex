const RegionModel = require("../models/regiones");

exports.getIndexRegiones = (req, res, next) => {
  RegionModel.getAll((regiones) => {
    res.render("regiones/index", {
      pageTitle: "Regiones | Admin",
      Regiones: regiones,
      hasRegion: regiones.length > 0,
    });
  });
};
exports.getModRegiones = (req, res, next) => {
  res.render("regiones/modRegiones", {
    pageTitle: "Regiones | Modificad",
    EditMode: false,
  });
};
exports.postModRegiones = (req, res, next) => {
  const region = req.body.Title;
  const Region = new RegionModel(null, region);
  Region.save();
  res.redirect("/indexRegiones");
};

