import { fetchAndInsertPokemons } from "./pokemon.js";

export async function init()
{
    await handlePokemonButton();
    handleTypesButton();
};

async function handlePokemonButton()
{
    const pokemonButton = document.querySelector('.navbar-button-pokemon');
    pokemonButton.addEventListener('click', async (e) => {
        console.log("pokemon");
        await fetchAndInsertPokemons();
    });
    console.log("handlePokemonButton");
};

function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', (e) => {
        console.log("types");
    });
}