const game = require('../models/Game');

const getAllGames = async (req, res) => {
    try {
        const games = await game.find()
        res.json(games)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los juegos'});
    }
};

module.exports = { getAllGames };