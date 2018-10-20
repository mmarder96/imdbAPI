const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Get a list of movies from the db where id = ${id}.
router.get('/movies', function(req, res, next){
  Movie.find({_id: req.query._id}).then(function(movies){
    res.send(movies);
  });
});

// Add a new ninja to the db.
router.post('/movies', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Movie.create(req.body).then(function(movie){
    res.send(movie);
  }).catch(next);
});

// Update a ninja in the db.
router.put('/movies/:id', function(req, res, next){
  Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Movie.findOne({_id: req.params.id}).then(function(movie){
        res.send(movie);
    });
  });
});

// Delete a ninja from the db.
router.delete('/movies/:id', function(req, res, next){
  Movie.findByIdAndRemove({_id: req.params.id}).then(function(movie){
    res.send(movie);
  });
});

module.exports = router;
