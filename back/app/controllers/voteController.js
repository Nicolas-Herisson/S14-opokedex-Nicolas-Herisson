import Vote from '../models/voteModel.js';

export async function getLeaderboard(req, res)
{
    try {
        const leaderboard = await Vote.findAll({
            attributes: ['pokemon_id', [sequelize.fn('count', 'pokemon_id'), 'votes']],
            group: ['pokemon_id'],
            order: [[sequelize.fn('count', 'pokemon_id'), 'DESC']],
            limit: 10
        });

        return res.status(200).json(leaderboard);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export async function createVote(req, res)
{
    try {
        const { pokemon_id } = req.body;

        if (!pokemon_id) 
            return res.status(400).json({ error: 'Le pokemon_id est requis' });

        const vote = await Vote.create({ pokemon_id });

        if (!vote) 
            return res.status(400).json({ error: 'Internal server error' });

        return res.status(201).json(vote);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};