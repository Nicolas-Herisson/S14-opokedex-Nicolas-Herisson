import { apiBaseUrl } from "./config.js";
import * as commons from "./commons.js"


export function insertPokemonInHTML(pokemonData) {
    const minContainer = document.querySelector('#main-container');
    const pokemonTemplate = document.querySelector('#pokemon-template');

    const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
  
    clonedPokemonTemplate.querySelector('.pokemon-container').classList.add('cell');
    clonedPokemonTemplate.querySelector('.pokemon-container').dataset.id = pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-number').textContent = "Numero : "+pokemonData.id;
    clonedPokemonTemplate.querySelector('.pokemon-name').textContent = pokemonData.name;
    clonedPokemonTemplate.querySelector('.pokemon-description').textContent = pokemonData.description;
    clonedPokemonTemplate.querySelector('.pokemon-evolution').textContent = "Evolution : "+pokemonData.evolution;
    clonedPokemonTemplate.querySelector('.pokemon-size').textContent = "Taille : "+pokemonData.size + "m";
    clonedPokemonTemplate.querySelector('.pokemon-weight').textContent = "Poids : "+pokemonData.weight + "kg";
    clonedPokemonTemplate.querySelector('.pokemon-type').textContent = pokemonData.type;
    clonedPokemonTemplate.querySelector('.pokemon-image').src = pokemonData.image;

    
    clonedPokemonTemplate.querySelector(`.pokemon-container`).addEventListener('click', (e) => {
            handlePokemonLinkDisplay(e);
        }
    );

    minContainer.append(clonedPokemonTemplate);
  };

  export async function handlePokemonLinkDisplay(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();

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

//   export async function handlePokemonLinkClick(event) {
//     //event.preventDefault();
//     console.log("click");
//    handlePokemonLinkDisplay(event);
// };