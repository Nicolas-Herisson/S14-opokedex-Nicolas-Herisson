import { apiBaseUrl } from "./config.js";

export async function fetchAndInsertPokemons(){
    try {
        const response = await fetch(`${apiBaseUrl}/pokemons`);
        const body = document.querySelector('#pokemon-list');

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des pokemons');
        };

        const pokemons = await response.json();

        for (const pokemon of pokemons)
        {
            insertPokemonInHTML(body, pokemon);
        }

    } catch (error) {
        alert(error);
    }
};

export function insertPokemonInHTML(taskHtmlElement, pokemonData) {

    const pokemonTemplate = document.querySelector('#pokemon-template');
    const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
  

    clonedPokemonTemplate.querySelector('#pokemon-number').textContent = pokemonData.number;
    clonedPokemonTemplate.querySelector('#pokemon-name').textContent = pokemonData.name;
    clonedPokemonTemplate.querySelector('#pokemon-description').textContent = pokemonData.description;
    clonedPokemonTemplate.querySelector('#pokemon-evolution').textContent = pokemonData.evolution;
    clonedPokemonTemplate.querySelector('#pokemon-size').textContent = pokemonData.size + "m";
    clonedPokemonTemplate.querySelector('#pokemon-weight').textContent = pokemonData.weight + "kg";
    clonedPokemonTemplate.querySelector('#pokemon-type').textContent = pokemonData.type;
    clonedPokemonTemplate.querySelector('#pokemon-image').src = pokemonData.image;
    clonedPokemonTemplate.querySelector('.is-invisible').classList.remove("is-invisible");

    taskHtmlElement.append(clonedPokemonTemplate);
  };