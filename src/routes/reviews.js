import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error("GET /api/reviews error:", error);
    res.status(500).json({ mensaje: "Error al obtener las reseñas" });
  }
});

router.get("/game/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const reviews = await Review.find({ gameId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error("GET /api/reviews/game/:gameId error:", error);
    res.status(400).json({ mensaje: "ID de juego inválido", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { gameId, score, text, hoursPlayed, difficulty, wouldRecommend } = req.body;
    const newReview = new Review({ gameId, score, text, hoursPlayed, difficulty, wouldRecommend });
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("POST /api/reviews error:", error);
    res.status(400).json({ mensaje: "Error al crear la reseña", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = { ...req.body, updatedAt: Date.now() };
    const updated = await Review.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ mensaje: "Reseña no encontrada" });
    res.json(updated);
  } catch (error) {
    console.error("PUT /api/reviews/:id error:", error);
    res.status(400).json({ mensaje: "Error al actualizar la reseña", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ mensaje: "Reseña no encontrada" });
    res.json({ mensaje: "Reseña eliminada correctamente" });
  } catch (error) {
    console.error("DELETE /api/reviews/:id error:", error);
    res.status(400).json({ mensaje: "Error al eliminar la reseña", error: error.message });
  }
});

export default router;
