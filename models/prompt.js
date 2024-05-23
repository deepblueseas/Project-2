const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prompt extends Model {}

Prompt.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        prompt_title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'prompt'
    }
);

module.exports = Prompt;