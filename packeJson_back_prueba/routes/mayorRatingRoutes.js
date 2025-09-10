const express = require('express');
const router = express.Router();

const { mayorRating } = require('../controllers/mayorRatingController');

router.get('/', mayorRating);

module.exports = router;