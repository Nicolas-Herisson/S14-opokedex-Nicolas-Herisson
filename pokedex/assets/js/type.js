import { apiBaseUrl } from "./config.js";
import { insertPokemonInHTML } from "./pokemon.js";
import * as commons from "./commons";





export function insertTypeInHTML(typeData) {

    const typeTemplate = document.querySelector('#type-template');

    const clonedTypeTemplate = document.importNode(typeTemplate.content, true);

    //To request the pokemons of the type in the display part
    clonedTypeTemplate.querySelector('.type-container').dataset.id = typeData.id;
    clonedTypeTemplate.querySelector('.type-name').textContent = typeData.name;

    
    clonedTypeTemplate.querySelector(`.type-container`).addEventListener('click', (e) => {
            displayPokemonsOfAType(e, typeData.name);
        }
    );
    commons.mainContainer.append(clonedTypeTemplate);
  };

  export async function displayPokemonsOfAType(event, typeName) {

    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle(`Pokemon(s) de type ${typeName}`);

    try {
        const id = event.currentTarget.closest('.type-container').dataset.id;


        const response = await fetch(`${apiBaseUrl}/Types/${id}/pokemons`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des pokemons par type');
        };

        const pokemonsByType = await response.json();

        for (const pokemonByType of pokemonsByType)
        {
            //  because pokemonByType return pokemon without id
            const allPokemons = await commons.getAllPokemons();
            allPokemons.map(pokemon => {
                if (pokemon.id === pokemonByType.id) {
                    insertPokemonInHTML(pokemon);
                }
            });
        };

    } catch (error) {
        alert(error);
    }
  };