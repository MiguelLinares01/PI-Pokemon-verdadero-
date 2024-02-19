const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async (req, res) => {
    try{
        let allP = [];
        let URLBeyond = URL;
        while(URLBeyond !== "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20"){
            const {data} = await axios.get(URLBeyond);
            allP = [...allP, ...data.results];
            URLBeyond = data.next;
        }

        let PDetails = await Promise.all(allP.map(async (poke) => {
            const rispons = await axios.get(poke.url);
            return rispons.data;
        }));
        
        let types;

        let vida;
        let ataque;
        let defensa;
        let velocidad;
        
        let pokeInfo = PDetails.map((pok)=>{

            types = pok.types.map((ga)=>ga.type.name);
            
            vida = pok.stats.find((e) =>{
                if(e.stat.name=="hp") return(e);
            }),
            ataque = pok.stats.find((e) =>{
                if(e.stat.name=="attack") return(e);
            }),
            defensa = pok.stats.find((e) =>{
                if(e.stat.name=="defense") return(e);
            }),
            velocidad = pok.stats.find((e) =>{
                if(e.stat.name=="speed") return(e);
            })

            return {
                id: pok.id,
                nombre: pok.name,
                imagen: pok.sprites.front_default,
                vida: vida.base_stat,
                ataque: ataque.base_stat,
                defensa: defensa.base_stat,
                velocidad: velocidad.base_stat,
                altura: pok.height,
                peso: pok.weight,
                tipo: types
            }
        });
        return res.status(200).json(pokeInfo);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = getPokemons;