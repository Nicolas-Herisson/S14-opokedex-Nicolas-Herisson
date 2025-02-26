import * as commons from "./commons.js"

export async function init()
{
    await handlePokemonButton();
    await handleTypesButton();
    await handleTeamButton();
};

async function handlePokemonButton()
{
    const pokemonButton = document.querySelector('.navbar-button-pokemon');
    pokemonButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.setMainTitle("Tous les pokemons :");

        await commons.fetchAndInsert('pokemons');
    });
};

async function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', async (e) => {

        //e.stopImmediatePropagation();
        commons.purgeMainContainer();
        commons.setMainTitle("Tous les types de pokemon :");

        await commons.fetchAndInsert('types');
        console.log("types");
    });
};

async function handleTeamButton()
{
    const teamButton = document.querySelector('.navbar-button-teams');

    teamButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.setMainTitle("Tous les equipes :");
        //e.stopImmediatePropagation();

       await commons.fetchAndInsert('teams');
    });
};