import * as pokemonManager from './pokemon.js';

document.addEventListener('DOMContentLoaded', init());

async function init()
{
    try {
        console.log("init");
        await pokemonManager.fetchAndInsertPokemons();
    } catch (error) {
        alert(error);
    }
};