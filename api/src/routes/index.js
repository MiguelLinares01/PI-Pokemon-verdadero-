const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getPokemons = require("../controllers/getPokemons.js");
const getTypes = require("../controllers/getTypes.js");
const getPokemonById = require("../controllers/getPokemonById.js");
const postPokemons = require("../controllers/postPokemons.js");
const getPokemonsByName = require("../controllers/getPokemonByName.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getPokemons);
router.get("/pokemons/name?", getPokemonsByName);
router.get("/types", getTypes);
router.get("/pokemon/:id", getPokemonById);
router.post("/pokemons", postPokemons);


module.exports = router;
