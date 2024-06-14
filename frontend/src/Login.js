import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import logo from "./img/bridepng.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "1" && password === "1") {
      window.location.assign("/navcustomer");
    } else {
      setError("Usernama atau Password Salah!");
    }
  };

  return (
    <div className="registration-page">
      <form className="registration-form">
        <h2 className="modal-title">Login</h2>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required-asterisk">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required-asterisk">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleLogin}>
          Sign In
        </button>
        <a href="/login" className="login-btn">
          Login Dengan Google
        </a>
      </form>
      <div className="image-container">
        <img src={logo} alt="Wedding illustration" className="side-image" />
      </div>
    </div>
  );
};

export default Login;
