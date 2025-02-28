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
        commons.displayActionsOnElements('display', ['.pokemon-page.searchBar']);
        commons.displayActionsOnElements('hide',['.addPokemon-to-team.searchBar','.add-team', '.add-pokemon-toTeam', '.delete-team', '.update-team']);

        commons.setMainTitle("Tous les pokemons :");

        await commons.fetchAndInsert('pokemons');
    });
};

async function handleTypesButton()
{
    const typesButton = document.querySelector('.navbar-button-types');
    typesButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.displayActionsOnElements('hide',['.pokemon-page.searchBar','.addPokemon-to-team.searchBar','.add-team', '.add-pokemon-toTeam', '.delete-team', '.update-team']);
        commons.setMainTitle("Tous les types de pokemon :");

        await commons.fetchAndInsert('types');
    });
};

async function handleTeamButton()
{
    const teamButton = document.querySelector('.navbar-button-teams');

    teamButton.addEventListener('click', async (e) => {

        commons.purgeMainContainer();
        commons.displayActionsOnElements('hide',['.pokemon-page.searchBar','.addPokemon-to-team.searchBar','.add-team', '.add-pokemon-toTeam', '.delete-team', '.update-team']);
        commons.setMainTitle("Equipes :");

        await commons.fetchAndInsert('teams');
    });
};