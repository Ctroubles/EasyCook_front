const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    resumenDelPlato:{
      type:DataTypes.STRING(250),
      allowNull: false,
    },
    healthScore:{
      type: DataTypes.INTEGER,
    },
    stepByStep: {
      type: DataTypes.STRING(600),
    },
    imgUrl: {
      type:DataTypes.STRING,
    }
    
  },
  {
    timestamps: false
  }
  );
};
