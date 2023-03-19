'use strict'
const express = require('express');
const moviesData = require('./data.json');
const app = express();
const port = 3000;



app.get('/', homePageHandler);  //rout 1
function homePageHandler(req, res) {
    let result = [];
    let newMovie = new Movie(moviesData.title, moviesData.poster_path, moviesData.overview);
    result.push(newMovie);
    res.json(result);
    // console.log("bayan");

}
function Movie(title, posterPath, overview) {
    this.title = title;
    this.poster_path = posterPath;
    this.overview = overview;


}



app.get('/favorite', favoriteHandler);  //rout 2
function favoriteHandler(req, res) {
    res.send('Welcome to Favorite Page')
}



app.get('/error', errorHandler);   //rout 3
function errorHandler(req, res) {

const status = 500;
// const status = 404;
handleServerError(status,res);

}
function handleServerError(status, res) {
    if (status === 500) {
        res.status(500).json(
            {
                "status": 500,
                "responseText": "Sorry, something went wrong"
            }
        )

    } else if (status === 404) {
        res.status(400).json(
            {
                "status": 404,
                "responseText": "Sorry, the page is not found"
            }
        )

    }
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
