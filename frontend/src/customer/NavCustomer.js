import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavCustomer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelopeOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function NavCustomer() {
  return (
    <>
      <div>
        <section className="container-customer">
          <div className="title">
            <Link to={"/navcustomer"} className="title">
              <p>Wedding</p>
              <p>Us</p>
            </Link>
          </div>
          <div className="fiturr">
            <Link className="fitur-customer" to={"/navcustomer"}>
              <div className="fitur-child">
                <div className="icon">
                  <FontAwesomeIcon icon={faHome} />
                </div>
                <div>Dasboard</div>
              </div>
            </Link>
          </div>
          <div className="fiturr">
            <Link className="fitur-customer" to={"/navcustomer/undangan"}>
              <div className="fitur-child">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </div>
                <div>Undangan</div>
              </div>
            </Link>
          </div>
          <div className="fiturr">
            <Link className="fitur-customer" to={"navcustomer/customerservice"}>
              <div className="fitur-child">
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>Customer Service</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
      <Outlet />
    </>
  );
}

export default NavCustomer;
