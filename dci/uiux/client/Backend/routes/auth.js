import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, password: hashed });
    res.status(201).json({ message: "Benutzer erstellt" });
  } catch {
    res.status(400).json({ error: "Benutzer existiert bereits" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Ungültige Anmeldedaten" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});
export default router;
