import React, { useState } from "react";
// import "./KelolaRSVP.css";
import logo from "../img/back.png";

function KelolaRSVP() {
  const [rsvpEnabled, setRsvpEnabled] = useState(true);
  const [maxGuests, setMaxGuests] = useState(6);
  const [guestList, setGuestList] = useState([
    { name: "Sugiono", people: 4, status: "Hadir" },
  ]);
  const [totalGuests, setTotalGuests] = useState(20);

  const handleButtonClick = () => {
    // Navigate to the previous page
    window.history.back();
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

      <div className="rsvp-section">
        <h2>RSVP</h2>
        <div className="rsvp-toggle">
          <label>RSVP (Konfirmasi Kehadiran Tamu)</label>
          <div className="toggle-switch">
            <input
              type="checkbox"
              checked={rsvpEnabled}
              onChange={() => setRsvpEnabled(!rsvpEnabled)}
            />
            <span className="slider"></span>
          </div>
        </div>
        <div className="max-guests">
          <p>Max Orang Per Undangan</p>
          <input
            type="number"
            value={maxGuests}
            onChange={(e) => setMaxGuests(Number(e.target.value))}
          />
        </div>
      </div>

      {rsvpEnabled && (
        <>
          <div className="attendance-summary">
            <div className="circle-chart">
              <div className="circle">100%</div>
            </div>
            <div className="estimated-total">
              <p>Estimasi Jumlah Orang</p>
              <p className="total">{totalGuests}</p>
            </div>
          </div>

          <div className="guest-list">
            <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Orang</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {guestList.map((guest, index) => (
                  <tr key={index}>
                    <td>{guest.name}</td>
                    <td>{guest.people}</td>
                    <td>
                      <span
                        className={
                          guest.status === "Hadir"
                            ? "status hadir"
                            : "status tidak-hadir"
                        }
                      >
                        {guest.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default KelolaRSVP;
