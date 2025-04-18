import { apiBaseUrl } from "./config.js";
import * as commons from "./commons.js"
import { deletePokemonFromTeam } from "./team.js";


export function insertPokemonInHTML(pokemonData, teamId, teamPage) {
    const pokemonTemplate = document.querySelector('#pokemon-template');

    const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
  
    clonedPokemonTemplate.querySelector('.pokemon-container').dataset.id = pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-number').textContent = "Numero : "+pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-name').textContent = pokemonData.name;
    clonedPokemonTemplate.querySelector('.pokemon-description').textContent = pokemonData.description;
    clonedPokemonTemplate.querySelector('.pokemon-evolution').textContent = "Evolution : "+pokemonData.evolution;
    clonedPokemonTemplate.querySelector('.pokemon-size').textContent = "Taille : "+pokemonData.size + "m";
    clonedPokemonTemplate.querySelector('.pokemon-weight').textContent = "Poids : "+pokemonData.weight + "kg";
    clonedPokemonTemplate.querySelector('.pokemon-type').textContent = "Type : "+pokemonData.types.map(type => type.name).join(', ');
    clonedPokemonTemplate.querySelector('.pokemon-image').src = pokemonData.image;

    //              add button to add pokemon to team
    if (teamId)
    {
        if (teamPage)
        {
            clonedPokemonTemplate.querySelector(`.pokemon-add-toTeam`).classList.remove('is-hidden');
            clonedPokemonTemplate.querySelector(`.pokemon-add-toTeam`).addEventListener('click', (e) => {addPokemonToTeam(e, teamId, pokemonData.id)});
        }
        else
        {
            clonedPokemonTemplate.querySelector(`.pokemon-delete-toTeam`).classList.remove('is-hidden');
        clonedPokemonTemplate.querySelector(`.pokemon-delete-toTeam`).addEventListener('click', (e) => {deletePokemonFromTeam(e, pokemonData.id)});
        }
    }

    clonedPokemonTemplate.querySelector(`.pokemon-container`).addEventListener('click', (e) => {
            displayOnePokemon(pokemonData);
        }
    );

    commons.mainContainer.append(clonedPokemonTemplate);
  };

  export async function displayOnePokemon(pokemon, teamId) {

    commons.purgeMainContainer();
    //          hide team buttons if no team
    if (!teamId)
    {
        commons.displayActionsOnElements('hide', ['.add-team', '.add-pokemon-toTeam', '.delete-team', '.update-team']);
        commons.setMainTitle(pokemon.name);
    }

    try {


        const response = await fetch(`${apiBaseUrl}/pokemons/${pokemon.id}`);

        if (!response.ok) 
            throw new Error('Erreur lors de la récupération du pokemon');
        

        const requestedPokemon = await response.json();

        insertPokemonInHTML(requestedPokemon, teamId);


    } catch (error) {
        alert(error);
    }
};

async function addPokemonToTeam(event, teamId, pokemonId) {
    event.stopImmediatePropagation();
    event.preventDefault();


    try {
        const errorMessage = await teamChecker(pokemonId, teamId);

        if (errorMessage && errorMessage !== "")  
            throw new Error(errorMessage);
        


        const response = await fetch(`${apiBaseUrl}/teams/${teamId}/pokemons/${pokemonId}`, {
            method: 'PUT',
        });

        if (!response.ok) 
            throw new Error('Erreur lors de l\'ajout du pokemon à l\'equipe');
        

        const team = await response.json();


    } catch (error) {
        alert(error);
    }
  };



async function teamChecker(pokemonId, teamId) 
{
    let errorMessage = '';
    try {
        let response = await fetch(`${apiBaseUrl}/teams/${teamId}`);

        if (!response.ok) 
            errorMessage = 'Erreur lors de la récupération de l\'équipe';

        const selectedTeam = await response.json();

        if (selectedTeam.pokemons.length >= 6) 
            errorMessage = 'Cette équipe est déjà pleine';

        selectedTeam.pokemons.forEach(pokemon => {
            if (pokemon.id === pokemonId) 
                errorMessage = 'Ce pokemon est deja dans l\'equipe';
        });

        return errorMessage;

    } catch (error) {
        alert(error)
    }
  };