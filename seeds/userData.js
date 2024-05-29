const User = require("../models/user");

const userData = [
    {
        username: "user1",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user1@email.com",
        password: "password1"
    },
    {
        username: "user2",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user2@email.com",
        password: "password2"
    },
    {
        username: "user3",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user3@email.com",
        password: "password3"
    },
    {
        username: "user4",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user4@email.com",
        password: "password4"
    },
    {
        username: "user5",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user5@email.com",
        password: "password5"
    },
    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;