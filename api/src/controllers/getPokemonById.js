const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";
const {Pokemons} = require("../db");
const {Type} = require("../db");

const getPokemonById = async (req, res) => {
    try {
        const pokeId = req.params.id;
        if(pokeId < 1 || pokeId > 1025){
            return res.status(404).send('Ah ingresado un ID por encima o debajo del límite');
        }
        else{
            let pokeInfo = [];
            const { data } = await axios.get(`${URL}/${pokeId}`);
            fetch(`${URL}/${pokeId}`)
                .then(res => res.data)
                .then(data => data)
            let types = [];
            data.types.forEach(e => {
                types.push(e.type.name);
            });
            const vida = data.stats.find((e) =>{
                if(e.stat.name=="hp") return(e);
            });
            const ataque = data.stats.find((e) =>{
                if(e.stat.name=="attack") return(e);
            });
            const defensa = data.stats.find((e) =>{
                if(e.stat.name=="defense") return(e);
            });
            const velocidad = data.stats.find((e) =>{
                if(e.stat.name=="speed") return(e);
            });
            pokeInfo.push({
                id: data.id,
                nombre: data.name,
                imagen: data.sprites.front_default,
                vida: vida.base_stat,
                ataque: ataque.base_stat,
                defensa: defensa.base_stat,
                velocidad: velocidad.base_stat,
                altura: data.height,
                peso: data.weight,
                tipos: types
            });
            let olo = []; 
            olo.push(await Pokemons.findOne({where:{id:pokeId}, include: Type}));
            if(olo[0] !== null) {
                olo.map((ele)=>{
                    pokeInfo.push(ele);
                })
            };

            return res.status(200).json(pokeInfo);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getPokemonById;