import { apiBaseUrl } from "./config.js";
import { insertPokemonInHTML, togglePokemonListDisplay } from "./pokemon.js";

export async function fetchAndInsertTypes(){
    try {
        const response = await fetch(`${apiBaseUrl}/types`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des types');
        };

        const types = await response.json();

        for (const type of types)
        {
            insertTypeInHTML(type);
        }

    } catch (error) {
        alert(error);
    }
};


export function toggleTypeListDisplay() {
    const typeList = document.querySelector('#type-list');

    if (typeList)
    typeList.classList.toggle('is-hidden');
};

export function hideTypeList()
{
    const typeList = document.querySelector('#type-list');
    typeList.classList.add('is-hidden');
};

export function displayTypeList()
{
    const typeList = document.querySelector('#type-list');
    typeList.classList.remove('is-hidden');
};

export function purgeTypeList()
{
    const typeList = document.querySelector('#type-list');
    typeList.textContent = '';
};

export function insertTypeInHTML(typeData) {


    const typeListHtmlElement = document.querySelector('#type-list');
    const typeTemplate = document.querySelector('#type-template');

    const clonedTypeTemplate = document.importNode(typeTemplate.content, true);

    clonedTypeTemplate.querySelector('.type-container').classList.add('cell');
    clonedTypeTemplate.querySelector('.type-container').dataset.id = typeData.id;
    clonedTypeTemplate.querySelector('.type-name').textContent = typeData.name;

    
    clonedTypeTemplate.querySelector(`.type-container`).addEventListener('click', (e) => {
            handleTypeLinkDisplay(e);
            console.log("click");
        }
    );
console.log("after append");
    typeListHtmlElement.append(clonedTypeTemplate);
  };

  export async function handleTypeLinkDisplay(event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    togglePokemonListDisplay();
    toggleTypeListDisplay();

    try {
        const id = event.currentTarget.closest('.type-container').dataset.id;
        // togglePokemonListDisplay();
        // toggleTypeListDisplay();

        const typeHtmlList = document.querySelector('#pokemon-list');

        const response = await fetch(`${apiBaseUrl}/Types/${id}/pokemons`);

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des pokemons par type');
        };

        const type = await response.json();

        typeHtmlList.textContent = '';
console.log(type);
        for (const element of type)
        {
            insertPokemonInHTML(element);
        };
        //insertTypeInHTML(type);

    } catch (error) {
        alert(error);
    }
  };

//   export async function handlePokemonLinkClick(event) {
//     //event.preventDefault();
//     console.log("click");
//    handlePokemonLinkDisplay(event);
// };