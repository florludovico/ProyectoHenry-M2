const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
  duration: { type: String, required: true },
  genre: { type: [String], required: true },
  rate: { type: Number, required: true, default:"0" },
  poster: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema, 'Movie');

module.exports = Movie;






