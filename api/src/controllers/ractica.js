stats= [
    {
        base_stat: 45,
        effort: 0,
        stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
        }
    },
    {
        base_stat: 49,
        effort: 0,
        stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
    }
    },
    {
        base_stat: 49,
        effort: 0,
        stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
        }
    },
    {
        base_stat: 65,
        effort: 1,
        stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
        }
    },
    {
        base_stat: 65,
        effort: 0,
        stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
        }
    },
    {
        base_stat: 45,
        effort: 0,
        stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/"
        }
        }
]

let vida = stats.find((e) =>{
    if(e.stat.name=="hp") return e;
})
vida = vida.base_stat;
let ataque = stats.find((e) =>{
    if(e.stat.name=="attack") return e;
})
ataque = ataque.base_stat;
let defensa = stats.find((e) =>{
    if(e.stat.name=="defense") return e;
})
defensa = defensa.base_stat;
let velocidad = stats.find((e) =>{
    if(e.stat.name=="speed") return e;
})
velocidad = velocidad.base_stat

//console.log(vida, ataque, defensa, velocidad);

const ga = stats.find((ele)=>{if(ele.stat.name==="speed")return ele}); console.log(ga);