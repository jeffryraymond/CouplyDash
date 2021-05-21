const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

// Defining routes - localhost:5000/api/v1..
router.get('/analytics', controllers.getAnalytics);
router.get('/hello', controllers.hello);

module.exports = router;
