const { DataTypes } = require('sequelize');


// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID, //genera un numero random unico e irrepetible
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish_summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    health_score: {
      type: DataTypes.INTEGER,
      },
    instructions:{
      type: DataTypes.STRING,
    },
     createdInDb: {  //esta propiedad está unicamente en aquellas recetas que fueron creadas en la db
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    },    
  }, { timestamps: false });
};
