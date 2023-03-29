const express = require('express');
const router = express.Router();
const recommendationsCtrl = require('../controllers/recommendations');


// router.get('/recommendations/new', recommendationsCtrl.new);
router.post('/recipes/:id', recommendationsCtrl.create);
router.delete('/recommendations/:id', recommendationsCtrl.delete);

module.exports = router;