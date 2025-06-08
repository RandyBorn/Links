import express from "express";

import auth from "../middleware/auth.js";
import Book from "../models/Book.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const books = await Book.find({ userId: req.user.id });
  res.json(books);
});

router.post("/", auth, async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res
      .status(400)
      .json({ error: "Titel und Autor sind erforderlich." });
  }

  try {
    const book = await Book.create({ title, author, userId: req.user.id });
    res.status(201).json(book);
  } catch (err) {
    console.error("Fehler beim Erstellen des Buches:", err.message);
    res.status(500).json({ error: "Serverfehler beim Hinzufügen des Buches." });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.sendStatus(204);
});
export default router;
