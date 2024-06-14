import { Outlet, Link } from "react-router-dom";
import "./navigasi.css";

const Navigasi = () => {
  return (
    <>
      <section className="container-nav">
        <div className="row ">
          <div className="col-3">
            <Link to="/" className="li">
              <h1>
                <b>
                  <i>Wedding Us</i>
                </b>
              </h1>
            </Link>
          </div>
          <div className="col-5 navigasi-fitur">
            <a href="#home">Home</a>
            <a href="#fitur">Fitur</a>
            <a href="#tutor">Tutor</a>
            <a href="#sosial-media">Sosial Media</a>
          </div>
          <div className="col-4 navigasi-daftar-login">
            <Link to="/Login">
              <p className="login">Login</p>
            </Link>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Navigasi;
