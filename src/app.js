require("./db/connection");
const mongoose = require("mongoose");
const {addMovie, listMovies} = require ("./films/film.methods");
const command = process.argv[2];

const app = async ()=> {
    let movieListArr
    try {
        movieListArr = JSON.parse(fs.readFileSync('./db/storage.json'));
    } catch (error) {
        movieListArr = [];
    }

    if (command === "add"){
        await addMovie({
            name: process.argv[3],
            actor: process.argv[4],
            like: process.argv[5],
            year: process.argv[6],
            rating: process.argv[7]
        });
    } else if (command === 'list') {
        await listMovies();
    }
    mongoose.disconnect();
};

app();

