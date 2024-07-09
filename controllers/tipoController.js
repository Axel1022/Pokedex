const TipoModel = require("../models/tipos");

exports.getIndexTipos = (req, res, next) => {
  TipoModel.getAll((tipos) => {
    res.render("tipos/index", {
      pageTitle: "Tipos | Admin",
      Tipos: tipos,
      hasTipos: tipos.length > 0,
    });
  });
};
exports.getModTipos = (req, res, next) => {
  res.render("tipos/modTipos", {
    pageTitle: "Tipos | Modificad",
    EditMode: false,
  });
};

exports.postModTipo = (req, res, next) => {
  const Tipo = req.body.Title;
  const tipo = new TipoModel(null, Tipo);
  tipo.save();
  res.redirect("/indexTipos");
};
exports.postEliminarTipo = (req, res, next) => {
  const TipoId = req.body.TipoId;
  TipoModel.delete(TipoId);
  res.redirect("/indexTipos");
};
exports.getModEditTipos = (req, res, next) => {
  const TipoId = req.params.TipoId;
  TipoModel.getByID(TipoId, (tipo) => {
    if (!tipo) {
      return res.redirect("/indexTipos");
    }
    res.render("tipos/modTipos", {
      pageTitle: "Tipos | Modificad",
      Tipo: tipo,
      EditMode: true,
    });
  });
};
exports.postEditTipo = (req, res, next) => {
  const TipoId = req.body.TipoId;
  const Tipo = req.body.Title;
  const tipo = new TipoModel(TipoId, Tipo);
  tipo.save();
  res.redirect("/indexTipos");
};
