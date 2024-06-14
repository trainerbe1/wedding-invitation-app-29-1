import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUpload } from "@fortawesome/free-solid-svg-icons";
import "./KelolaSetting.css";
import logo from "../img/back.png";

function KelolaSetting() {
  const handleButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="body">
      <div className="titlee">
        <p className="d-inline">Kelola Setting</p>
        <button className="idcs">JJ</button>
      </div>
      <hr />
      <button className="button-kelola-back" onClick={handleButtonClick}>
        <img src={logo} alt="Logo" className="button-logo" />
        Kembali
      </button>
      <div className="content">
        <div className="form-container">
          <label className="label">Judul & Label</label>
          <div className="form-inputs">
            <div className="form-item">
              <label className="input-label">Judul Undangan</label>
              <input
                type="text"
                className="input"
                placeholder="Ahmad & Salsa"
              />
            </div>
            <div className="form-item">
              <label className="input-label">Label Jenis Undangan</label>
              <input
                type="text"
                className="input"
                placeholder="Undangan Pernikahan"
              />
            </div>
          </div>
        </div>
        <div className="form-container">
          <label className="label">Teks Undangan</label>
          <div className="form-inputs">
            <div className="form-item">
              <label className="input-label">Teks Pembuka</label>
              <textarea
                className="textarea"
                placeholder="Kami mohon do'a & restunya atas pernikahan kami"
              ></textarea>
            </div>
            <div className="form-item">
              <label className="input-label">Teks Acara</label>
              <textarea
                className="textarea"
                placeholder="Kami bermaksud untuk mengundang saudara/(i) dalam acara pernikahan kami pada:"
              ></textarea>
            </div>
            <div className="form-item">
              <label className="input-label">Teks Penutup</label>
              <textarea
                className="textarea"
                placeholder="Atas kehadiran saudara/(i) & Do'a restunya, kami ucapkan terimakasih"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="form-container">
          <label className="label">Gambar Cover</label>
          <div className="form-inputs">
            <div className="form-item">
              <label className="input-label">Gambar 1</label>
              <span className="description">
                (Gambar di WhatsApp & Background Cover)
              </span>
              <span className="file-info">(Foto Max 2MB)</span>
              <button className="upload-button">
                <FontAwesomeIcon icon={faUpload} /> upload
              </button>
            </div>
            <div className="form-item">
              <label className="input-label">Gambar 2</label>
              <span className="description">
                (Gambar di WhatsApp & Background Cover)
              </span>
              <span className="file-info">(Foto Max 2MB)</span>
              <button className="upload-button">
                <FontAwesomeIcon icon={faUpload} /> upload
              </button>
            </div>
          </div>
        </div>
        <div className="form-container">
          <label className="label">Format WhatsApp</label>
          <div className="form-inputs">
            <div className="form-item">
              <label className="input-label">Format Pesan</label>
              <textarea
                className="textareapesan"
                placeholder="Kepada {{guest_name}},
                Kami mengundang saudara/(i) untuk menghadiri 
                acara pernikahan kami
                
                *{{bride1_name}} & {{bride2_name}}*
                
                Pesan ini merupakan undangan resmi dari kami. 
                Silahkan kunjungi link berikut untuk membuka undangan anda:
                {{guest_link}}
                
                Atas kehadiran & doa restu dari saudara, kami ucapkan terimakasih."
              ></textarea>
            </div>
            <div className="form-item">
              <label className="input-label">Variabel Dinamis</label>
              <p className="dinamis">
                Merupakan variabel yang nilainya dapat berubah sesuai dengan
                fungsi dan data. Variabel yang dapat dipakai sebagai berikut:
              </p>
              <h5>Deskripsi Variabel</h5>
              <p className="dinamis">
                guest_name Menampilkan nama tamu secara otomatis
              </p>
              <p className="dinamis">
                guest_code Menampilkan kode undangan tamu secara otomatis
              </p>
              <p className="dinamis">
                guest_link Menampilkan link undang khusus tamu secara otomatis
              </p>
              <p className="dinamis">bride1_name Menampilkan nama mempelai 1</p>
              <p className="dinamis">bride2_name Menampilkan nama mempelai 2</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <label className="label">Ucapan Hormat</label>
          <div className="form-inputs">
            <div className="form-item">
              <label className="input-label">Hormat Kami</label>
              <input
                type="text"
                className="input"
                placeholder="Ahmad & Salsa"
              />
            </div>
            <div className="form-item">
              <label className="input-label">Turut Mengundang</label>
              <input
                type="text"
                className="input"
                placeholder="Suryadi & Keluarga"
              />
            </div>
          </div>
        </div>
        <button className="simpan-button1">Simpan</button>
      </div>
    </div>
  );
}

export default KelolaSetting;
