const express = require('express');
const routes = require('./routes/api')

// Set up express app
const app = express();

app.use('/api', routes);

// Listen for requests
app.listen(process.env.port||4000, function(){
    console.log("now listening for requests");
});
