import * as pokemonManager from './pokemon.js';
import * as nav from './nav.js';

document.addEventListener('DOMContentLoaded', init());

async function init()
{
    try {
        console.log("init");
        await pokemonManager.fetchAndInsertPokemons();
        nav.init();
    } catch (error) {
        alert(error);
    }
};