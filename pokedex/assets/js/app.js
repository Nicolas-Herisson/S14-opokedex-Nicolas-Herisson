import * as commons from './commons.js';
import * as nav from './nav.js';

document.addEventListener('DOMContentLoaded', init());

async function init()
{
    try {

        await commons.fetchAndInsert('pokemons');
        
        commons.setMainTitle("Tous les pokemons :");
        commons.pokemonPageSearchBarSubmitButton();
        nav.init();

    } catch (error) {
        alert(error);
    }
};