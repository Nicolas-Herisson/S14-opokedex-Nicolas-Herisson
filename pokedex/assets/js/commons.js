import { apiBaseUrl } from "./config.js";
import { insertTypeInHTML } from './type.js';
import { insertPokemonInHTML } from './pokemon.js';
import { insertTeamInHTML } from "./team.js";

export const mainContainer = document.querySelector('#main-container');
export const teamContainer = document.querySelector('#team-container');
export const formContainer = document.querySelector('.form-container');
export const addButton = document.querySelector('.add-button');


export async function getAllPokemons()
{
    const response = await fetch(`${apiBaseUrl}/pokemons`);

    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des pokemons');
    };

    return await response.json();
}

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
                    insertTeamInHTML(value);
                break;
                default:
                    break;
            }
        }

        if (container.length === 0)
        insertTeamInHTML('');

    } catch (error) {
        alert(error);
    }
};

export function handleDisplay(action, elementType, element) 
{
    const container = document.querySelector(`${elementType}${element}`);

    if (container)
    {
        switch (action) {
            case 'toggle':
                container.classList.toggle('is-hidden');
            break;

            case 'hide':
                container.classList.add('is-hidden');
            break;

            case 'display':
                container.classList.remove('is-hidden');
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
};

export function setMainTitle(name)
{
    const title = document.querySelector('.main-title').textContent = name;
};


export function sanitizer(value)
{
    let sanitizedValue = value.replaceAll('<', '');
    sanitizedValue = sanitizedValue.replaceAll('>', '');
    sanitizedValue = sanitizedValue.replaceAll("\"", '');
    sanitizedValue = sanitizedValue.replaceAll('\'', '');
    return sanitizedValue;
};