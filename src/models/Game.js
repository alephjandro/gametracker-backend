import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },     
  platform: { type: String, default: "PC" },   
  rating: { type: Number, min: 0, max: 10, default: 0 }, 
  createdAt: { type: Date, default: Date.now }  
});


const Game = mongoose.model("Game", gameSchema);

export default Game;
