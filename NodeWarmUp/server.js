const express = require("express"); //framework to bootstrap minimal server
const cors = require('cors');
const app = express(); // ""
const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
const router = require("./app/routes");

const port = process.env.PORT || 8080;

// start middle-ware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



// set up CORS
app.use((req, res, next) => {
   
    res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Cookie, x-access-token, Authorization"
         );
         //res.header('Access-Control-Allow-Credentials', true);
        next();
});

app.use(router);

app.listen(port,
    () => {
        console.log(`Express started on port ${port}`);
    })