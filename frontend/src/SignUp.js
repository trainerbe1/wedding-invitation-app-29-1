import React, { useState } from "react";
import "./SignUp.css";
import logo from "./img/bridepng.png";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // State for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "password" || name === "confirmPassword") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan Konfirmasi Password tidak cocok");
      return;
    }
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="registration-page">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="modal-title">Pendaftaran</h2>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <div className="form-group">
          <label htmlFor="name">
            Nama <span className="required-asterisk">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required-asterisk">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Konfirmasi Password <span className="required-asterisk">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Konfirmasi Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Buat Akun
        </button>
        <a href="/login" className="login-btn">
          Sudah Punya Akun
        </a>
      </form>
      <div className="image-container">
        <img src={logo} alt="Wedding illustration" className="side-image" />
      </div>
    </div>
  );
}

export default SignUp;
