const sequelize = require("./db");
const S = require("sequelize");

const Categoria = require("./categoria");

class Producto extends S.Model {}

Producto.init(
  {
    nombre: {
      type: S.STRING
    },
    precio: {
      type: S.INTEGER
    },

    descripcion: {
      type: S.TEXT
    },

    disponible: {
      type: S.BOOLEAN,
      defaultValue: true
    },
    truncarDescripcion: {
      type: S.VIRTUAL,
      get: function() {
        return this.descripcion
          ? `${this.getDataValue("descripcion").slice(0, 20)}...`
          : "";
      }
    }
  },
  { sequelize, modelName: "Producto" }
);

Producto.addHook("beforeUpdate", function(producto) {
  if (!producto.disponible) this.nombre += " NO DISPONIBLE";
});

Producto.belongsTo(Categoria, { as: "categoria" });

module.exports = Producto;
