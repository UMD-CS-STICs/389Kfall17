var mongoose = require('mongoose');

/*
In Java, our movie would look like this:

public Movie {
    private String title;
    private int year;
    private String genre;
    private Review[] reviews;
    
    ...
}
*/

var movieSchema = new mongoose.Schema({
    title: {},
    year: {},
    genre: {},
    reviews: []
});

var reviewSchema = new mongoose.Schema({
	rating: {},
	comment: {},
	author: {}
});

var Movie = mongoose.model('Movie', /* Which schema do we want to export? */);
module.exports = { /* What do we want to export? */ };
