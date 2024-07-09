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
exports.postEliminarRegion = (req, res, next) => {
  const RegiId = req.body.RegiId;
  RegionModel.delete(RegiId);
  res.redirect("/indexRegiones");
};

exports.getModEditRegiones = (req, res, next) => {
  const RegiId = req.params.RegiId;
  RegionModel.getByID(RegiId, (regi) => {
    if (!regi) {
      return res.redirect("/indexRegiones");
    }
    res.render("regiones/modRegiones", {
      pageTitle: "Regiones | Modificad",
      Region: regi,
      EditMode: true,
    });
  });
};
exports.postEditRegion = (req, res, next) => {
  const RegiId = req.body.RegiId;
  const region = req.body.Title;
  const Region = new RegionModel(RegiId, region);
  Region.save();
  res.redirect("/indexRegiones");
};
