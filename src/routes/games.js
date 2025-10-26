const express = require('express');
const router = express.Router();
const {getAllGames} = require('../controllers/gamesController');

router.get('/', getAllGames);   

const {createGame} = require('../controllers/gamesController');
router.post('/', createGame);

module.exports = router;