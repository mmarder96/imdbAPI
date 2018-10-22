const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Construct Schema for Celebrity.
const CelebritySchema = new Schema({
   nconst: {
     type: String,
     required: [true, 'const name id is required']
   },
   primaryName: {
     type: String,
     required: [true, 'primary name is required']
   },
   birthYear: {
      type: String,
      default: "\N"
   },
   deathYear: {
     type: String,
     default: "\N"
   },
   primaryProfession: {
     type: String,
     default: "miscellaneous"
   },
   knownForTitles: {
     type: String,
   }
});

// Export Schema and Model.
const Celebrity = mongoose.model('celebrity', CelebritySchema);
module.exports = Celebrity;
