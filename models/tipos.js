const jsonFileHandler = require("../utils/jsonFileHandler");
const path = require("path");
const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "tipos.json"
);

module.exports = class region {
  constructor(id, tipo) {
    this.id = id;
    this.tipo = tipo;
  }
  save() {
    jsonFileHandler.ReadAllData(dataPath, (tipo) => {
      if (this.id) {
        const indextipo = tipo.findIndex((r) => r.id === this.id);
        if (indextipo) {
          tipo[indextipo] = this;
          jsonFileHandler.WriteData(dataPath, tipo);
        }
      } else {
        this.id = Math.random().toString();
        tipo.push(this);
        jsonFileHandler.WriteData(dataPath, tipo);
      }
    });
  }
  static getAll(cb) {
    jsonFileHandler.ReadAllData(dataPath, cb);
  }
  //   static getByID(id, cb) {
  //     jsonFileHandler.ReadAllData(dataPath, function (tipo) {
  //       const region = tipo.find((r) => r.id === id);
  //       cb(region);
  //     });
  //   }
  //   static delete(id) {
  //     jsonFileHandler.ReadAllData(dataPath, function (tipo) {
  //       const NewListtipo = tipo.filter((g) => g.id !== id);
  //       jsonFileHandler.WriteData(dataPath, NewListtipo);
  //     });
  //   }
};
