import { apiBaseUrl } from "./config.js";
import { toggleTypeListDisplay } from "./type.js";

export function togglePokemonListDisplay() {
    const pokemonList = document.querySelector('#pokemon-list');

    if (pokemonList)
    pokemonList.classList.toggle('is-hidden');
};

export function purgePokemonList()
{
    const pokemonList = document.querySelector('#pokemon-list');
    pokemonList.textContent = '';
};

export function hidePokemonList()
{
    const pokemonList = document.querySelector('#pokemon-list');
    pokemonList.classList.add('is-hidden');
};

export function displayPokemonList()
{
    const pokemonList = document.querySelector('#pokemon-list');
    pokemonList.classList.remove('is-hidden');
};

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
    const pokemonListHtmlElement = document.querySelector('#pokemon-list');
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

    pokemonListHtmlElement.append(clonedPokemonTemplate);
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