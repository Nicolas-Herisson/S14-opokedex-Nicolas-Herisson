import sequelize from '../database.js';
import { DataTypes, Model } from 'sequelize';

export default class Vote extends Model {};

Vote.init({
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'vote'
});