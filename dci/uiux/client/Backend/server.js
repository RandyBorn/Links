import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
console.log("MONGODB_URI:", process.env.MONGODB_URI);
// Import routes
import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB verbunden"))
  .catch((err) => console.error("MongoDB-Verbindungsfehler:", err));

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
