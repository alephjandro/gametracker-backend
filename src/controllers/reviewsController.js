const Review = require('../models/Review');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('juegoId');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reseñas' });
    }
};

const getReviewByGame = async (req, res) => {
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

module .exports = {getAllReviews, getReviewByGame, createReview}

