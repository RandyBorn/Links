import React, { useState } from "react";
import { login, register } from "./api";
import BookList from "./components/BookList.jsx";

import "./index.css";

import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  function handleLogin(newToken, newUsername) {
    setToken(newToken);
    setUsername(newUsername);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUsername(null);
  }

  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <p>Hallo, {username}!</p>
      <Logout onLogout={handleLogout} />
      <BookList token={token} />
    </div>
  );
}
