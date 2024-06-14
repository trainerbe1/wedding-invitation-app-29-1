import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faSliders,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Undangan.css";

function Undangan() {
  const MoveToBuatUndangan = () => {
    window.location.assign("navcustomer/buatundangan");
  };

  const MoveToKelola = () => {
    window.location.assign("navcustomer/kelolaundangan");
  };

  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Undangan</p>
        <button className="id">JJ</button>
      </div>
      <hr />
      <section className="btn-undangan">
        <button className="envelope-btn" onClick={MoveToBuatUndangan}>
          <div className="row">
            <div className="col-2">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="envelope" />
            </div>
            <div className="col-10">
              <p className="text-undangan">Buat Undangan baru</p>
              <p className="text-undangan-nikah">
                Buat undangan nikah baru untukmu atau temanmu
              </p>
            </div>
          </div>
        </button>
      </section>
      <section className="list-undangan">
        <div className="container-list-undangan row">
          <div className="col-4"></div>
          <div className="col-6"></div>
          <div className="col-2">
            <button className="btn-kelola" onClick={MoveToKelola}>
              <FontAwesomeIcon icon={faSliders} /> &nbsp; Kelola
            </button>
            <button className="btn-web">
              <FontAwesomeIcon icon={faGlobe} /> &nbsp; Web
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Undangan;
