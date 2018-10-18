// SERVER REQUIRE
const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// DECLARE MAIN APP
const app = express();

// Use MIDDLEWARE
app.use(bodyParser.json());

