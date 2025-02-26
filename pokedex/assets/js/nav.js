import * as commons from "./commons.js"
import { pokemonSelectionList } from "./team.js";

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
        commons.handleDisplay('hide', '.','add-button');

        commons.setMainTitle("Tous les pokemons :");

        await commons.fetchAndInsert('pokemons');
    });
};

async function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.handleDisplay('hide', '.','add-button');
        commons.setMainTitle("Tous les types de pokemon :");

        await commons.fetchAndInsert('types');
    });
};

async function handleTeamButton()
{
    const teamButton = document.querySelector('.navbar-button-teams');

    teamButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.setMainTitle("Tous les equipes :");
        commons.addButton.removeEventListener('click', pokemonSelectionList);

        await commons.fetchAndInsert('teams');
    });
};