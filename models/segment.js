const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Segment extends Model {}

Segment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        position: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        created_by: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
        },

        story_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'story',
                key: 'id',
                unique: false
            }
        },

        prompt_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'prompt',
                key: 'id',
                unique: false
            }
        },
        
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id',
                unique: false
            }
        },

        seg_content: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'segment'
    }
);

module.exports = Segment;