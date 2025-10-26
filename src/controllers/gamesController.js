const Game = require('../models/Game');

const getAllGames = async (req, res) => {
    try {
        const games = await Game.find()
        res.json(games)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los juegos'});
    }

};

const createGame = async (req, res) => {
    try {
        const game = new Game(req.body)
        const savedGame = await game.save()
        res.status(201).json(savedGame)
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el juego' })
    }

};

module.exports = { getAllGames, createGame };