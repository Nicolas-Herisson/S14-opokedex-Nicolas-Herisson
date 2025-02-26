import { apiBaseUrl } from "./config.js";
import { insertPokemonInHTML } from "./pokemon.js";
import * as commons from "./commons";





export function insertTypeInHTML(typeData) {

    const typeTemplate = document.querySelector('#type-template');

    const clonedTypeTemplate = document.importNode(typeTemplate.content, true);

    clonedTypeTemplate.querySelector('.type-container').classList.add('cell');
    clonedTypeTemplate.querySelector('.type-container').dataset.id = typeData.id;
    clonedTypeTemplate.querySelector('.type-name').textContent = typeData.name;

    
    clonedTypeTemplate.querySelector(`.type-container`).addEventListener('click', (e) => {
            handleTypeLinkDisplay(e);
        }
    );
    commons.mainContainer.append(clonedTypeTemplate);
  };

  export async function handleTypeLinkDisplay(event) {

    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();

    try {
        const id = event.currentTarget.closest('.type-container').dataset.id;


        const response = await fetch(`${apiBaseUrl}/Types/${id}/pokemons`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des pokemons par type');
        };

        const pokemons = await response.json();


        for (const pokemon of pokemons)
        {
            insertPokemonInHTML(pokemon);
        };

    } catch (error) {
        alert(error);
    }
  };