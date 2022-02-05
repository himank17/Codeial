const express = require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
//use express router 
app.use(express.urlencoded());
app.use(cookieParser());
app.use('/', require('./routes'));
app.use('/users', require('./routes'))
//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`); //interpolation
    }
    console.log(`Server is running on port: ${port}`);
});