const User = require("../models/User");

const userData = [
    {
        username: "user1",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user1@email.com"
    },
    {
        username: "user2",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user2@email.com"
    },
    {
        username: "user3",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user3@email.com"
    },
    {
        username: "user4",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user4@email.com"
    },
    {
        username: "user5",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user5@email.com"
    },
    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;