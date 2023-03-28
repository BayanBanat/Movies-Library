# Movies-Library
# Project Name - Project Version

**Author Name**: Bayan Banat

## WRRC
Add an image of your WRRC here

![WRRC](/img/WRRC4.png)

## Overview
I have used a thunder client to try if my work will
 do if a real client used it and I dealt with a bit of cases.

in this project I have used a 3rd parrty API to send request to TMDB API to get the data that I want to my server and then send it to to the client related to what he wants.

 we are started to handle of the data base (save, get, update and delete )

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

prepare youre device, open your terminal and let we doing this steps:
1.`npm init -y` 
2.create `(any file name you want).js` 
3.`npm install express` to install express package to use it in your server
4.run the server using `node (any file name you want).js`
5.`npm i nodemon` to refresh and excute the chabges directly
6.`npm i cors` to make my server able to use from any clients
7.`npm i axios` to save the data that I get it from the API
8.`npm i dotenv` to save my data that i dont want to share it with the users.
 inside your database:
9.run the server `sqlstart - psql`
10.`CREATE DATABASE databasename` to create new dB
inside schema.sql file :
11.`CREATE TABLE table_name (`
    `column1 datatype,`
    `column2 datatype,`
    `column3 datatype,)`
12.`psql  -d databasename -f schema.sql` to connect my table with my dB
13.`npm install pg` to handle of `SQL language` in server.js.

## Project Features
<!-- What are the features included in you app -->

in `server.js`:

--- I have created 12 routs:
   1-rout 1 is: "`homePageHandler`" with a method of `get` and Endpoint ('/'). this will be show to the client in home page, new data (res.json) containing[{title,poster_path,overview}]
   2-rout 2 is: "`favoriteHandler`" with a method of `get` and Endpoint ('/favorite'). this will be show to the client in Favorite page, this massege (res.send) "Welcome to Favorite Page"
   3-rout 3 is: "`errorHandler`" with a method of `get` and Endpoint ('/error'). this will be show to the client specifiec message related to specifiec status, in this case I dealt with two status(500,404).
   4-rout 4 is:"`trendingHandler`" with a method of `get` and Endpoint ('/trending'). this will be send a request to the API and get the data from it then reshaped it in my server and send it to the client.
   5-rout 5 is:"`searchMoviesHandler`" with a method of `get` and Endpoint ('/search'). this one same as the fourth rout but API req is specific request not in general and based on that the response of my server to the client also will be specifiec.
   6-rout 6 is:"`populerHandler`" with a method of "get" and Endpoint ('/populerHandler'). this one specific kind of the fourth rout: just I mention specific rout that is called populer movies that I intersted in it.
   7-rout 7 is:"`planeSearchMoviesHandler`" with a method of `get` and Endpoint ('/searchMovies'). this one specific kind of the fifth rout, just I mention specific rout that is called Plane movies.
   8-rout 8 is:"`addMoviesHandger`" with a method of `post` and Endpoint ('/addMoveis'). this one to create a post request to save a specific movie in the body of request to my database then send it to the client.
   9-rout 9 is:"`getAllMovies`" with a method of `get` and Endpoint ('/getAllMovies'). this one to Create a get request to get all the data from my database and send it to the client.
   10-rout 10 is:"`updateHandler`" with a method of `put` and Endpoint ('/UPDATE/:id'). this one to update the specific data which has a unique `id` that is exist in my database then send it to the client.
   11-rout 11 is:"`deletHandler`" with a method of `delete` and Endpoint ('/DELETE/:id'). this one to delete the specific data which has a unique `id` that is exist in my database.
   12-rout 12 is:"`getMovie`" with a method of `get` and Endpoint ('/getMovie/:id'). this one to get a specific data which has a unique `id` that is exist in my database then send it to the client.






   