const express = require('express');
const router = express.Router();

// Get a list of movies from the db.
router.get('/movies', function(req, res){
  res.send({type: 'GET'});
});

// Add a new ninja to the db.
router.post('/movies', function(req, res){
  console.log(req.body);
  res.send({
    type: 'POST',
    name: req.body.name,
    rating: req.body.rating
  });
});

// Update a ninja in the db.
router.put('/movies/:id', function(req, res){
  res.send({type: 'PUT'});
});

// Delete a ninja from the db.
router.delete('/movies/:id', function(req, res){
  res.send({type: 'DELETE'});
});

module.exports = router;
