const express = require('express');
const bodyParser = require('body-parser')
const allRoutes = require('./routes/allRoutes');




const app = express();

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})
app.use(bodyParser.json());

app.use(allRoutes);

app.use((error,req,res,next) => {
    res.status(error.status).json(error)
})

app.listen(9003);
