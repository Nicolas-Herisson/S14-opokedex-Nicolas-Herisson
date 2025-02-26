import { apiBaseUrl } from "./config.js";
import { insertTypeInHTML } from './type.js';
import { insertPokemonInHTML } from './pokemon.js';

export async function fetchAndInsert(element)
{
    try {
        const response = await fetch(`${apiBaseUrl}/${element}`);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des ${element}`);
        };

        const container = await response.json();

        for (const value of container)
        {
            switch (element) {
                case 'types':
                    insertTypeInHTML(value);
                    break;
                case 'pokemons':
                    insertPokemonInHTML(value);
                    break;
                case 'teams':
                    
                break;
                default:
                    break;
            }
        }

    } catch (error) {
        alert(error);
    }
};

export function handleMainContainertDisplay(action) 
{
    const mainContainer = document.querySelector('#main-container');

    if (mainContainer)
    {
        switch (action) {
            case 'toggle':
                mainContainer.className.toggle('is-hidden');
            break;

            case 'hide':
                mainContainer.className.add('is-hidden');
            break;

            case 'diaplay':
                mainContainer.className.remove('is-hidden');
            break;
            default:
                break;
        }
    }
};

export function purgeMainContainer() 
{
    const mainContainer = document.querySelector('#main-container');

    mainContainer.textContent = "";
}