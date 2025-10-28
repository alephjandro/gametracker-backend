const express = require('express');
const router = express.Router();
const {getAllGames, getGameByID, updateGame} = require('../controllers/gamesController');
const {createGame} = require('../controllers/gamesController');

router.get('/', getAllGames);   
router.get('/:id', getGameByID);
router.post('/', createGame);
router .put('/:id', updateGame);
module.exports = router;