const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";
const {Type} = require("../db");

const getTypes = async (req, res)=>{
    try {
        const {data} = await axios.get(URL);
        let types = [];
        data.results.forEach(el => {
            types.push(el.name);
        });
        
        for (let i = 0; i < types.length; i++) {
            await Type.findOrCreate( { where: {nombre:types[i]} } );
        }

        let types_array = await Type.findAll();
        let db_types = [];
        types_array.forEach(ele => {
            db_types.push(ele.nombre);
        });

        return res.status(200).json(db_types);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getTypes;