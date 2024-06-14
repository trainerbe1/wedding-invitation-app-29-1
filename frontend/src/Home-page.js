import React from "react";
import "./HomePage.css";
import img1 from "./img/bride1.jpg";
import img2 from "./img/bride2.jpg";
import img3 from "./img/bride3.jpg";
import iphone from "./img/ip1.avif";
import undangan1 from "./img/undangan1.webp";
import undangan2 from "./img/undangan2.png";
import undangan3 from "./img/undangan3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClover,
  faPalette,
  faMusic,
  faQuoteLeft,
  faImages,
  faGear,
  faPaperPlane,
  faKissWinkHeart,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between slides in milliseconds
  };

  const MoveToDaftar = () => {
    window.location.assign("signup");
  };
  return (
    <div id="Homepage-body">
      <section className="opening" id="home">
        <div className="row">
          <div className="col-6 opening-text">
            <h2>
              <i>Platform</i>
            </h2>
            <h4>Undangan nikah Online</h4>
            <h4>
              <FontAwesomeIcon icon={faClover} />
              &nbsp; Buat Moment Pentingmu menjadi Lebih Baik&nbsp;
              <FontAwesomeIcon icon={faClover} />
            </h4>
            <h4>Ayo buat undangan versimu!!</h4>
            <div className="buttons">
              <button className="btn" onClick={MoveToDaftar}>
                <span></span>
                <p
                  data-start="good luck!"
                  data-text="Sekarang!"
                  data-title="Daftar"
                ></p>
              </button>
            </div>
          </div>
          <div className="col-6">
            <img src={img1} className="img1 img-opening" alt="img1"></img>
            <img src={img2} className="img2 img-opening" alt="img1"></img>
            <img src={img3} className="img3 img-opening" alt="img1"></img>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1717697333">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="fitur-u-get" id="fitur">
        <div className="container-fitur-u-get">
          <h1>
            <i>Fitur</i>
          </h1>
          <h4>fitur-fitur yang kami sediakan dan dapat anda gunakan</h4>
          <div className="row ">
            <div className="col-4 text-fitur-kiri">
              <h3>Tema</h3>
              <h5>
                Kami menyediakan beberapa template Tema yang dapat kamu gunakan
                secara gratis
              </h5>
            </div>
            <div className="col-2">
              <div className="container-fitur-icon">
                <FontAwesomeIcon
                  icon={faPalette}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2">
              <div className="container-fitur-icon-kanan">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-4 text-fitur">
              <h3>Music</h3>
              <h5>
                Fitur music ini tentunya akan membuat Undangan Online kamu lebih
                romantis <FontAwesomeIcon icon={faKissWinkHeart} />
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-fitur-kiri">
              <h3>Quote Undangan</h3>
              <h5>
                Berikan Quote yang kamu yakin dan percaya, yang memotifasimu
                menjalani hubungan yang serius dengan pasanganmu.
              </h5>
            </div>
            <div className="col-2">
              <div className="container-fitur-icon">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2">
              <div className="container-fitur-icon-kanan">
                <FontAwesomeIcon
                  icon={faImages}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-4 text-fitur">
              <h3>Galeri Foto & Video</h3>
              <h5>
                Kamu dapat menambah foto atau sebuah video kedalam undangan
                sehingga memperkuat keromantisan yang kamu miliki.
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-fitur-kiri">
              <h3>Pengaturan</h3>
              <h5>
                Di pengaturan kamu dapat melakukan perubahan seperti kata
                pembuka, Teks undangan, Gambar cover undangan, dan lainnya.
              </h5>
            </div>
            <div className="col-2">
              <div className="container-fitur-icon">
                <FontAwesomeIcon
                  icon={faGear}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2">
              <div className="container-fitur-icon-kanan">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="icon-fitur-yang-disediakan"
                />
              </div>
            </div>
            <div className="col-4 text-fitur" id="tutor">
              <h3>Kirim Undangan Via Wa atau Email </h3>
              <h5>
                Kamu dapat mengirim undangan kamu melalui Whatsapp dan Email.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="cara-membuat-undangan">
        <div className="row container-cara-membuat-undangan">
          <div className="col-6 text-membuat-undangan">
            <h1>Cara Membuat Undangan Kamu</h1>
            <p>
              Buat undangan online kamu, dengan <b>5 Menit</b> Undangan sudah
              dapat di gunakan
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#A78BFA" }} />
              &nbsp; Registrasi untuk membuat akun undangan kamu.
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#A78BFA" }} />
              &nbsp; Buat undangan kamu dengan isi Info Acara & Profile dan juga
              upload foto/gallery
              <b> Customize undangan kamu.</b>
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#A78BFA" }} />
              &nbsp; Pilih Preset / Template sesuai dengan keinginanmu.
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} style={{ color: "#A78BFA" }} />
              &nbsp;
              <b>Aktifkan</b>, dan undangan kamu dapat siap disebarkan &nbsp;
              <FontAwesomeIcon icon={faPaperPlane} />.
            </p>
          </div>
          <div className="col-6">
            <img src={iphone} alt="iphone" className="ip-img" />
            <Slider {...settings} className="slider">
              <div>
                <img src={undangan1} alt="" className="undangan-img" />
              </div>
              <div>
                <img src={undangan2} alt="" className="undangan-img" />
              </div>
              <div>
                <img src={undangan3} alt="" className="undangan-img" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="footer" id="sosial-media">
        <section className="Sosial-media">
          <div className="container-sosial-media">
            <h1>
              <i>Our Sosial Media</i>
            </h1>
            <div className="row">
              <div className="col-4 our-sosial-media-icon">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-sosial-media"
                />
                <p>@Wedding_Us99</p>
              </div>
              <div className="col-4 our-sosial-media-icon">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="icon-sosial-media"
                />
                <p>Wedding_Us99</p>
              </div>
              <div className="col-4 our-sosial-media-icon">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="icon-sosial-media"
                />
                <p>Wedding_Us99</p>
              </div>
            </div>
          </div>
        </section>
        <div className="container-footer">
          <p>
            Made with <FontAwesomeIcon icon={faHeart} className="iconheart" />
            &nbsp;for your moment | powered by Wedding Us
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
