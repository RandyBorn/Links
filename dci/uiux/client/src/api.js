const API_URL = "http://localhost:5000/api";

export async function register(username, password) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Fehler bei der Registrierung");
  }
  return res.json();
}

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Fehler beim Login");
  }
  return res.json();
}

export async function fetchBooks(token) {
  const res = await fetch(`${API_URL}/books`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Fehler beim Laden der Bücher");
  return res.json();
}

export async function addBook(token, book) {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });

  return res.json();
}

export async function deleteBook(token, id) {
  const res = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Fehler beim Löschen des Buches");
}
