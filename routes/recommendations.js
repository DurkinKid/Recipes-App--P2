const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../controllers/recommendations');

router.post('/recipes/:id/recommendations', recommendationsCtrl.create);

module.exports = router;