import {Team} from '../models/associations.js';

export async function getAllTeams(req, res) {
    try {
        const teams = await Team.findAll( { include: 'pokemons' });

        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function getTeam(req, res) {
    try {

        const team = await Team.findByPk(req.params.id, {
            include: [
                {
                    association: 'pokemons',
                    include: ['types']
                }
            ]
        });

        if (!team) 
            return res.status(404).json({ error: "Cette team n'existe pas" });
        

        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function createTeam(req, res) {
    try {

        if (!req.body.name) 
            return res.status(400).json({ error: "Le nom de la team est requis" });
        

        const existsTeam = await Team.findOne({ where: { name: req.body.name } });

        if (existsTeam) 
            return res.status(400).json({ error: "Une team avec ce nom existe déjà" });
        

        const team = await Team.create({name: req.body.name});

        res.status(201).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function addPokemonToTeam(req, res) {
    try {
        const { team_id, pokemon_id } = req.params;
console.log(team_id, pokemon_id);
        const team = await Team.findByPk(team_id);
console.log(team);
        if (!team) 
            return res.status(404).json({ error: "Cette team n'existe pas" });  


        if (team.pokemons && team.pokemons.includes(pokemon_id)) 
            return res.status(400).json({ error: "Ce pokemon est déjà dans la team" });
        

        if (team.pokemons && team.pokemons.length >= 6) 
            return res.status(400).json({ error: "La team est déjà pleine" });
        

        const newTeam = await team.addPokemon(pokemon_id);

        res.status(200).json(newTeam);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function removePokemonFromTeam(req, res) {
    try {
        const { team_id, pokemon_id } = req.params;

        const team = await Team.findByPk(team_id);

        if (!team) 
            return res.status(404).json({ error: "Cette team n'existe pas" });
        

        await team.removePokemon(pokemon_id);

        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function deleteTeam(req, res) {
    try {
        const team = await Team.findByPk(req.params.id);

        if (!team) 
            return res.status(404).json({ error: "Cette team n'existe pas" });
        

        const destroyedTeam = await team.destroy();

        res.status(204).json(destroyedTeam);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function updateTeam(req, res) {
    try {
        const team = await Team.findByPk(req.params.id);

        if (!team) 
            return res.status(404).json({ error: "Cette team n'existe pas" });
        

        if (!req.body.name) 
            return res.status(400).json({ error: "Le nom de la team est requis" });
        

        const existsTeam = await Team.findOne({ where: { name: req.body.name } });

        if (existsTeam && existsTeam.id != req.params.id) 
            return res.status(400).json({ error: "Une team avec ce nom existe déjà" });
        

        team.name = req.body.name;
        await team.save();

        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' }
    )}
};