const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app.
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://mmarder96:Redram11!@ds141043.mlab.com:41043/mediadb', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// EXPRESS MIDDLEWARE -------------------------------------

app.use(express.static('public'));

// Set up body parser for json objects.
app.use(bodyParser.json());

// Initialize routes.
app.use('/api', require('./routes/api'));

// Error handling middleware
app.use(function(err, req, res, next){
  console.log(err);
  res.status(422).send({error: err.message});
});

//--------------------------------------------------------

// Listen for requests.
var server = app.listen(process.env.port, function(){
    var port = server.address().port;
    console.log("now listening for requests on port", port);
});
