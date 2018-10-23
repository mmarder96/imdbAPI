const express = require('express');
const router = express.Router();
const Media = require('../models/media');

// MEDIA ROUTES ----------------------------------------------------------

router.get('/media/:tconst', function(req, res, next){
  Media.find({tconst: req.params.tconst}).then(function(media){
    res.send(media);
  }).catch(next);
});

router.get('/media', function(req, res, next){
  Media.find({primaryTitle : req.query.title}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(media){
    res.send(media);
  }).catch(next);
});

router.post('/media', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Media.create(req.body).then(function(media){
    res.send(media);
  }).catch(next);
});

router.put('/media/:tconst', function(req, res, next){
  Media.findByIdAndUpdate({tconst: req.params.tconst}, req.body).then(function(){
    Media.findOne({tconst: req.params.tconst}).then(function(media){
        res.send(media);
    });
  });
});

router.delete('/media/:tconst', function(req, res, next){
  Media.findByIdAndRemove({tconst: req.params.tconst}).then(function(media){
    res.send(media);
  });
});

// MOVIE ROUTES ----------------------------------------------------------

router.get('/movies/:tconst', function(req, res, next){
  Media.find({tconst: req.params.tconst, titleType: 'movie'}).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.get('/movies', function(req, res, next){
  Media.find({primaryTitle : req.query.title, titleType: 'movie'}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(movies){
    res.send(movies);
  }).catch(next);
});

router.post('/movies', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Media.create(req.body).then(function(movie){
    res.send(movie);
  }).catch(next);
});

router.put('/movies/:tconst', function(req, res, next){
  Media.findByIdAndUpdate({tconst: req.params.tconst}, req.body).then(function(){
    Media.findOne({tconst: req.params.tconst}).then(function(movie){
        res.send(movie);
    });
  });
});

router.delete('/movies/:tconst', function(req, res, next){
  Media.findByIdAndRemove({tconst: req.params.tconst}).then(function(movie){
    res.send(movie);
  });
});

// SEARCH ROUTE ---------------------------------------------------------

router.get('/search', function(req, res, next){
  Media.find({primaryTitle: req.query.query}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(media){
    res.send(media);
  }).catch(next);
});

// SHOW ROUTES -----------------------------------------------------------

router.get('/shows/:tconst', function(req, res, next){
  Media.find({tconst: req.params.tconst, titleType: 'tvSeries'}).then(function(shows){
    res.send(shows);
  }).catch(next);
});

router.get('/shows', function(req, res, next){
  Media.find({primaryTitle : req.query.title, titleType: 'tvSeries'}).sort({'primaryTitle' : 1}).skip(parseInt(req.query.offset)).limit(parseInt(req.query.limit)).then(function(shows){
    res.send(shows);
  }).catch(next);
});

router.post('/shows', function(req, res, next){
  // Create and save a movie from req body to the db using create mongoose
  Media.create(req.body).then(function(shows){
    res.send(shows);
  }).catch(next);
});

router.put('/shows/:tconst', function(req, res, next){
  Media.findByIdAndUpdate({tconst: req.params.tconst}, req.body).then(function(){
    Media.findOne({tconst: req.params.tconst}).then(function(shows){
        res.send(shows);
    });
  });
});

router.delete('/shows/:tconst', function(req, res, next){
  Media.findByIdAndRemove({tconst: req.params.tconst}).then(function(shows){
    res.send(shows);
  });
});

//------------------------------------------------------------------------

module.exports = router;
