const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    puntiacion: { type: Number, required: true, min: 1, max: 5 },
    textoReseña: { type: String },
    horasJugadas: { type: Number, default: 0 },
    dificultad: { type: String, enum: ['Fácil', 'Normal', 'Difícil'] },
    recomendariado: { type: Boolean},
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', gamesSchema);