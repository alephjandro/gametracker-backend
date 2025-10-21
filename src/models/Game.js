import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, default: "" },
  platform: { type: String, default: "PC" },
  releaseYear: { type: Number },
  developer: { type: String, default: "" },
  coverImage: { type: String, default: "" },
  description: { type: String, default: "" },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", gameSchema);
export default Game;
