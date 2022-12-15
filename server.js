// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
// const express = require('express');
import express from 'express';

// Start up an instance of app

const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

const server = app.listen(port, listening);

function listening(){
    console.log('server is running');
    console.log(`server is running on ${port}`);
}

// Add a GET route that returns the projectData object in your server code 

app.get('/mostRecent',mostRecent);

function mostRecent( request, response){
    response.send(projectData);
}

// Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
// The POST route should anticipate receiving three pieces of data from the request body
// temperature
// date
// user response
// Make sure your POST route is setup to add each of these values with a key to projectData.


app.post('/addMostRecentData', addMostRecentData)

function addMostRecentData (req,res){

    newEntry = {
        temp: req.body.temp,
        content: req.body.userFeelings,
        date:req.body.newDate
    
    }

    projectData.push(newEntry)
    res.send(projectData)
    console.log(data)
}




