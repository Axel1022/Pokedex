const jsonFileHandler = require("../utils/jsonFileHandler");
const path = require("path");
const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "regiones.json"
);

module.exports = class region {
  constructor(id, region, url) {
    this.id = id;
    this.region = region;
  }
  save() {
    jsonFileHandler.ReadAllData(dataPath, (regiones) => {
      if (this.id) {
        const indexregion = regiones.findIndex((r) => r.id === this.id);
        if (indexregion) {
          regiones[indexregion] = this;
          jsonFileHandler.WriteData(dataPath, regiones);
        }
      } else {
        this.id = Math.random().toString();
        regiones.push(this);
        jsonFileHandler.WriteData(dataPath, regiones);
      }
    });
  }
  static getAll(cb) {
    jsonFileHandler.ReadAllData(dataPath, cb);
  }
  static getByID(id, cb) {
    jsonFileHandler.ReadAllData(dataPath, function (regiones) {
      const region = regiones.find((r) => r.id === id);
      cb(region);
    });
  }
  static delete(id) {
    jsonFileHandler.ReadAllData(dataPath, function (regiones) {
      const NewListregiones = regiones.filter((g) => g.id !== id);
      jsonFileHandler.WriteData(dataPath, NewListregiones);
    });
  }
};
