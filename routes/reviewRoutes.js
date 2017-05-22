const express = require('express');
const reviewController = require('../controller/yilpController');

const yilpRoutes = express.Router();

reviewRoutes.get('/',reviewController.index);

module.exports = reviewRoutes;