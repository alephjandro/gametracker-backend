
import express from "express";
import Game from "../models/Game.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 }); 
    res.json(games);
  } catch (error) {
    console.error("GET /api/games error:", error);
    res.status(500).json({ message: "Error al obtener juegos" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { title, platform, rating } = req.body; 
    const newGame = new Game({ title, platform, rating });
    const saved = await newGame.save(); 
    res.status(201).json(saved); 
  } catch (error) {
    console.error("POST /api/games error:", error);
    res.status(400).json({ message: "Error al crear juego", error: error.message });
  }
});

export default router;
