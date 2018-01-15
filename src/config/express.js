const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../api/routes");
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(routes);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;