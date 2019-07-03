//--------- Get environment variable ------
require('dotenv').config({ silent: true });
const ENV = process.env.ENV || "development";

//--------- deps --------------------------
const http = require("http");
const express = require("express");
const path = require("path");
// utilities
const bodyParser = require("body-parser");
const morgan = require('morgan');

//----------set up DB----------------------
const dbHelper = require("./models/index");
//----------Create express app-------------
const app = express();
const httpServer = http.createServer(app);
// middlewares setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

// api setup
app.use('/api', require("./src/api")(dbHelper));


app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

httpServer.listen(process.env.PORT || 3000, () => {
  console.log('Server running at localhost:' + process.env.PORT || 3000);
});