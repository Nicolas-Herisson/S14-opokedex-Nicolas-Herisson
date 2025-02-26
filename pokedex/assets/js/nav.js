import * as commons from "./commons.js"

export async function init()
{
    await handlePokemonButton();
    handleTypesButton();
};

async function handlePokemonButton()
{
    const pokemonButton = document.querySelector('.navbar-button-pokemon');
    pokemonButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        await commons.fetchAndInsert('pokemons');
    });
};

async function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', async (e) => {
        commons.purgeMainContainer();
        await commons.fetchAndInsert('types');
        console.log("types");
    });
};

async function handleTeamButton()
{
    const teamButton = document.querySelector('.navbar-button-types');
    commons.purgeMainContainer();
    
    teamButton.addEventListener('click', async (e) => {

        await commons.fetchAndInsert('teams');
        console.log("types");
    });
};