const Movie = require("../models/Movie");

module.exports = {
  getMoviesService: async () => {
    try {
      const movies = await Movie.find();

      return movies;
    } catch (error) {
      console.error("Error al obtener las películas:", error);
      throw error;
    }
  },

  postMoviesService: async (movieBody) => {
    try {
      const movie = await Movie.create(movieBody);

      const newMovie = new MovieClass(movie);

      return newMovie;
    } catch (error) {
      console.error("Error al crear la pelicula:", error);
    }
  },
};
