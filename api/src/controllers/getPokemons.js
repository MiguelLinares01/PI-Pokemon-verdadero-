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
            
        let vida;
        let ataque;
        let defensa;
        let velocidad;

        PDetails.map((pokeito)=>{
            vida = pokeito.stats.find((e) =>{
                if(e.stat.name=="hp") return(e);
            }),
            ataque = pokeito.stats.find((e) =>{
                if(e.stat.name=="attack") return(e);
            }),
            defensa = pokeito.stats.find((e) =>{
                if(e.stat.name=="defense") return(e);
            }),
            velocidad = pokeito.stats.find((e) =>{
                if(e.stat.name=="speed") return(e);
            })
        });

        let pokeInfo = PDetails.map((pok)=>{
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
            }
        });
        return res.status(200).json(pokeInfo);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = getPokemons;