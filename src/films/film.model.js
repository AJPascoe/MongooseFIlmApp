const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // checks to see if it already exist in database to avoid duplicates
    },
    actor: {
        type: String
    },
    like: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    rating:{
        type: String,
        required: true,
    },
});

const Film = mongoose.model("Film", filmSchema); // assigns schema to a name.

module.exports = Film;