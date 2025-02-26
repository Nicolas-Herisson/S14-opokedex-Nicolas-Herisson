import { apiBaseUrl } from "./config.js";
import { insertTypeInHTML } from './type.js';
import { insertPokemonInHTML } from './pokemon.js';
import { insertTeamsInHtml } from "./team.js";

export const mainContainer = document.querySelector('#main-container');

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
                    insertTeamsInHtml(value);
                break;
                default:
                    break;
            }
        }

    } catch (error) {
        alert(error);
    }
};

export function handleDisplay(action, element, elementType) 
{
    const container = document.querySelector(`${elementType}${element}`);

    if (container)
    {
        switch (action) {
            case 'toggle':
                container.className.toggle('is-hidden');
            break;

            case 'hide':
                container.className.add('is-hidden');
            break;

            case 'diaplay':
                container.className.remove('is-hidden');
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