import { Pokemon, Team, Type, Vote, sequelize } from '../models/associations.js';

await sequelize.drop({cascade: true});
await sequelize.sync();
await sequelize.close();