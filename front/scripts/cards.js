const cardMovies = (movie) => {


  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movies-container");

  movieContainer.innerHTML = `
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-year">Year: ${movie.year}</p>
      <p class="movie-director">Director: ${movie.director}</p>
      <p class="movie-duration">Duration: ${movie.duration}</p>
      <p class="movie-genre">Genre: ${Array.isArray(movie.genre)?movie.genre.join(", ") : movie.genre}</p>
      <p class="movie-rate">Rate: ${movie.rate}</p>
      <img class="movie-poster" src="${movie.poster}" alt=${movie.title}/>
      `;
  return movieContainer;
};

module.exports = {
  cardMovies,
};
