const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Videogame", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    descripcion: { type: DataTypes.STRING, allowNull: false },
    plataformas: { type: DataTypes.STRING, allowNull: false },
    imagen: { type: DataTypes.STRING, allowNull: false },
    lanzamiento: { type: DataTypes.DATE, allowNull: false },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { min: 0, max: 10 },
    },
  });
};
