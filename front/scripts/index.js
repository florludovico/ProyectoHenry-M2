
const axios = require("axios");

const APP_URL = "http://localhost:3001";

const postNewMovieAsync = async (data) => {
  try {
    return await axios.post(APP_URL + "/movies", data);
  } catch (e) {
    console.error("Movie can not be posted:", error.message);
  }
};
module.exports = {
  postNewMovieAsync,
};


require("./formulario");
const { cardMovies } = require("./cards");


const getData = async () => {
  try {
    const response = await axios.get(APP_URL + "/Movies");
    renderMovies(response.data);
  } catch (e) {
    console.error("technical difficulties, please stand by ", error);
  } finally {
    
  }
};

const renderMovies = (movies) => {
  const container = document.getElementById("movie-container");
  container.innerHTML = "";

  const movieElement = movies.map(cardMovies);

  container.append(...movieElement);
};

const container = document.getElementById("movie-container");
if (container) {
  getData();
};

