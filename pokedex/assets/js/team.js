import * as commons from "./commons.js"
import {insertPokemonInHTML, displayOnePokemon} from "./pokemon.js"
import {apiBaseUrl} from "./config.js";

export let currentTeam = null;

export async function insertTeamsInHTML(teamData)
{
    const teamTemplate = document.querySelector('#team-template');

    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);

    //clonedTeamTemplate.querySelector('.delete-team').addEventListener('click',  (e) => {deleteTeam(e, teamData.id)});
    clonedTeamTemplate.querySelector('.delete-team').textContent = "Supprimer l'équipe";
    clonedTeamTemplate.querySelector('.update-team').textContent = "Modifier le nom de l'équipe";
    clonedTeamTemplate.querySelector('.add-pokemon-toTeam').textContent = "Ajouter un Pokémon à l'équipe";
    clonedTeamTemplate.querySelector('.add-team').addEventListener('click',  displayAddTeamForm);
    clonedTeamTemplate.querySelector('.team-name').textContent = teamData.name;
    clonedTeamTemplate.querySelector('.team-position').textContent = teamData.position;

    clonedTeamTemplate.querySelector('.team-button').addEventListener('click',  (e) => {displayPokemonsOfATeam(e, teamData)});

    commons.mainContainer.append(clonedTeamTemplate);

    const addTeamButton = document.querySelector('.add-team');
    const updateTeamButton = document.querySelector('.update-team');
    const deleteTeamButton = document.querySelector('.delete-team');
    const addPokemonToTeamButton = document.querySelector('.add-pokemon-toTeam');
    commons.teamButtonContainer.classList.remove('is-hidden');


    commons.teamButtonContainer.append(addTeamButton, updateTeamButton, deleteTeamButton, addPokemonToTeamButton);

    if (teamData === '')
    {
        commons.displayActionsOnElements('display', ['.add-team']);
        commons.displayActionsOnElements('hide', ['.team-container']);
    }

};

async function displayPokemonsOfATeam(event, teamData)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    currentTeam = teamData;



    try {
     const response = await fetch(`${apiBaseUrl}/teams/${teamData.id}`);

     if (!response.ok) 
         throw new Error("Erreur lors de la récupération de l'équipe");
     

     const team = await response.json();

    setupTeamPage();





    } catch (error) {
        alert(error);
    }
    
};

function setupTeamPage()
{
    commons.purgeMainContainer();
    commons.setMainTitle(`Equipe ${currentTeam.name} :`);

    //          get team buttons  
    const updateButton = document.querySelector('.team.update-team');
    const deleteButton = document.querySelector('.team.delete-team');
    const addPokemonToTeamButton = document.querySelector('.team.add-pokemon-toTeam');

    //          setup listeners
    deleteButton.addEventListener('click', (e) => {deleteTeam(e)});
    addPokemonToTeamButton.addEventListener('click', (e) => {pokemonSelectionList(e)});
    updateButton.addEventListener('click', (e) => {displayUpdateTeamForm(e, currentTeam)});

    commons.teamButtonContainer.append(updateButton, deleteButton, addPokemonToTeamButton);

    //          Display or hide team buttons
    commons.displayActionsOnElements('hide', ['.team.add-team']);
    commons.displayActionsOnElements('display', ['.team.update-team', '.team.delete-team']);
    handleAddPokemonToTeamButton();

    currentTeam.pokemons.forEach((pokemon) => {
        displayOnePokemon(pokemon, currentTeam.id);
    })
};

function handleAddPokemonToTeamButton()
{


    if (currentTeam.pokemons && currentTeam.pokemons.length < 6)
        {
            commons.displayActionsOnElements('display', ['.team.add-pokemon-toTeam']);
            document.querySelector('.team.add-pokemon-toTeam').addEventListener('click', (e) => {pokemonSelectionList(e)});
        }
        else
        {
            commons.displayActionsOnElements('hide', ['.team.add-pokemon-toTeam']);
        }
};

//          CLICK ON TEAM BUTTON
async function displayAddTeamForm(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.displayActionsOnElements('hide', ['.team.add-team']);
    commons.setMainTitle("Ajouter une équipe :");


    //      Display form
    commons.mainContainer.append(commons.formContainer);
    commons.formContainer.classList.remove('is-hidden');

    commons.formContainer.addEventListener('submit', submitButtonAddAndDisplayTeams);
};

async function displayUpdateTeamForm(event, teamData)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle("Modifer le nom de l'équipe :")
    commons.displayActionsOnElements('hide', ['.add-pokemon-toTeam', '.delete-team', '.update-team']);


    //      Display form
    commons.mainContainer.append(commons.formContainer);
    commons.formContainer.classList.remove('is-hidden');
    commons.formContainer.querySelector('.input.name').value = teamData.name;

    commons.formContainer.addEventListener('submit',  (e) => {submitButtonDisplayUpdateTeamForm(e, teamData.id)});
    
};

async function submitButtonAddAndDisplayTeams(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.setMainTitle("Equipes :");

    let name = commons.formContainer.querySelector('.input.name').value;

    if (!name || name.length === 0)
    {
        alert("Le nom de l'équipe est requis");
        return;
    }
    name = commons.sanitizer(name);


    try {
        const response = await fetch(`${apiBaseUrl}/teams`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name})
        });

        if (!response.ok) 
            throw new Error("Erreur lors de la création de l'équipe");
        

        const team = await response.json();

        commons.formContainer.querySelector('.input.name').value = "";
        commons.purgeMainContainer();
        commons.fetchAndInsert('teams');

    } catch (error) {
        alert(error);
    }
    



};

async function submitButtonDisplayUpdateTeamForm(event)  
{   
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.setMainTitle("Equipes :");

    let name = commons.formContainer.querySelector('.input.name').value;

        if (!name || name.length === 0)
        {
            alert("Le nom de l'équipe est requis");
            return;
        }
    
        name = commons.sanitizer(name);
    
    
        try {
            const response = await fetch(`${apiBaseUrl}/teams/${currentTeam.id}`, {
                method: 'PATCH',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name})
            });
    
            if (!response.ok) 
                throw new Error("Erreur lors de la mise à jour de l'équipe");
            
    
            const team = await response.json();
    
            commons.formContainer.querySelector('.input.name').value = "";
            commons.purgeMainContainer();
            currentTeam.name = name;
            displayPokemonsOfATeam(event, currentTeam);
    
        } catch (error) {
            alert(error);
}};


async function pokemonSelectionList(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.displayActionsOnElements('hide', ['.add-team', '.add-pokemon-toTeam', '.delete-team', '.update-team']);
    commons.displayActionsOnElements('display', ['.addPokemon-to-team.searchBar']);
    commons.setMainTitle(`Ajouter un pokemon à l'équipe :`);


    try {

        const response = await fetch(`${apiBaseUrl}/pokemons`);

        if (!response.ok) 
            throw new Error("Erreur lors de la récupération des pokemons");
        

        const pokemons = await response.json();

        for (const pokemon of pokemons)
        {
            insertPokemonInHTML(pokemon, currentTeam.id, true);
        }

    } catch (error) {
        alert(error);
    }
    
};

export async function deletePokemonFromTeam(event, pokemonId)
{
    event.stopImmediatePropagation();
    event.preventDefault();

    commons.purgeMainContainer();

    try {
        let response = await fetch(`${apiBaseUrl}/teams/${currentTeam.id}/pokemons/${pokemonId}`, {
            method: 'DELETE'
        });

        if (!response.ok) 
            throw new Error("Erreur lors de la suppression du pokemon");

        response = await fetch(`${apiBaseUrl}/teams/${currentTeam.id}`);

        if (!response.ok) 
            throw new Error("Erreur lors de la récupération de l'équipe");
        
        currentTeam = await response.json();

        currentTeam.pokemons.forEach(pokemon => {
            displayOnePokemon(pokemon, currentTeam.id);
        })
        

        document.querySelector('.team.add-pokemon-toTeam').classList.remove('is-hidden');

    } catch (error) {
        alert(error);
    }
};

async function deleteTeam(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.setMainTitle("Equipes :");
    commons.displayActionsOnElements('hide', ['.add-pokemon-toTeam', '.delete-team', '.update-team']);

    commons.purgeMainContainer();

    try {
        const response = await fetch(`${apiBaseUrl}/teams/${currentTeam.id}`, {
            method: 'DELETE'
        });

        if (!response.ok) 
            throw new Error("Erreur lors de la suppression de l'équipe");


        await commons.fetchAndInsert('teams');

    } catch (error) {
        alert(error);
    }
};