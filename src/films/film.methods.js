const Film = require('./film.model');

exports.addMovie = async (newFilm) => {
    try{
        const movie = new Film(newFilm);  // has to be Film because thats what is imported on line 1
        await movie.save();
    } catch (error){
        console.log(error);
    }
};

exports.listMovies = async () => {
    const list = await Film.find({});
    console.log(list);
};


