'use strict'
const express = require('express');
const axios=require('axios');
require('dotenv').config();
const app = express();
const PORT=process.env.PORT;


app.get('/', homePageHandler);  //rout 1
app.get('/favorite', favoriteHandler);  //rout 2
app.get('/example',errorHandler2)
app.get('*', errorHandler);   //rout 3

//function
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

function favoriteHandler(req, res) {
    res.send('Welcome to Favorite Page')
}

function errorHandler(req, res) {
        res.status(404).send("Not Found")     
}

function errorHandler2(req,res){
    axios.get('https://example.com')
    .then((result)=> {
    res.json(result);
    })
    .catch((error)=> {
        res.status(500).send("Sorry, something went wrong")
    });
}



 

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
