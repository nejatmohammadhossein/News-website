const express = require('express');
const body = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const app = express();

const { urlencoded } = require('body-parser');
const { userInfo } = require('os');
const { doesNotMatch } = require('assert');
const { assert } = require('console');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = class Application{
    constructor(){
        this.setupExpress();
        this.setupMongooseConnection();
        this.setupConfig();
        this.setupRoutes();


    }
    setupExpress(){
        
        const server = http.createServer(app);
        app.listen(3000, ()=>{
            console.log("Server is running ...");
        })
    }
    setupMongooseConnection(){
        mongoose.connect('mongodb://localhost/my_database');
    }
    setupConfig(){
        app.use(body.urlencoded({ extended: false }));
        app.use(body.json());
        app.use(function (req, res, next) {
            //Enabling CORS
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
            next();
        });
    }

    setupRoutes(){
        app.use(require('./routes/index').default);
    }
}
