const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create movie Schema and model.
const MovieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  // format 10.0
  rating: {
    type: String
  },
  avaliable: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
