module.exports = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !Array.isArray(genre) ||
    genre.length === 0 ||
    !rate ||
    !poster
  ) {
    return res.status(400).json({
      message: "All fields needed to create a movie",
    });
  }

  next();
};
