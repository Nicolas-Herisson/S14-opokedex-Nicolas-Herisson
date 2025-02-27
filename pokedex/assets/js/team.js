import * as commons from "./commons.js"
import {insertPokemonInHTML, displayOnePokemon} from "./pokemon.js"
import {apiBaseUrl} from "./config.js";

export async function insertTeamInHTML(teamData)
{

    const teamTemplate = document.querySelector('#team-template');

    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);

    clonedTeamTemplate.querySelector('.add-team').addEventListener('click',  displayAddTeamForm);

    clonedTeamTemplate.querySelector('.delete-team').addEventListener('click',  (e) => {deleteTeam(e, teamData.id)});

    clonedTeamTemplate.querySelector('.team-name').textContent = teamData.name;
    clonedTeamTemplate.querySelector('.team-position').textContent = teamData.position;

    clonedTeamTemplate.querySelector('.team-button').addEventListener('click',  (e) => {displayPokemonsOfATeam(e, teamData)});

    commons.mainContainer.append(clonedTeamTemplate);
};

//          CLICK ON TEAM BUTTON
export async function displayAddTeamForm(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle("Ajouter une team :");


    //      Display form
    commons.mainContainer.append(commons.formContainer);
    commons.formContainer.classList.remove('is-hidden');

    commons.formContainer.addEventListener('submit', addAndDisplayTeams);
};

export async function displayPokemonsOfATeam(event, teamData)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle(`Equipe ${teamData.name} :`);
    

    event.currentTarget.dataset.id = teamData.id;



    try {
     const response = await fetch(`${apiBaseUrl}/teams/${teamData.id}`);

     if (!response.ok) {
         throw new Error("Erreur lors de la récupération de l'équipe");
     }

     const team = await response.json();


    insertPokemonsOfATeamInHTML(team);

    if (team.pokemons && team.pokemons.length < 6)
    {
        document.querySelector('.team.add-pokemon-toTeam').classList.remove('is-hidden');
        document.querySelector('.team.add-pokemon-toTeam').addEventListener('click', (e) => {pokemonSelectionList(e, teamData.id)});
    }
    else
    {
        document.querySelector('.team.add-pokemon-toTeam').classList.add('is-hidden');
    }


    } catch (error) {
        alert(error);
    }
    
};



export async function insertPokemonsOfATeamInHTML(teamData)
{
    //          setup team container
    const teamTemplate = document.querySelector('#team-template');
    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);
    clonedTeamTemplate.querySelector('.team.add-pokemon-toTeam').addEventListener('click', (e) => {pokemonSelectionList(e, teamData.id)});
    clonedTeamTemplate.querySelector('.delete-team').classList.remove('is-hidden');
    clonedTeamTemplate.querySelector('.delete-team').addEventListener('click', (e) => {deleteTeam(e, teamData.id)});



    clonedTeamTemplate.querySelectorAll('.team-button').forEach(button => button.classList.add('is-hidden'));

    commons.mainContainer.append(clonedTeamTemplate);


    for (const pokemon of teamData.pokemons) 
    {
        //          setup pokemon template 
        const pokemonTemplate = document.querySelector('#pokemon-template');
        const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
        clonedPokemonTemplate.querySelector('.pokemon-container').dataset.id = pokemon.id;
        clonedPokemonTemplate.querySelector('.pokemon-number').textContent = "Numero : "+pokemon.id;
        clonedPokemonTemplate.querySelector('.pokemon-name').textContent = pokemon.name;
        clonedPokemonTemplate.querySelector('.pokemon-description').textContent = pokemon.description;
        clonedPokemonTemplate.querySelector('.pokemon-evolution').textContent = "Evolution : "+pokemon.evolution;
        clonedPokemonTemplate.querySelector('.pokemon-size').textContent = "Taille : "+pokemon.size + "m";
        clonedPokemonTemplate.querySelector('.pokemon-weight').textContent = "Poids : "+pokemon.weight + "kg";
        clonedPokemonTemplate.querySelector('.pokemon-type').textContent = "Type : "+pokemon.types.map(type => type.name).join(', ');
        clonedPokemonTemplate.querySelector('.pokemon-image').src = pokemon.image;
        //          delete pokemon from list button setup
        clonedPokemonTemplate.querySelector('.pokemon-delete-toTeam').classList.remove('is-hidden');
        clonedPokemonTemplate.querySelector('.pokemon-delete-toTeam').textContent = "Supprimer de l'équipe";
        clonedPokemonTemplate.querySelector('.pokemon-delete-toTeam').addEventListener('click', (e) => {deletePokemonFromTeam(e, teamData, pokemon.id)});

        clonedPokemonTemplate.querySelector(`.pokemon-container`).addEventListener('click', (e) => {
            displayOnePokemon(e, pokemon.name);
        }
        
    );


        commons.mainContainer.append(clonedPokemonTemplate);
    }

};



export async function addAndDisplayTeams(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();

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

        if (!response.ok) {
            throw new Error("Erreur lors de la création de l'équipe");
        }

        const team = await response.json();

        commons.formContainer.querySelector('.input.name').value = "";
        commons.purgeMainContainer();
        commons.fetchAndInsert('teams');

    } catch (error) {
        alert(error);
    }
    



};


export async function pokemonSelectionList(event, teamId)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle(`Ajouter un pokemon à l'équipe :`);

    try {

        const response = await fetch(`${apiBaseUrl}/pokemons`);

        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des pokemons");
        }

        const pokemons = await response.json();

        for (const pokemon of pokemons)
        {
            insertPokemonInHTML(pokemon, teamId);
        }
    } catch (error) {
        alert(error);
    }
    
};


async function deletePokemonFromTeam(event, teamData, pokemonId)
{
    event.stopImmediatePropagation();
    event.preventDefault();

    commons.purgeMainContainer();

    try {
        let response = await fetch(`${apiBaseUrl}/teams/${teamData.id}/pokemons/${pokemonId}`, {
            method: 'DELETE'
        });

        if (!response.ok) 
            throw new Error("Erreur lors de la suppression du pokemon");

        response = await fetch(`${apiBaseUrl}/teams/${teamData.id}`);

        if (!response.ok) 
            throw new Error("Erreur lors de la récupération de l'équipe");
        
        const team = await response.json();

        insertPokemonsOfATeamInHTML(team);

        document.querySelector('.team.add-pokemon-toTeam').classList.remove('is-hidden');

    } catch (error) {
        alert(error);
    }
};

async function deleteTeam(event, teamId)
{
    event.stopImmediatePropagation();
    event.preventDefault();

    commons.purgeMainContainer();

    try {
        const response = await fetch(`${apiBaseUrl}/teams/${teamId}`, {
            method: 'DELETE'
        });

        if (!response.ok) 
            throw new Error("Erreur lors de la suppression de l'équipe");


        await commons.fetchAndInsert('teams');

    } catch (error) {
        alert(error);
    }
};