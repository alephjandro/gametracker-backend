const Review = require('../models/Review');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reseñas' });
    }
};

const getReviewsByGame = async (req, res) => {
    try {
        const reviews = await Review.find({ juegoId: req.params.juegoId })
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reseñas del juego' });
    }   
}

const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la reseña' });
    }   
}

const updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedReview) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }
        res.json(updatedReview);
    }
    catch (error) {
        res.status(400).json({ message: 'Error al actualizar la reseña' });
    }
}

const deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Reseña no encontrada' });
        }
        res.json({ message: 'Reseña eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reseña' });
    }
}

module.exports = {getAllReviews, getReviewsByGame, createReview, updateReview, deleteReview}

