import React, { useState } from "react";
import "./BuatUndangan.css";
import logo from "../img/back.png";

function BuatUndangan() {
  const [formData, setFormData] = useState({
    judulUndangan: "",
    linkUndanganSuffix: "", // Updated to store only the editable part of the link
    namaMempelai1: "",
    namaMempelai2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const completeLinkUndangan = `https://weddingus.com/${formData.linkUndanganSuffix}`;
    console.log("Form data submitted:", {
      ...formData,
      linkUndangan: completeLinkUndangan,
    });
  };

  const handleButtonClick = () => {
    // Navigate to the previous page
    window.history.back();
  };

  return (
    <div className="invitation-page">
      <button className="button-inv" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <form className="invitation-form" onSubmit={handleSubmit}>
        <h2 className="modal-title">Buat Undangan</h2>
        <p className="description">
          Buat undanganmu dengan melengkapi data berikut!
        </p>
        <div className="form-group">
          <label htmlFor="judulUndangan">Judul Undangan</label>
          <input
            type="text"
            id="judulUndangan"
            name="judulUndangan"
            placeholder="Dayat & Dwi"
            value={formData.judulUndangan}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkUndangan">Link Undangan</label>
          <div className="link-undangan-wrapper">
            <span className="fixed-prefix">https://weddingus.com/</span>
            <input
              type="text"
              id="linkUndangan"
              name="linkUndanganSuffix"
              placeholder="dayat-dwi"
              value={formData.linkUndanganSuffix}
              onChange={handleChange}
              required
              className="link-undangan-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="namaMempelai1">Nama mempelai 1</label>
          <input
            type="text"
            id="namaMempelai1"
            name="namaMempelai1"
            placeholder="Dayat Hibatullah"
            value={formData.namaMempelai1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="namaMempelai2">Nama mempelai 2</label>
          <input
            type="text"
            id="namaMempelai2"
            name="namaMempelai2"
            placeholder="Dwiliyana Septimiranti"
            value={formData.namaMempelai2}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Simpan Undangan
        </button>
      </form>
    </div>
  );
}

export default BuatUndangan;
