import sequelize from '../database.js';
import { DataTypes, Model } from 'sequelize';

export default class Pokemon extends Model {}

Pokemon.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    evolution: {
        type: DataTypes.STRING,
        allowNull: true
    },
    size: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'pokemon'
});