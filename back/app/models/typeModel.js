import sequelize from '../database.js';
import { DataTypes, Model } from 'sequelize';

export default class Type extends Model {};

Type.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'type'
});