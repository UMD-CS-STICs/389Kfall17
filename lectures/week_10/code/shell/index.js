var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var Movie = require('./models/Movie');

// Load envirorment variables
dotenv.load();

// Setup Express App
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongo connection
mongoose.connect(process.env.MONGODB, {
	useMongoClient: true
});
mongoose.connection.on('error', function() {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

app.post('/movie', function(req, res) {
    // Create new movie


    // Save movie to database


});

app.delete('/movie/:id', function(req, res) {
    // Find movie by id

});

app.get('/movie', function(req, res) {
    // Get all movies

});

app.post('/movie/:id/review', function(req, res) {
    // Add a review

});

app.delete('/movie/:id/review/last', function(req, res) {
    // Delete last review

});


app.listen(3000, function() {
    console.log('App listening on port 3000!');
})
