import { apiBaseUrl } from "./config.js";
import { insertTypeInHTML } from './type.js';
import { insertPokemonInHTML } from './pokemon.js';
import { insertTeamsInHTML } from "./team.js";

export const mainContainer = document.querySelector('#main-container');
export const teamContainer = document.querySelector('#team-container');
export const formContainer = document.querySelector('.form-container');
export const teamButtonContainer = document.querySelector('.team-button-container');
export const pokemonPageSearchBar = document.querySelector('.pokemon-page.searchBar');
export const addPokemonToTeamSearchBar = document.querySelector('.addPokemon-to-team.searchBar');


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
                    insertTeamsInHTML(value);
                    document.querySelector('.add-team').classList.remove('is-hidden');
                break;
                default:
                    break;
            }
        }

        if (container.length === 0)
        insertTeamsInHTML('');

    } catch (error) {
        alert(error);
    }
};

export function displayActionsOnElements(action,elements) 
{

    switch (action) {
        case 'toggle':
            for (const element of elements)
            {
                if (document.querySelector(`${element}`))
                    document.querySelector(`${element}`).classList.toggle('is-hidden');
            }
        break;

        case 'hide':
            for (const element of elements)
            {
                if (document.querySelector(`${element}`))
                    document.querySelector(`${element}`).classList.add('is-hidden');
            }
        break;

        case 'display':
            for (const element of elements)
            {
                if (document.querySelector(`${element}`))
                    document.querySelector(`${element}`).classList.remove('is-hidden');
            }
        break;
        default:
            break;
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


export function pokemonPageSearchBarSubmitButton()
{
    const button = pokemonPageSearchBar.querySelector('button');


    button.addEventListener('click', async (e) => {
        e.preventDefault(); 

        const searchBarInput = pokemonPageSearchBar.querySelector('.input').value;
        const pokemons = await getAllPokemons();

        if (searchBarInput === '')
        {
            purgeMainContainer(); 
            pokemons.forEach(pokemon => {
                insertPokemonInHTML(pokemon);
            })
        }
        else
        {
            purgeMainContainer();
            pokemons.forEach(pokemon => {
                if (pokemon.name.toLowerCase().includes(sanitizer(searchBarInput.toLowerCase())))
                {
                    console.log("Found")
                    insertPokemonInHTML(pokemon);
                }
            })
        }
    });
};

export function addPokemonToTeamSearchBarSubmitButton()
{
    const button = addPokemonToTeamSearchBar.querySelector('button');

    button.addEventListener('click', async (e) => {
        e.preventDefault(); 

        const searchBarInput = addPokemonToTeamSearchBar.querySelector('.input').value;
        const pokemons = await getAllPokemons();

        if (searchBarInput === '')
        {
            purgeMainContainer(); 
            pokemons.forEach(pokemon => {
                insertPokemonInHTML(pokemon);
            })
        }
        else
        {
            purgeMainContainer();
            pokemons.forEach(pokemon => {
                if (pokemon.name.toLowerCase().includes(sanitizer(searchBarInput.toLowerCase())))
                {
                    console.log("Found")
                    insertPokemonInHTML(pokemon);
                }
            })
        }
    });
};