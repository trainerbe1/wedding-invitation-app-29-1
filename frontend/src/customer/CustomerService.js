import React from "react";
import "./CustomerService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faClock,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

function CustomerService() {
  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Customer Service</p>
        <button className="idcs">JJ</button>
      </div>
      <hr />
      <section className="title-customer-service">
        <p>
          Segera konsultasikan kepada kami kebutuhan anda, Tim kami akan
          membantu anda.
        </p>
        <p>Hubungi kami Disini</p>
        <FontAwesomeIcon icon={faArrowDown} />
      </section>
      <section className="service">
        <div className="container-service row">
          <div className="wa col-3 cs-list">
            <FontAwesomeIcon icon={faWhatsappSquare} className="cs-icon" />
            <p>Whatsapp</p>
            <p>+62 85761172766</p>
          </div>
          <div className="col-1"></div>
          <div className="ig col-3 cs-list">
            <FontAwesomeIcon icon={faInstagramSquare} className="cs-icon" />
            <p>Instagram</p>
            <p>Wedding_Us</p>
          </div>
          <div className="col-1"></div>

          <div className="email col-3 cs-list">
            <FontAwesomeIcon icon={faEnvelope} className="cs-icon" />

            <p>Email</p>
            <p>WeddingUs@gmail.com</p>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="jam-operasional">
          <p>
            {" "}
            <FontAwesomeIcon icon={faClock} />
            &nbsp;Jam Operasional Layanan Customer Service
          </p>
          <p className="jadwal">Senin - Jumat</p>
          <p className="jadwal">8:00 - 17:00</p>
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

export default CustomerService;
