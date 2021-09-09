const Film = require('./film.model');

exports.addMovie = async (newFilm) => {
    try{
        const movie = new Film(newFilm)  // has to be Film because thats what is imported on line 1
    } catch (error){
        console.log(error)
    }
};