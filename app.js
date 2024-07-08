const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const puerto = 1010;
const app = express();
app.listen(puerto);
const { engine } = require("express-handlebars");
app.engine(
  "hbs",
  engine({
    layoutsDir: "views/layouts",
    default: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views ", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//* Rutas
const homeController = require("./routes/home");
const pokemonesController = require("./routes/pokemones");
const regionesController = require("./routes/regiones");
const tiposController = require("./routes/tipos");
const errorController = require("./controllers/errorController");
app.use(homeController);
app.use(pokemonesController);
app.use(regionesController);
app.use(tiposController);
app.use(errorController.get404);

