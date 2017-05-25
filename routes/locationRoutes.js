const express = require('express');
const locationController = require('../controller/locationController');

const locationRoutes = express.Router();

locationRoutes.get('/',locationController.images);
locationRoutes.get('/reviews',locationController.reviews)

module.exports = locationRoutes;