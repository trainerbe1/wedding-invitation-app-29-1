import React, { useState } from "react";
import "./KelolaBukuTamu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faShareAlt,
  faBars,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logo from "../img/back.png";

function KelolaBukuTamu() {
  const [guestList, setGuestList] = useState([
    "Yono dan keluarga",
    "Yono dan keluarga",
    "Yono dan keluarga",
    "Yono dan keluarga",
  ]);

  const handleButtonClick = () => {
    window.history.back();
  };

  const tambahTamu = () => {
    const namaTamuBaru = prompt("Masukkan nama tamu baru:");
    if (namaTamuBaru) {
      setGuestList([...guestList, namaTamuBaru]);
    }
  };

  const hapusTamu = (index) => {
    const newGuestList = [...guestList];
    newGuestList.splice(index, 1);
    setGuestList(newGuestList);
  };

  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Wedding Us</p>
        <button className="idcs">JJ</button>
      </div>

      <hr />
      <button className="button-kelola-back" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <h2 className="quote-title">Buku Tamu</h2>
      <div className="search-add-container">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Cari nama" className="search-input" />
        </div>

        <button className="add-guest-button" onClick={tambahTamu}>
          <FontAwesomeIcon icon={faPlus} /> Tambah Tamu
        </button>
      </div>
      <div className="guest-list">
        {guestList.map((guest, index) => (
          <div key={index} className="guest-item">
            <div className="guest-details">
              <p>{guest}</p>
              <p>1231452323</p>
            </div>
            <div className="guest-actions">
              <FontAwesomeIcon
                icon={faShareAlt}
                className="guest-action-icon"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="guest-action-icon"
              />
              {/* Tambahkan event handler untuk ikon "Hapus" */}
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="guest-action-icon"
                onClick={() => hapusTamu(index)}
              />
              <FontAwesomeIcon icon={faBars} className="guest-action-icon" />
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>
          Made with <span className="heart">♥</span> for your moment | powered
          by Wedding Us
        </p>
      </footer>
    </div>
  );
}

export default KelolaBukuTamu;
