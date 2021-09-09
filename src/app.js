require("./db/connection");
const mongoose = require("mongoose");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./films/film.methods");
const Film = require("./films/film.model");
const command = process.argv[2];

const app = async () => {
  if (command === "add") {
    await addMovie({
      name: process.argv[3],
      actor: process.argv[4],
      like: process.argv[5],
      year: process.argv[6],
      rating: process.argv[7],
    });
  } else if (command === "list") {
    await listMovies();
  } else if (command === "update") {
    const updateObj = {
      filter: process.argv[3],
      like: process.argv[4],
    };
    await updateMovie(updateObj);
  } else if (command === "delete") {
    await deleteMovie({ filter: process.argv[3] });
  } else {
    console.log("Incorrect command");
  }
  mongoose.disconnect();
};

app();
