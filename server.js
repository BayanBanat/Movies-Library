'use strict'
const express = require('express');
const cors= require('cors');
const axios=require('axios');
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();
const url=process.env.URL;
const client = new Client(url);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT=process.env.PORT;
const apiKey=process.env.API_KEY;

// Routs:
app.get('/', homePageHandler);  
app.get('/favorite', favoriteHandler);  
// app.get('/example',errorHandler2);
app.get('/trending',trendingHandler);
app.get('/search',searchMoviesHandler);
app.get('/populerMovies', populerHandler);
app.get('/searchMovies',planeSearchMoviesHandler);
app.post('/addMoveis',addMoviesHandger);
app.get('/getAllMovies',getAllMovies);
app.put('/UPDATE/:id',updateHandler);
app.delete('/DELETE/:id',deletHandler);
app.get('/getMovie/:id',getMovie);
app.use(errorHandler2);
app.get('*', errorHandler);   

//function
function homePageHandler(req, res) {
    let result = [];
    let newMovie = new Movie(moviesData.title, moviesData.poster_path, moviesData.overview);
    result.push(newMovie);
    res.json(result);
    console.log("bayan");

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


 
function errorHandler2(error,req,res){
    res.status(500).send(error)
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
        errorHandler2(err,req,res);

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
        errorHandler2(err,req,res);

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
        errorHandler2(err,req,res);
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
        errorHandler2(err,req,res);
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
 function addMoviesHandger(req,res){
    let {title,poster_path,overview,comment} =req.body; //destructuring
    let sql=`INSERT INTO movies (title ,poster_path,overview,comment)
    VALUES ($1,$2,$3,$4) RETURNING * `
    let values=[title,poster_path,overview,comment]
    client.query(sql,values).then((result)=>{
        // console.log(req.body);
        res.status(201).json(result.rows)
    })
    .catch((err)=>{
        errorHandler2(err,req,res);
    })
    
    
 }
 function getAllMovies(req,res){
    let sql=`SELECT * FROM movies`;
    client.query(sql).then((result)=>{
        res.json(result.rows)
    })
    .catch((err)=>{
        errorHandler2(err,req,res);
    })
 }
 function updateHandler(req,res){
    let movieName = req.params.id;
    let {title,poster_path,overview,comment} =req.body;
    let sql=`UPDATE movies SET title = $1, poster_path = $2,overview =$3 ,comment=$4
    WHERE id = ${movieName} RETURNING *;`;
    let values=[title,poster_path,overview,comment];
    client.query(sql,values).then(result=>{
        res.send(result.rows)
    }).catch()

 }
 function deletHandler(req,res){
    let {id} = req.params;
    let sql=`DELETE FROM movies WHERE id = ${id};` ;
    // let values = [id];
    client.query(sql).then(result=>{
        res.status(204).send("deleted");
    }).catch()
 }
 function getMovie(req,res){
    let {id} = req.params;
    let sql=`SELECT * FROM movies WHERE id = ${id};`;
    client.query(sql).then((result)=>{
        res.json(result.rows)
    })
    .catch((err)=>{
        errorHandler2(err,req,res);
    })
    
 }


 client.connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`listening on port${PORT}`);
    })

}).catch()



