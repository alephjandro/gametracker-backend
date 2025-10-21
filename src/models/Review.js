import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  score: { type: Number, min: 1, max: 5, required: true },
  text: { type: String, default: "" },
  hoursPlayed: { type: Number, default: 0 },
  difficulty: { type: String, default: "" },
  wouldRecommend: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
