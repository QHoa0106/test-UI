"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      const success = register(username, password);
      if (success) {
        router.push("/login");
      } else {
        setError("Username already exists!");
      }
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="box">
        <h1 className="title is-3">Register</h1>

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

        <button className="button is-primary" onClick={handleRegister}>
          Register
        </button>

        <p className="mt-3">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
