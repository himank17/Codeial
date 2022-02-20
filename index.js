const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
//code for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo'); 
const mongoose = require('mongoose');

//use express router 
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//mongo store iss used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    //TODO change the secret before deployment in productction mode
    secret: 'blahsomething',
    resave: true,
    savedUnitialized: true,
    cookie:{
        maxAge: (1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://localhost/Codeial_db',
            dbName: 'db',
            autoRemove:'native'
        },
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`); //interpolation
    }
    console.log(`Server is running on port: ${port}`);
});