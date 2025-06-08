import React, { useState } from "react";
import { login, register } from "./api";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      if (isRegister) {
        await register(username, password);
        alert("Registrierung erfolgreich! Bitte jetzt einloggen.");
        setIsRegister(false);
      } else {
        const data = await login(username, password);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        onLogin(data.token, username);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>{isRegister ? "Registrieren" : "Login"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Passwort"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegister ? "Registrieren" : "Login"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? "Bereits registriert? Login"
          : "Noch keinen Account? Registrieren"}
      </button>
    </div>
  );
}
