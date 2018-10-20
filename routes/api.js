const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Get a list of movies from the db.
router.get('/movies', function(req, res, next){
  res.send({type: 'GET'});
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
  res.send({type: 'PUT'});
});

// Delete a ninja from the db.
router.delete('/movies/:id', function(req, res, next){
  res.send({type: 'DELETE'});
});

module.exports = router;
