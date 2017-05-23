const express = require('express');
const reviewController = require('../controller/reviewController');

const reviewRoutes = express.Router();

reviewRoutes.get('/',reviewController.index);

module.exports = reviewRoutes;