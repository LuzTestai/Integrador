const sequelize = require("./db");
const S = require("sequelize");

class Categoria extends S.Model {}

Categoria.init({ nombre: S.STRING }, { sequelize, modelName: "Categoria" });

module.exports = Categoria;
