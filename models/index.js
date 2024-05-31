const Genre = require('./genre');
const Prompt = require('./prompt');
const Segment = require('./segment');
const Story = require('./story');
const StorySegment = require('./storySegment');
const User = require('./user');

// User Associations
User.hasMany(Segment, {
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});

Segment.belongsTo(User, {
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});

// End User Associations

// Story Associations
Story.hasMany(Segment, {
    onDelete: 'CASCADE',
    foreignKey: 'story_id'
});

Segment.belongsTo(Story, {
    foreignKey: 'story_id'
});
// End Story Associations

// Segment Associations
Segment.hasOne(Prompt, {
    onDelete: 'CASCADE',
    foreignKey: 'prompt_id'
});

Segment.hasOne(Genre, {
    onDelete: 'CASCADE',
    foreignKey: 'genre_id'
});

Prompt.hasMany(Segment, {
    onDelete: 'CASCADE',
    foreignKey: 'prompt_id'
});

Genre.hasMany(Segment, {
    onDelete: 'CASCADE',
    foreignKey: 'genre_id'
});
// End Segment Associations

module.exports = { Genre, Prompt, Segment, Story, User, StorySegment}