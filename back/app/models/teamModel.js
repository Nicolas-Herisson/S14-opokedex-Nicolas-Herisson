import sequelize from '../database.js';
import { DataTypes, Model } from 'sequelize';

export default class Team extends Model {};

Team.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
}, {
    sequelize,
    tableName: 'team'
});