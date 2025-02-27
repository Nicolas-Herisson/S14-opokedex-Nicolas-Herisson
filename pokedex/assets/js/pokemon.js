import { apiBaseUrl } from "./config.js";
import * as commons from "./commons.js"


export function insertPokemonInHTML(pokemonData, teamId) {
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
        clonedPokemonTemplate.querySelector(`.pokemon-add-toTeam`).classList.remove('is-hidden');
        clonedPokemonTemplate.querySelector(`.pokemon-add-toTeam`).addEventListener('click', (e) => {addPokemonToTeam(e, teamData.id, pokemonData.id)});
    }

    clonedPokemonTemplate.querySelector(`.pokemon-container`).addEventListener('click', (e) => {
            displayOnePokemon(e, pokemonData.name);
        }
    );

    commons.mainContainer.append(clonedPokemonTemplate);
  };

  export async function displayOnePokemon(event, pokemonName) {
    event.stopImmediatePropagation();
    event.preventDefault();
    
    commons.purgeMainContainer();
    commons.setMainTitle(pokemonName);
    commons.addButton.classList.add('is-hidden');
    commons.addButton.textContent = "";

    try {
        const id = event.currentTarget.closest('.pokemon-container').dataset.id;


        const response = await fetch(`${apiBaseUrl}/pokemons/${id}`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du pokemon');
        };

        const pokemon = await response.json();


        insertPokemonInHTML(pokemon);

    } catch (error) {
        alert(error);
    }
  };

  export async function addPokemonToTeam(event, teamId, pokemonId) {
    event.stopImmediatePropagation();
    event.preventDefault();

    try {
        const errorMessage = await teamChecker(pokemonId, teamId);

        if (errorMessage)
        {
            throw new Error(errorMessage);
        }

        response = await fetch(`${apiBaseUrl}/teams/${teamId}/pokemons/${pokemonId}`, {
            method: 'PUT',
        });

        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout du pokemon à l\'equipe');
        };

        const team = await response.json();

        console.log(team);
 

    } catch (error) {
        alert(error);
    }
  };

async function teamChecker(pokemonId, teamId) 
{
    try {
        let response = await fetch(`${apiBaseUrl}/teams/${teamId}`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de l\'équipe');
        };

        const selectedTeam = await response.json();

        if (selectedTeam.pokemons.length >= 6) {
            throw new Error('Cette équipe est déjà pleine');
        };

        selectedTeam.pokemons.forEach(pokemon => {
            if (pokemon.id === pokemonId) {
                throw new Error('Ce pokemon est deja dans l\'equipe');
            }
        });

    } catch (error) {
        return error;
    }
  };