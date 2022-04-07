const express = require ("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./config/router')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);



app.listen(3000, () =>{
    console.log("Servidor está on");
})