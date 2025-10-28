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

const getGameByID = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) {
            return res.status(404).json({ message: 'Juego no encontrado' })
        }
        res.json(game);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el juego' });
    }
};

const updateGame = async (req, res) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGame) {
            return res.status(404).json({ message: 'Juego no encontrado' });
        }
        res.json(updatedGame);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el juego' });
    }
};

const deleteGame = async (req, res) => {
    try {
        const deletedGame = await Game.findByIdAndDelete(req.params.id);
        if (!deletedGame) {
            return res.status(404).json({ message: 'Juego no encontrado' });
        }
        res.json({ message: 'Juego eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el juego' });
    }


}

module.exports = { getAllGames, createGame, getGameByID, updateGame, deleteGame };