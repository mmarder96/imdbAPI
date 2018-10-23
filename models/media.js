const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Construct Schema for Movie.
const MediaSchema = new Schema({
  tconst: {
    type: String,
    required: [true, 'const title id is required']
  },
  titleType: {
    type: String,
    default: "\N"
  },
  primaryTitle: {
    type: String,
    required: [true, 'primary title is required']
  },
  originalTitle: {
    type: String,
    default: this.primaryTitle
  },
  isAdult: {
    type: Boolean,
    default: false
  },
  startYear: {
    type: String,
    default: "\N"
  },
  endYear: {
    type: String,
    default: "\N"
  },
  runtimeMinutes: {
    type: String,
    default: "\N"
  },
  genres: {
    type: String,
    default: "\N"
  }
});

// Export Schema and Model.
const Media = mongoose.model('media', MediaSchema);
module.exports = Media;
