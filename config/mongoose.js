const mongoose = require('mongoose');
//connect to thedatabase
mongoose.connect('mongodb://localhost/Codeial_db');
//check connection successful
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connection to the db'));
//up and running print message
db.once('open', function(){
    console.log('Successfuly connected to the database');
})

module.exports = db;