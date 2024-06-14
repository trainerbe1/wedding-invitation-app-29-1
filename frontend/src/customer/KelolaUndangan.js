import React from "react";
import logo from "../img/back.png";
import "./KelolaUndangan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faUserPlus,
  faChildren,
  faPalette,
  faGear,
  faBook,
  faAddressBook,
  faQuoteLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function KelolaUndangan() {
  const handleButtonClick = () => {
    // Navigate to the previous page
    window.history.back();
  };

  const MoveToKelolaPengantin = () => {
    window.location.assign("KelolaPengantin");
  };

  const MoveToKelolaBukuTamu = () => {
    window.location.assign("kelolabukutamu");
  };
  const MoveToKelolaQute = () => {
    window.location.assign("kelolaquote");
  };
  const MoveToKelolaJadwal = () => {
    window.location.assign("kelolajadwal");
  };
  const MoveToKelolaSettings = () => {
    window.location.assign("kelolasetting");
  };

  const MoveToKelolaRSVP = () => {
    window.location.assign("kelolarsvp");
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
      <section className="kelola">
        <div className="container-kelola">
          <div className="container-mempelai">
            <p className="nama-mempelai">Yono & Susanti</p>
            <p>
              <FontAwesomeIcon icon={faLink} /> &nbsp;
              <Link className="link-web">
                https://weddingUs.com/Yono-Susanti
              </Link>
            </p>
            <div className="row container-list-hadir">
              <div className="col-3">
                <p>0</p>
                <p className="list-hadir">Tamu</p>
              </div>
              <div className="col-3">
                <p>0</p>
                <p className="list-hadir">Akan Hadir</p>
              </div>
              <div className="col-3">
                <p>0</p>
                <p className="list-hadir">Tidak hadir</p>
              </div>
              <div className="col-3">
                <p>0</p>
                <p className="list-hadir">Ucapan</p>
              </div>
            </div>
            <button className="btn-add-pengelola">
              <FontAwesomeIcon icon={faUserPlus} />
              &nbsp; Tambah Pengelola
            </button>
          </div>
          <div className="container-fitur-pengelola">
            <div className="row">
              <button
                className="col-4 btn-fitur-pengelola"
                onClick={MoveToKelolaPengantin}
              >
                <FontAwesomeIcon icon={faChildren} className="icon-fitur" />
                <p>Pengantin</p>
              </button>
              <button className="col-4 btn-fitur-pengelola">
                <FontAwesomeIcon icon={faPalette} className="icon-fitur" />
                <p>Tema</p>
              </button>
              <button
                className="col-4 btn-fitur-pengelola"
                onClick={MoveToKelolaJadwal}
              >
                <FontAwesomeIcon icon={faCalendarDays} className="icon-fitur" />
                <p>Jadwal</p>
              </button>
            </div>
            <div className="row">
              <button
                className="col-4 btn-fitur-pengelola"
                onClick={MoveToKelolaSettings}
              >
                <FontAwesomeIcon icon={faGear} className="icon-fitur" />
                <p>Pengaturan</p>
              </button>
              <button
                className="col-4 btn-fitur-pengelola"
                onClick={MoveToKelolaBukuTamu}
              >
                <FontAwesomeIcon icon={faBook} className="icon-fitur" />
                <p>Buku Tamu</p>
              </button>
              <button className="col-4 btn-fitur-pengelola">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  onClick={MoveToKelolaRSVP}
                  className="icon-fitur"
                />
                <p>RVSP</p>
              </button>
            </div>
            <div className="row">
              <div className="col-4 btn-fitur-pengelola-e"></div>
              <button
                className="col-4 btn-fitur-pengelola"
                onClick={MoveToKelolaQute}
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="icon-fitur" />
                <p>Quote</p>
              </button>
              <div className="col-4 btn-fitur-pengelola-e"></div>
            </div>
            <div className="row">
              <button className="col-12 send-fitur">
                <FontAwesomeIcon icon={faPaperPlane} className="icon-fitur" />
                <p>Send</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KelolaUndangan;
