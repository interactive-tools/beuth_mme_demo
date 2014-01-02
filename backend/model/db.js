var mongoose = require( 'mongoose' );

//Schema Definitions

var userSchema = new mongoose.Schema({
 name: { type: String, required: true }, 
 email: { type: String, required: true }, 
 gender: { type: String, required: false }
});

//Create Models from Schemas
mongoose.model( 'User', userSchema );


//COnnect Database
mongoose.connect( 'mongodb://localhost/rest_example' );

