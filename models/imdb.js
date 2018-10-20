const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create imdb Schema and model.
const ImdbSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  // format 10.0
  rating: {
    type: String
  },
  avaliable: {
    type Boolean,
    default: false
  }
  // add in geo location
});

const Imdb = mongoose.model('imdb', ImdbSchema);

module.exports = Imdb;
