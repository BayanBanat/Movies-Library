# Movies-Library
# Project Name - Project Version

**Author Name**: Bayan Banat

## WRRC
Add an image of your WRRC here

![WRRC](/img/API1.png)

## Overview
I have used a thunder client to try if my work will
 do if a real client used it and I dealt with a bit of cases.

in this project I have used a 3rd parrty API to send request to TMDB API to get the data I want to my server and then send it to to the client related to what he wants.

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

## Project Features
<!-- What are the features included in you app -->

in `server.js`:

--- I have created seven routs:
   1-the first rout is: "homePageHandler" with a method of "get" and Endpoint ('/'). this will be show to the client in home page, new data (res.json) containing[{title,poster_path,overview}]
   2-the second rout is: "favoriteHandler" with a method of "get" and Endpoint ('/favorite'). this will be show to the client in Favorite page, this massege (res.send) "Welcome to Favorite Page"
   3-the third rout is: "errorHandler" with a method of "get" and Endpoint ('/error'). this will be show to the client specifiec message related to specifiec status, in this case I dealt with two status(500,404).
   4-the fourth rout is:"trendingHandler" with a method of "get" and Endpoint ('/trending'). this will be send a request to the API and get the data from it then reshaped it in my server and send it to the client.
   5-the fifth rout is:"searchMoviesHandler" with a method of "get" and Endpoint ('/search'). this one same as the fourth rout but API req is specific request not in general and based on that the response of my server to the client also will be specifiec.
   6-the sixth rout is:"populerHandler" with a method of "get" and Endpoint ('/populerHandler'). this one specific kind of the fourth rout: just I mention specific rout that is called populer movies that I intersted in it.
   7-the last rout is:"planeSearchMoviesHandler" with a method of "get" and Endpoint ('/searchMovies'). this one specific kind of the fifth rout: just I mention specific rout that is called Plane movies.


   