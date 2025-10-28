const express = require('express');
const router = express.Router();
const {getAllReviews, getReviewByGame} = require('../controllers/reviewsController');

router.get('/', getAllReviews);   
router.get('/game/:juegoId', getReviewByGame);