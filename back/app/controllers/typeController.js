import { Where } from 'sequelize/lib/utils';
import {Type} from '../models/associations.js';

export async function getAllTypes(req, res) {
    try {
        const types = await Type.findAll();

        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function getType(req, res) {
    try {
        const type = await Type.findByPk(req.params.id);

        if (!type) {
            return res.status(404).json({ error: "Ce type de pokemon n'existe pas" });
        };

        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export async function getPokemonsByType(req, res) {
    try {
        const { id } = req.params;

        const type = await Type.findByPk(id, { include: 'pokemons' });

        if (!type) {
            return res.status(404).json({ error: "Ce type de pokemon n'existe pas" });
        };

        res.status(200).json(type.pokemons);
    } catch (error) {
        res.status(500).json({ error: 'Internal server'});
    };
};