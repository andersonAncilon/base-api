const express = require('express');

const routes = express.Router();

const BlockController = require('./controllers/BlockController');

routes.post('/transaction', BlockController.store);

module.exports = routes;
