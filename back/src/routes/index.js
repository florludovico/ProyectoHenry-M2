const { Router } = require ("express");
const { getMoviesController, postMoviesController } = require("../controllers/moviesController")
const moviesValidator = require("../middlewares/movieValidator")

const indexRouter = Router();

indexRouter.get("/movies", getMoviesController );
indexRouter.get("/movies/:id", getMoviesController);
indexRouter.post("/movies", moviesValidator, postMoviesController)

module.exports = indexRouter;