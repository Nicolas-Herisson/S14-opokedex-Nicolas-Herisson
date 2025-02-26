import * as commons from "./commons.js"
import {insertPokemonInHTML} from "./pokemon.js"
import {apiBaseUrl} from "./config.js";

export async function insertTeamInHTML(teamData)
{

    const teamTemplate = document.querySelector('#team-template');

    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);

    commons.addButton.classList.remove('is-hidden');
    commons.addButton.textContent = "Ajouter une équipe :";
    commons.addButton.addEventListener('click',  displayAddTeamForm);

    // if (!teamData || teamData.length === 0)
    //     clonedTeamTemplate.querySelectorAll('.team-button').forEach(button => button.classList.add('is-hidden'));

    clonedTeamTemplate.querySelector('.team-name').textContent = teamData.name;
    clonedTeamTemplate.querySelector('.team-position').textContent = teamData.position;

    clonedTeamTemplate.querySelector('.team-container').addEventListener('click',  (e) => {displayPokemonsOfATeam(e, teamData)});
    //clonedTeamTemplate.querySelector(`.team-add`).addEventListener('click',  handleAddTeamSetup);



    // if (teamData.pokemons && teamData.pokemons.length > 0)
    // {
    //     clonedTeamTemplate.querySelector('.team.pokemon-container').classList.remove('is-hidden');

    //     for (const pokemon of teamData.pokemons)
    //     {
    //         console.log(pokemon)
    //         insertPokemonInHTML(pokemon);
    //     }
    // }
    


    commons.mainContainer.append(clonedTeamTemplate);
};

//          CLICK ON ADD TEAM BUTTON
export async function displayAddTeamForm(event)
{
    event.stopImmediatePropagation();
    event.preventDefault();
    commons.purgeMainContainer();
    commons.setMainTitle("Ajouter une team :");

    //      Setup add button
    commons.addButton.removeEventListener('click', displayAddTeamForm);
    commons.addButton.classList.add('is-hidden');

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
    
    commons.addButton.removeEventListener('click', displayAddTeamForm);
    commons.addButton.textContent = "";
    commons.addButton.classList.add('is-hidden');

    event.currentTarget.dataset.id = teamData.id;



    try {
     const response = await fetch(`${apiBaseUrl}/teams/${teamData.id}`);

     if (!response.ok) {
         throw new Error("Erreur lors de la récupération de l'équipe");
     }

     const team = await response.json();
     console.log(team.pokemons.length);
     if (team.pokemons && team.pokemons.length < 6)
     {
        commons.addButton.removeEventListener('click', displayAddTeamForm);
        commons.addButton.classList.remove('is-hidden');
        commons.addButton.textContent = "Ajouter un pokemon à l'équipe :";
        commons.addButton.addEventListener('click', (e) => {pokemonSelectionList(e, teamData.id)});
     }


    insertPokemonsOfATeamInHTML(team.pokemons);
   //insertTeamPokemonsInHTML(team.pokemons);
     
    } catch (error) {
        alert(error);
    }
    
};



export async function insertPokemonsOfATeamInHTML(teamPokemonsData)
{
    //          setup team container
    const teamTemplate = document.querySelector('#team-template');
    const clonedTeamTemplate = document.importNode(teamTemplate.content, true);
    //const pokemonContainer = clonedTeamTemplate.querySelector('.team-button.team-container');

    clonedTeamTemplate.querySelectorAll('.team-button').forEach(button => button.classList.add('is-hidden'));

    //pokemonContainer.classList.remove('is-hidden');
    commons.mainContainer.append(clonedTeamTemplate);

//console.log(teamPokemonsData.length)
    for (const pokemon of teamPokemonsData) 
    {
        //          setup pokemon template 
        const pokemonTemplate = document.querySelector('#pokemon-template');
        const clonedPokemonTemplate = document.importNode(pokemonTemplate.content, true);
        //clonedPokemonTemplate.querySelector('.pokemon-container').dataset.id = teamPokemons.data.id;
        clonedPokemonTemplate.querySelector('.pokemon-number').textContent = "Numero : "+pokemon.id;
        clonedPokemonTemplate.querySelector('.pokemon-name').textContent = pokemon.name;
        clonedPokemonTemplate.querySelector('.pokemon-description').textContent = pokemon.description;
        clonedPokemonTemplate.querySelector('.pokemon-evolution').textContent = "Evolution : "+pokemon.evolution;
        clonedPokemonTemplate.querySelector('.pokemon-size').textContent = "Taille : "+pokemon.size + "m";
        clonedPokemonTemplate.querySelector('.pokemon-weight').textContent = "Poids : "+pokemon.weight + "kg";
        clonedPokemonTemplate.querySelector('.pokemon-type').textContent = "Type : "+pokemon.types.map(type => type.name).join(', ');
        clonedPokemonTemplate.querySelector('.pokemon-image').src = pokemon.image;

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

    commons.addButton.removeEventListener('click', pokemonSelectionList);
    commons.addButton.textContent = "";
    commons.addButton.classList.add('is-hidden');

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
        
    }
    //commons.fetchAndInsert('pokemons', teamId);
    
};


