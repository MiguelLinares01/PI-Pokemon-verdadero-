const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Pokemons', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey:true
        },
        nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        imagen:{
            type:DataTypes.STRING,
            allowNull:false
        },
        vida:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        ataque:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        defensa:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        velocidad:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        altura:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        peso:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
    }, { timestamps: false });
};