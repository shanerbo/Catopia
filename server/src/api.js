"use strict";
const express = require('express');
const router = express.Router();

module.exports = (dbHelper) => {
  router.post('/signin', (req, res) => {
    res.json("signing in");
  });
  router.post('/signup', (req, res) => {
    res.json("signing up");
  });
  return router;
}