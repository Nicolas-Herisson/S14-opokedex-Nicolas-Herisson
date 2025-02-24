import Pokemon from '../models/pokemonModel.js';
import Team from '../models/teamModel.js';
import Type from '../models/typeModel.js';
import Vote from '../models/voteModel.js';
import sequelize from '../database.js';
export { Pokemon, Team, Type, Vote, sequelize };

Pokemon.belongsToMany(Team, {
    as: "teams",
     through: 'pokemon_team',
     foreignKey: 'pokemon_id',
     otherKey: 'team_id'
});

Team.belongsToMany(Pokemon, {
    as: "pokemons",
    through: 'pokemon_team',
    foreignKey: 'team_id',
    otherKey: 'pokemon_id'
});

Type.belongsToMany(Pokemon, {
    as: "pokemons",
    through: 'pokemon_type',
    foreignKey: 'type_id',
    otherKey: 'pokemon_id'
});

Pokemon.belongsToMany(Type, {
    as: "types",
    through: 'pokemon_type',
    foreignKey: 'pokemon_id',
    otherKey: 'type_id'
});

Vote.belongsTo(Pokemon, {
    as: "pokemon",
    foreignKey: 'pokemon_id'
});

Pokemon.hasMany(Vote, {
    as: "votes",
    foreignKey: 'pokemon_id'
});