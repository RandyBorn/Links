import React, { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: 8 }}
      />
      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={{ marginRight: 8 }}
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
// This component renders a form to add a new book with title and author fields.
