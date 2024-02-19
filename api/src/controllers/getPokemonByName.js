const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon/";
const {Pokemons} = require("../db");
const {Type} = require("../db");

const getPokemonsByName = async (req, res) => {
    try {
        let name = req.query.name;
        name = name.toLowerCase();
        let dat;
        let db_pok = [];
        try {
            const {data} = await axios.get(`${URL}/${name}`);
            dat = data;
            let types = [];
            dat.types.forEach(e => {
                types.push(e.type.name);
            });
            const vida = dat.stats.find((e) =>{
                if(e.stat.name=="hp") return(e);
            });
            const ataque = dat.stats.find((e) =>{
                if(e.stat.name=="attack") return(e);
            });
            const defensa = dat.stats.find((e) =>{
                if(e.stat.name=="defense") return(e);
            });
            const velocidad = dat.stats.find((e) =>{
                if(e.stat.name=="speed") return(e);
            });
            db_pok.push({
                id: dat.id,
                nombre: dat.name,
                imagen: dat.sprites.front_default,
                vida: vida.base_stat,
                ataque: ataque.base_stat,
                defensa: defensa.base_stat,
                velocidad: velocidad.base_stat,
                altura: dat.height,
                peso: dat.weight,
                tipos: types
            });
           
        } catch (error) {}

        var ala = await Pokemons.findAll({where:{nombre:name}, include: Type});
        var typess;
        
        for (let i = 0; i < ala.length; i++) {
            typess = [];
            ala[i].Types.forEach(e => {
                typess.push(e.nombre);
            });
            ala[i].Types = typess;
        }
        for (let i = 0; i < ala.length; i++) {
            db_pok.push(ala[i]);
        }
        if(db_pok.length === 0) return res.status(500).json('Ah ingresado un pokemon inexistente');
        return res.status(200).send(db_pok);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getPokemonsByName;