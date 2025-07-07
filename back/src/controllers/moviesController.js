const { getMoviesService, postMoviesService } = require("../services/movieService");

module.exports = {
  getMoviesController: async (req, res) => {
    try {
      const movies = await getMoviesService();

      res.send(movies);
    } catch (error) {
      console.error("error al obterner peliculas:", error);
      res.status(500).send({ error: "No se pudieron obtener las peliculas" });
    }
  },

  
  postMoviesController: async (req, res) => {
    try {
      const movie = req.body;
      const response = await postMoviesService(movie);

      res.status(201).json({
        status: 201,
        message: "Se ha creado la pelicula con exito",
        data: response,
      });
    } catch (e) {
      res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  },
};
