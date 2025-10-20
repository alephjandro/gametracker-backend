import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import gamesRouter from "./routes/games.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Bienvenido a GameTracker API");
});

app.use("/api/games", gamesRouter);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar MongoDB:", error.message));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
