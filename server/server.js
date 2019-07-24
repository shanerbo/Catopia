"use strict";
//--------- Get environment variable ------
require('dotenv').config({ silent: true });
const ENV = process.env.NODE_ENV || "development";
//--------- Deps --------------------------
const http = require("http");
const express = require("express");
const path = require("path");
const formidableMiddleware = require('express-formidable');
// const multer = require('multer');
// Dev utilities
const bodyParser = require("body-parser");
const morgan = require('morgan');
//----------Setup DB-----------------------
const models = require("./models/index");
//----------upload file--------------------
// const GCPHelper = require("./lib/google-cloud-storage");
//----------Create express app-------------
const app = express();
const httpServer = http.createServer(app);
//--------- middlewares setup -------------
const passport = require("./lib/passport")(models.Users);
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(formidableMiddleware());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));
if (ENV == "development") {// If in dev mode, enable cors for angular to talk to server
  const cors = require('cors');

  app.use(cors());
}
//----------- api setup -------------------
app.use('/api', require("./src/api"));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use(function (err, req, res, next) {
  console.log("error occured:", err);
  res.status(err.status || 500);
  res.json(err);
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Server running at localhost:' + process.env.PORT || 3000);
});