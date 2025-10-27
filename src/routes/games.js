const express = require('express');
const router = express.Router();
const {getAllGames, getGameByID} = require('../controllers/gamesController');

router.get('/', getAllGames);   
const {createGame} = require('../controllers/gamesController');
router.get('/:id', getGameByID);
router.post('/', createGame);
module.exports = router;