import { displayPokemonList, fetchAndInsertPokemons, hidePokemonList, purgePokemonList, togglePokemonListDisplay } from "./pokemon.js";
import { displayTypeList, fetchAndInsertTypes, hideTypeList, purgeTypeList, toggleTypeListDisplay } from "./type.js";

export async function init()
{
    await handlePokemonButton();
    handleTypesButton();
};

async function handlePokemonButton()
{
    const pokemonButton = document.querySelector('.navbar-button-pokemon');
    pokemonButton.addEventListener('click', async (e) => {
        purgePokemonList();

        hideTypeList();
        displayPokemonList();
        await fetchAndInsertPokemons();
    });
    console.log("handlePokemonButton");
};

async function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', async (e) => {
        //From types/:id/pokemons to /types avoid duplicates
        purgeTypeList();

        hidePokemonList();
        displayTypeList();
        await fetchAndInsertTypes();
        console.log("types");
    });
}