const axios = require("axios");
const { Pokemons } = require("../db");
const { Type } = require("../db");

const postPokemons = async (req, res) =>{
    try {
        const { nombre, imagen, vida, ataque, defensa, velocidad, altura, peso, types } = req.body;
        // if(nombre && imagen && vida && ataque && defensa && velocidad && altura && peso && types){
            const newPokemons = await Pokemons.create({nombre, imagen, vida, ataque, defensa, velocidad, altura, peso});
            let type = await Type.findAll({where:{nombre:types}});
            let typeId = [];
            type.forEach(e => {
                typeId.push(e.id);
            });
            await newPokemons.addTypes(typeId, types);

            return res.json(newPokemons);
        // }
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postPokemons;