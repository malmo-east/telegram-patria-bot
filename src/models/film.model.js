const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  age: {
    type: String
  },
  director: {
    type: String
  },
  actors: {
    type: String
  },
  premiere: {
    type: String
  },
  rate: {
    type: String
  },
  link: {
    type: String
  },
  picture: {
    type: String
  },
  trailer: {
    type: String
  },
  cinemas: {
    type: [String],
    default: []
  },
  date: {
    type: [String],
    default: []
  }
});

mongoose.model('films', FilmSchema)