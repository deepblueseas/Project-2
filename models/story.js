const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model {}

Story.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        story_title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        seg_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'segment',
                key: 'id',
                unique: false
            }
        }
    }
);

module.exports = Story;