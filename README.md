# IMDB API
deployement link: https://openimdb.herokuapp.com/
An IMDB RESTful API developed using the Atom text editorm, written using Node.js, and implementing a MongoDB database hosted on mLab. I am using express to to create and postman to test the various CRUD methods for the api's given routes and have obtained my dataset from https://datasets.imdbws.com/.

# How to Use
You can search for various media titles via the REACT driven front-end or use the various api routes to get/post/put/delete JSON objects for the different kinds of media stored on the MongoDB.

## Routes

### /api/search
* type /api/search?query=${title} to retireve a JSON object matching the desired title
* add &offset=${offset}&limit=${limit} to your query to limit results
** ${offset} is the number of results from the general query you wish to omit
** ${limit} is the total number of results you wish to see

### /api/movies
* type /api/movies/${tconst} to retrieve a JSON object of the movie title with the matching tconst id
* retrieve the tconst id for your desired movien title via a /api/search query

### /api/shows
* type /api/shows/${tconst} to retrieve a JSON object of the show title with the matching tconst id
* retrieve the tconst id for your desired show title via a /api/search query
