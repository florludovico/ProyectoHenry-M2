const { postNewMovieAsync } = require("./index");

const renderForm = () => {
  const genres = [
    { name: "Action", value: "Action" },
    { name: "Adventure", value: "Adventure" },
    { name: "Comedy", value: "Comedy" },
    { name: "Drama", value: "Drama" },
    { name: "Fantasy", value: "Fantasy" },
    { name: "Horror", value: "Horror" },
    { name: "Musical", value: "Musical" },
    { name: "Mystery", value: "Mystery" },
    { name: "Romance", value: "Romance" },
    { name: "Sci-Fi", value: "Sci-Fi" },
    { name: "Thriller", value: "Thriller" },
    { name: "War", value: "War" },
  ];

  const checklist = document.getElementById("checkbox-list");

  const newElements = genres.map((genre) => {
    const element = document.createElement("label");
    element.innerHTML = `<input type="checkbox" name="opciones" value="${genre.value}" class="w-auto">${genre.name}`;

    return element;
  });

  checklist.append(...newElements);
};

const handleOnSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const title = formData.get("title");
  const year = formData.get("year");
  const director = formData.get("director");
  const duration_hours = formData.get("duration_hours");
  const duration_min = formData.get("duration_min");
  const rate = formData.get("rate");
  const poster = formData.get("poster");

  const genres = Array.from(
    form.querySelectorAll('input[name="opciones"]:checked')
  ).map((checkbox) => checkbox.value);


  if (
    [title, year, director, duration_hours, duration_min, rate, poster].some(
      (e) => e === "" || !e
    ) ||
    genres.length === 0
  ) {
    return alert("Must complete all fields");
  }

  const data = {
    title,
    year,
    director,
    duration: `${duration_hours}hs ${duration_min}min`,
    rate,
    genre: genres,
    poster,
  };

  const movieNew = await postNewMovieAsync(data);

  if (movieNew) {
    return alert("Movie added");
  } else {
    alert("Something went wrong")
  }
};



const resetForm = (event) => {
  event.preventDefault();

  const confirmation = confirm("Are you sure you want to reset the form?");

  if (confirmation) {
    form.reset();
  }
};

const form = document.getElementById("form_movies");

if (form) {
  renderForm();
  form.addEventListener("submit", handleOnSubmit);

  const resetButton = document.querySelector('button[type="reset"]');

  resetButton.addEventListener("click", resetForm);
}
