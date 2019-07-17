"use strict";
//--------- Get environment variable ------
require('dotenv').config({ silent: true });
const ENV = process.env.NODE_ENV || "development";
//--------- Deps --------------------------
const http = require("http");
const express = require("express");
const path = require("path");
// Dev utilities
const bodyParser = require("body-parser");
const morgan = require('morgan');
//--------- Deps ends ---------------------

//----------Create express app-------------
const app = express();
const httpServer = http.createServer(app);
// middlewares setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));
if (ENV == "development") {// If in dev mode, enable cors for angular to talk to server
  const cors = require('cors');

  var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  };

  app.use(cors(corsOptions));
}
//----------- api setup -------------------
app.use('/api', require("./src/api"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use(function (err, req, res, next) {
  console.log("error occured:", err);
  res.status(err.status || 500);
  res.json(err.errors);
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Server running at localhost:' + process.env.PORT || 3000);
});