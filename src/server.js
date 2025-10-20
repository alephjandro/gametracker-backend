import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); 

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Bienvenido a GameTracker API 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});