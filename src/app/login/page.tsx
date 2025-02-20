"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    const success = login(username, password);
    if (!success) {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <div className="box">
        <h1 className="title is-3">Login</h1>

        {error && <p className="has-text-danger">{error}</p>}

        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="button is-primary" onClick={handleLogin}>
          Login
        </button>

        <p className="mt-3">
          Don&apos;t have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}
