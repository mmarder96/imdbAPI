# IMDB API
Deployment link: https://openimdb.herokuapp.com/  

An IMDB RESTful API developed using the Atom text editor, written using Node.js, and implementing a MongoDB database hosted on mLab. I am using express to create and postman to test the various CRUD methods for the api's given routes and have obtained my dataset from https://datasets.imdbws.com/.

# How to Use
You can search for various media titles via the REACT driven front-end or use the various api routes to get/post/put/delete JSON objects for the different kinds of media stored on the MongoDB.

## Routes

### /api/search
* type /api/search?query=${title} to retrieve a JSON object matching the desired title
  * add &page=${pageNumber} to your query to limit results
  * There are 50 results listed per page and the page index starts at 0

### /api/movies
* type /api/movies/${tconst} to retrieve a JSON object of the movie title with the matching tconst id
  * retrieve the tconst id for your desired movie title via a /api/search query
* type /api/search?title=${title} to retrieve a JSON object matching the desired movie title
  * add &page=${pageNumber} to your query to limit results
  * There are 50 results listed per page and the page index starts at 0

### /api/shows
* type /api/shows/${tconst} to retrieve a JSON object of the show title with the matching tconst id
  * retrieve the tconst id for your desired show title via a /api/search query
* type /api/shows?title=${title} to retrieve a JSON object matching the desired show title
  * add &page=${pageNumber} to your query to limit results
  * There are 50 results listed per page and the page index starts at 0
