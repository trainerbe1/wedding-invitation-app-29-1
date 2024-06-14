import React from "react";
import "./KelolaPengantin.css";
import avatar from "../img/nikah.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/back.png";

function KelolaPengantin() {
  const handleButtonClick = () => {
    // Navigate to the previous page
    window.history.back();
  };
  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Kelola Pengatin</p>
        <button className="idcs">JJ</button>
      </div>
      <hr />
      <button className="button-kelola-back" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <div className="content">
        <div className="pengantin">
          <div className="avatar-section">
            <img src={avatar} alt="Avatar" className="avatar" />
            <button className="pilih-avatar">Pilih Avatar</button>
            <div className="button-group">
              <button className="upload-gambar">
                <FontAwesomeIcon icon={faUpload} /> Upload Gambar
              </button>
              <button className="hapus">
                <FontAwesomeIcon icon={faTrashAlt} /> Hapus
              </button>
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label className="label">
                Nama mempelai 1<span className="asterisk">*</span>
              </label>
              <input type="text" placeholder="Dayat Hibatullah" />
            </div>
            <div className="form-group">
              <label className="label">
                Subtitle<span className="asterisk">*</span>
              </label>
              <input type="text" placeholder="Putra Bpk. Irwanto & Nengsih" />
            </div>
            <div className="form-group">
              <label className="label">Akun Instagram (opsional)</label>
              <input
                type="text"
                placeholder="https://instagram.com/weddingus"
              />
            </div>
          </div>
        </div>
        <div className="pengantin">
          <div className="avatar-section">
            <img src={avatar} alt="Avatar" className="avatar" />
            <button className="pilih-avatar">Pilih Avatar</button>
            <div className="button-group">
              <button className="upload-gambar">
                <FontAwesomeIcon icon={faUpload} /> Upload Gambar
              </button>
              <button className="hapus">
                <FontAwesomeIcon icon={faTrashAlt} /> Hapus
              </button>
            </div>
          </div>
          <div className="form-section">
            <div className="form-group">
              <label className="label">
                Nama mempelai 2<span className="asterisk">*</span>
              </label>
              <input type="text" placeholder="Dwiliyana Septimiranti" />
            </div>
            <div className="form-group">
              <label className="label">
                Subtitle<span className="asterisk">*</span>
              </label>
              <input
                type="text"
                placeholder="Putri Bpk. Reza Saputra & Violanita"
              />
            </div>
            <div className="form-group">
              <label className="label">Akun Instagram (opsional)</label>
              <input
                type="text"
                placeholder="https://instagram.com/weddingus"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="simpan-button">Simpan</button>
    </div>
  );
}

export default KelolaPengantin;
