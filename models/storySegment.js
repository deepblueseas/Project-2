const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StorySegment extends Model {}

// should we get rig off the connections to segment/story in the other models and join them through this model (like we did in the e-commerce challenge with ProductTags table)

StorySegment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        story_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'story',
                key: 'id',
                unique: false
            }
        },

        segment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'segment',
                key: 'id',
                unique: false
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'storySegment'
    }
);

module.exports = StorySegment;