const User = require("../models/user");

const userData = [
    {
        username: "user1",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user1@email.com",
        password: "$2b$10$/HE22vh.BgggieWK2ue4Uul41afhaKJHiuE7SdvwZGPMp80NPaesW"
    },
    {
        username: "user2",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user2@email.com",
        password: "$2b$10$/HE22vh.BgggieWK2ue4Uul41afhaKJHiuE7SdvwZGPMp80NPaesW"
    },
    {
        username: "user3",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user3@email.com",
        password: "$2b$10$/HE22vh.BgggieWK2ue4Uul41afhaKJHiuE7SdvwZGPMp80NPaesW"
    },
    {
        username: "user4",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user4@email.com",
        password: "$2b$10$/HE22vh.BgggieWK2ue4Uul41afhaKJHiuE7SdvwZGPMp80NPaesW"
    },
    {
        username: "user5",
        user_bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        email: "user5@email.com",
        password: "$2b$10$/HE22vh.BgggieWK2ue4Uul41afhaKJHiuE7SdvwZGPMp80NPaesW"
    },
    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;