import React from "react";
import "./Dasboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import {
  faQrcode,
  faHeart,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

function Dasboard() {
  const MoveToUndangan = () => {
    window.location.assign("/navcustomer/undangan");
  };

  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Dasboard</p>
        <button className="id">JJ</button>
      </div>
      <hr />
      <section className="create-undangan">
        <div className="container-create-undangan">
          <p>
            Belum punya udangan? mau bikin undangan online tapi tanpa biaya ?
          </p>
          <p>Wedding Us Solusinya...</p>
          <p>
            Yuk Bikin Undangan Online Kamu &nbsp;
            <FontAwesomeIcon icon={faSmile} />
          </p>
          <button onClick={MoveToUndangan}>
            <FontAwesomeIcon icon={faEnvelopeOpen} className="letter" />
            Buat Undangan
          </button>
        </div>
      </section>
      <section className="undanganmu">
        <div className="row conatiner-undanganmu">
          <div className="col-5 undangan-have">
            <p className="und">Undangan</p>
            <p className="und">0</p>
          </div>
          <div className="col-1"></div>
          <button className="col-6 qr">
            <div className="row">
              <div className="col-2">
                <FontAwesomeIcon icon={faQrcode} className="qrcode" />
              </div>
              <div className="col-8">
                <p className="textbuka">Buka QR Code Scanner</p>
                <p className="textscan">
                  Scan undangan tamu saat check-in/check-out
                </p>
              </div>
            </div>
          </button>
          <p className="und-milik">Undangan Milikmu</p>
          <p className="und-pernah">Undangan yang pernah di buat</p>
          <div className="col-12">belum ada undangan</div>
        </div>
      </section>
      <section className="footer">
        <div className="container-footer">
          <p>
            Made with <FontAwesomeIcon icon={faHeart} className="iconheart" />
            &nbsp;for yoru moment | powered by Wedding Us
          </p>
        </div>
      </section>
    </div>
  );
}

export default Dasboard;
