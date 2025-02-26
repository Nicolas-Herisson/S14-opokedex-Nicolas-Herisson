import * as commons from './commons.js';
import * as nav from './nav.js';

document.addEventListener('DOMContentLoaded', init());

async function init()
{
    try {
        console.log("init");
        await commons.fetchAndInsert('pokemons');
        nav.init();
    } catch (error) {
        alert(error);
    }
};