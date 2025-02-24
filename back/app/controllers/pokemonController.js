import Pokemon from '../models/pokemonModel.js';

export async function getAllPokemons(req, res) {
    try {
        const pokemons = await Pokemon.findAll();

        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export async function getPokemon(req, res) {
    try {
        const id = req.params.id;
        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            res.status(404).json({ error: "Ce pokemon n'existe pas!" });
        }

        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}