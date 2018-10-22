const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const Show = require('../models/show');

// CELEBRITY ROUTES ------------------------------------------------------

router.get('/celebrities/:nconst', function(req, res, next){
  Movie.find({tconst: req.params.nconst}).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.get('/celebrities', function(req, res, next){
  Movie.find({}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.post('/celebrities', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Movie.create(req.body).then(function(movie){
    res.send(movie);
  }).catch(next);
});

router.put('/celebrities/:nconst', function(req, res, next){
  Movie.findByIdAndUpdate({tconst: req.params.tconst}, req.body).then(function(){
    Movie.findOne({tconst: req.params.nconst}).then(function(movie){
        res.send(movie);
    });
  });
});

router.delete('/celebrities/:nconst', function(req, res, next){
  Movie.findByIdAndRemove({tconst: req.params.nconst}).then(function(movie){
    res.send(movie);
  });
});

// MOVIE ROUTES ----------------------------------------------------------

router.get('/movies/:tconst', function(req, res, next){
  Movie.find({tconst: req.params.tconst}).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.get('/movies', function(req, res, next){
  Movie.find({'primaryTitle' : req.query.title}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.post('/movies', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Movie.create(req.body).then(function(movie){
    res.send(movie);
  }).catch(next);
});

router.put('/movies/:tconst', function(req, res, next){
  Movie.findByIdAndUpdate({tconst: req.params.tconst}, req.body).then(function(){
    Movie.findOne({tconst: req.params.tconst}).then(function(movie){
        res.send(movie);
    });
  });
});

router.delete('/movies/:tconst', function(req, res, next){
  Movie.findByIdAndRemove({tconst: req.params.tconst}).then(function(movie){
    res.send(movie);
  });
});

// SEARCH ROUTE ---------------------------------------------------------

router.get('/search', function(req, res, next){
  // Movie.find({primaryTitle: req.query.query}).then(function(movies){
  //   res.send(movies).next();
  // });
  Celebrity.find({primaryName: req.query.query}).sort({'primaryName' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(movies){
    res.send(movies).next();
  });
});

// SHOW ROUTES -----------------------------------------------------------



//------------------------------------------------------------------------

module.exports = router;
