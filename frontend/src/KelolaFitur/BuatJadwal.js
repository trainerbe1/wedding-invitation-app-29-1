import React, { useState } from "react";
import "./BuatJadwal.css";
import logo from "../img/back.png";

function BuatJadwal() {
  const [formData, setFormData] = useState({
    namaAcara: "",
    namaLokasi: "",
    alamat: "",
    tanggalAcara: "",
    jamMulai: "",
    jamSelesai: "",
    linkMap: "",
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
    console.log("Form data submitted:", formData);
  };

  const handleButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="invitation-page">
      <button className="button-inv" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <form className="invitation-form" onSubmit={handleSubmit}>
        <h2 className="modal-title">Buat Jadwal</h2>
        <div className="form-group">
          <label htmlFor="namaAcara" className="Jadwal">
            Nama Acara
          </label>
          <input
            type="text"
            id="namaAcara"
            name="namaAcara"
            placeholder="Nama Acara"
            value={formData.namaAcara}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="namaLokasi" className="Jadwal">
            Nama Lokasi
          </label>
          <input
            type="text"
            id="namaLokasi"
            name="namaLokasi"
            placeholder="Nama Lokasi"
            value={formData.namaLokasi}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="alamat" className="Jadwal">
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Alamat"
            value={formData.alamat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tanggalAcara" className="Jadwal">
            Tanggal Acara
          </label>
          <input
            type="date"
            id="tanggalAcara"
            name="tanggalAcara"
            value={formData.tanggalAcara}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jamMulai" className="Jadwal">
            Jam Mulai
          </label>
          <input
            type="time"
            id="jamMulai"
            name="jamMulai"
            value={formData.jamMulai}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jamSelesai" className="Jadwal">
            Jam Selesai
          </label>
          <input
            type="time"
            id="jamSelesai"
            name="jamSelesai"
            value={formData.jamSelesai}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkMap" className="Jadwal">
            Link Map (Opsional)
          </label>
          <input
            type="url"
            id="linkMap"
            name="linkMap"
            placeholder="Link Map (Opsional)"
            value={formData.linkMap}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Simpan Jadwal
        </button>
      </form>
    </div>
  );
}

export default BuatJadwal;
