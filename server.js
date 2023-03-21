'use strict'
const express = require('express');
const cors= require('cors');
const axios=require('axios');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT=process.env.PORT;
const apiKey=process.env.API_KEY;




app.get('/', homePageHandler);  //rout 1
app.get('/favorite', favoriteHandler);  //rout 2
app.get('/trending',trendingHandler) //rout 4
app.get('/search',searchMoviesHandler) //rout 5
app.get('/populerMovies', populerHandler) //rout 6
app.get('/searchMovies',planeSearchMoviesHandler) //rout 7
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
 function trendingHandler(req,res){
    let URL=`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    axios.get(URL)
    .then((result)=>{
        let path=result.data.results;
        let dataMovie=path.map((movie)=>{
            return new MovieData(movie.id,movie.title,movie.release_date,movie.poster_path,movie.overview)
        })

        res.json(dataMovie);
    })
    .catch((err)=>{
        console.log(err);

    })


 }  
 
 
 function populerHandler(req,res){
    let URL=`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    axios.get(URL)
    .then((result)=>{
        let path=result.data.results;
        let dataMovie=path.map((movie)=>{
            return new MovieData(movie.id,movie.title,movie.release_date,movie.poster_path,movie.overview)
        })

        res.json(dataMovie);
    })
    .catch((err)=>{
        console.log(err);

    })


 }  

 function MovieData(id,title,releaseDate,posterPath,overview){
    this.id=id;
    this.title=title;
    this.release_date=releaseDate;
    this.poster_path=posterPath;
    this.overview=overview;

 }
 function searchMoviesHandler(req,res){
    let movieName = req.query.name
    
    let URL=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=2`
    axios.get(URL)
    .then((result)=>{
        let path=result.data.results;
        let searchMovieData=path.map((result)=>{
            return new searchData(result.id,result.original_language,result.original_title,result.poster_path,result.release_date,result.overview)
        })
        res.json(searchMovieData);
    })
    .catch((err)=>{
        console.log(err);
    })
 }
 function planeSearchMoviesHandler(req,res){
   
    let URL=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=Plane&page=1&include_adult=false`
    axios.get(URL)
    .then((result)=>{
        let path=result.data.results;
        let searchMovieData=path.map((result)=>{
            return new searchData(result.id,result.original_language,result.original_title,result.poster_path,result.release_date,result.overview)
        })
        res.json(searchMovieData);
    })
    .catch((err)=>{
        console.log(err);
    })
 }

 function searchData(id,language,title,posterPath,releaseDate,overview){
    this.id=id;
    this.original_language=language
    this.title=title;
    this.poster_path=posterPath;
    this.release_date=releaseDate;
    this.overview=overview;

 }



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
