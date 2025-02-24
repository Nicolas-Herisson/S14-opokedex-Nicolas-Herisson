import { apiBaseUrl } from "./config.js";

export async function fetchAndInsertPokemons(){
    try {
        const response = await fetch(`${apiBaseUrl}/pokemons`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des pokemons');
        };

        const pokemons = await response.json();

        for (const pokemon of pokemons)
        {
            insertPokemonInHTML(pokemon);
        }

    } catch (error) {
        alert(error);
    }
};

export function insertPokemonInHTML(pokemonData) {
    const taskHtmlElement = document.querySelector('#pokemon-list');
    const pokemonTemplate = document.querySelector('#pokemon-template');

    const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
  
    clonedPokemonTemplate.querySelector('.pokemon-container').dataset.id = pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-number').textContent = pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-name').textContent = pokemonData.name;
    clonedPokemonTemplate.querySelector('.pokemon-description').textContent = pokemonData.description;
    clonedPokemonTemplate.querySelector('.pokemon-evolution').textContent = pokemonData.evolution;
    clonedPokemonTemplate.querySelector('.pokemon-size').textContent = pokemonData.size + "m";
    clonedPokemonTemplate.querySelector('.pokemon-weight').textContent = pokemonData.weight + "kg";
    clonedPokemonTemplate.querySelector('.pokemon-type').textContent = pokemonData.type;
    clonedPokemonTemplate.querySelector('.pokemon-image').src = pokemonData.image;
    clonedPokemonTemplate.querySelector('.is-invisible').classList.remove("is-invisible");

    
    clonedPokemonTemplate.querySelector(`.pokemon-container`).addEventListener('click', (e) => {
            handlePokemonLinkDisplay(e);
        }
    );

    taskHtmlElement.append(clonedPokemonTemplate);
  };

  export async function handlePokemonLinkDisplay(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    try {
        const id = event.currentTarget.closest('.pokemon-container').dataset.id;


        const pokemonHtmlList = document.querySelector('#pokemon-list');

        const response = await fetch(`${apiBaseUrl}/pokemons/${id}`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du pokemon');
        };

        const pokemon = await response.json();

        pokemonHtmlList.textContent = '';

        insertPokemonInHTML(pokemon);

    } catch (error) {
        alert(error);
    }
  };

//   export async function handlePokemonLinkClick(event) {
//     //event.preventDefault();
//     console.log("click");
//    handlePokemonLinkDisplay(event);
// };