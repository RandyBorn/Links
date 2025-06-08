import React, { useEffect, useState } from "react";
import { fetchBooks, addBook, deleteBook } from "../api";

export default function BookList({ token }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    setError("");
    try {
      const data = await fetchBooks(token);
      setBooks(data);
    } catch {
      setError("Fehler beim Laden der Bücher");
    }
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!title || !author) return;
    setError("");
    try {
      await addBook(token, { title, author });
      setTitle("");
      setAuthor("");
      loadBooks();
    } catch {
      setError("Fehler beim Hinzufügen des Buches wegen der korrektur");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteBook(token, id);
      loadBooks();
    } catch {
      setError("Fehler beim Löschen des Buches");
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ backgroundColor: "" }}>Meine Bücher</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {books.map((b) => (
          <li key={b._id}>
            <strong>{b.title}</strong> von {b.author}{" "}
            <button onClick={() => handleDelete(b._id)}>Löschen</button>
          </li>
        ))}
      </ul>
      <form style={{ padding: "2rem", margin: "2rem" }} onSubmit={handleAdd}>
        <input
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button style={{ color: "green" }} type="submit">
          Buch hinzufügen
        </button>
      </form>
    </div>
  );
}
