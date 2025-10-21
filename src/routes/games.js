import express from "express";
import Game from "../models/Game.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    console.error("GET /api/games error:", error);
    res.status(500).json({ mensaje: "Error al obtener los juegos" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (!game) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json(game);
  } catch (error) {
    console.error("GET /api/games/:id error:", error);
    res.status(400).json({ mensaje: "ID de juego inválido", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, genre, platform, releaseYear, developer, coverImage, description, completed } = req.body;
    const newGame = new Game({ title, genre, platform, releaseYear, developer, coverImage, description, completed });
    const saved = await newGame.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("POST /api/games error:", error);
    res.status(400).json({ mensaje: "Error al crear el juego", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const updatedGame = await Game.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    if (!updatedGame) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json(updatedGame);
  } catch (error) {
    console.error("PUT /api/games/:id error:", error);
    res.status(400).json({ mensaje: "Error al actualizar el juego", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await Game.findByIdAndDelete(id);
    if (!deletedGame) return res.status(404).json({ mensaje: "Juego no encontrado" });
    res.json({ mensaje: "Juego eliminado correctamente" });
  } catch (error) {
    console.error("DELETE /api/games/:id error:", error);
    res.status(400).json({ mensaje: "Error al eliminar el juego", error: error.message });
  }
});

export default router;
