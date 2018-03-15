//Imports
const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

const accounts = require('./routes/accounts/accounts.js');

let store = { //DataBase!
    accounts:[]
};

//Instantiation
let app = express();


//Middleware
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());

app.use((req,res,next)=>{
    req.store = store; //Assign database reference to request object
    next();
})

//Routes
app.use('/accounts',accounts);


//ErrorHandlers


//Server bootup
app.listen(3000,()=>{
    console.log('Server running on port 3000');
});