import type from '../models/typeModel.js';

export default async function getAllTypes(req, res) {
    try {
        const types = await type.getAllTypes();

        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};

export default async function getType(req, res) {
    try {
        const type = await type.getType(req.params.id);

        if (!type) {
            return res.status(404).json({ error: "Ce type de pokemon n'existe pas" });
        };

        res.status(200).json(type);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    };
};