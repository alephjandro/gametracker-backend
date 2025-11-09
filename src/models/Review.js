const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  puntuacion: { type: Number, required: true, min: 1, max: 5 },
  textoResena: { type: String, required: true },
  horasJugadas: { type: Number, default: 0 },
  dificultad: { type: String, enum: ['Fácil', 'Normal', 'Difícil'], default: 'Normal' },
  recomendaria: { type: Boolean, default: false }, 
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now }
});

reviewSchema.pre('findOneAndUpdate', function (next) {
  this.set({ fechaActualizacion: new Date() });
  next();
});

module.exports = mongoose.model('Review', reviewSchema);
