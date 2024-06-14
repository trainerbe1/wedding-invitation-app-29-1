import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./KelolaJadwal.css";
import logo from "../img/back.png";

function KelolaJadwal() {
  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [manualDate, setManualDate] = useState("2020-10-10");
  const [manualTime, setManualTime] = useState("12:00");
  const [tempDate, setTempDate] = useState(manualDate);
  const [tempTime, setTempTime] = useState(manualTime);

  const handleButtonClick = () => {
    window.history.back();
  };

  const MoveToBuatJadwal = () => {
    window.location.assign("buatjadwal");
  };

  const handleToggleChange = () => {
    setIsCountdownActive(!isCountdownActive);
  };

  const openModal = () => {
    setTempDate(manualDate);
    setTempTime(manualTime);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveManualCountdown = () => {
    setManualDate(tempDate);
    setManualTime(tempTime);
    setIsModalOpen(false);
  };

  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Kelola Undangan</p>
        <button className="idcs">JJ</button>
      </div>
      <hr />
      <button className="button-kelola-back" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <div className="content">
        <div className="form-container">
          <label className="label">
            Aktifkan hitung mundur otomatis (non-aktifkan untuk atur secara
            manual)
          </label>
          <div className="toggle-container">
            <input
              type="checkbox"
              id="toggle"
              className="toggle"
              checked={isCountdownActive}
              onChange={handleToggleChange}
            />
            <label htmlFor="toggle"></label>
          </div>
        </div>

        {!isCountdownActive && (
          <div className="manual-countdown-container">
            <label className="label">Atur hitung mundur manual</label>
            <input
              type="text"
              className="input"
              value={`${manualDate} ${manualTime}`}
              size="20"
              readOnly
            />
            <button className="atur-button" onClick={openModal}>
              Atur Manual
            </button>
          </div>
        )}

        <div className="buat-jadwal-container">
          <button className="simpan-button" onClick={MoveToBuatJadwal}>
            <FontAwesomeIcon icon={faPlus} className="button-icon" />
            Buat Jadwal
          </button>
          <h3>Jadwal Acara</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Atur Waktu Hitung Mundur</h2>
            <div className="modal-form">
              <label>
                Tanggal
                <input
                  type="date"
                  value={tempDate}
                  onChange={(e) => setTempDate(e.target.value)}
                />
              </label>
              <label>
                Jam
                <input
                  type="time"
                  value={tempTime}
                  onChange={(e) => setTempTime(e.target.value)}
                />
              </label>
              <div className="modal-buttons">
                <button className="close-button" onClick={closeModal}>
                  Tutup
                </button>
                <button className="save-button" onClick={saveManualCountdown}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KelolaJadwal;
