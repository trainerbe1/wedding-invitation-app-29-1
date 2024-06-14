import React from "react";
import "./KelolaQuote.css";
import logo from "../img/back.png";


function KelolaQuote() {
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
      <div className="quote-section">
        <h2 className="quote-title">Quote</h2>
        <textarea className="quote-textarea" rows="4">
        {`
          يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗاِنَّ اللّٰهَ عَلِيْمٌ خَبِيْرٌ

          Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui, Mahateliti.
          `}
        </textarea>
        <input className="quote-source" type="text" value="Al Hujurat: 13" />
        <div className="quote-buttons">
          <button className="quote-button hapus">Hapus</button>
          <button className="quote-button simpan">Simpan</button>
        </div>
      </div>
      <footer className="footer">
        <p>
          Made with <span className="heart">♥</span> for your moment | powered by Wedding Us
        </p>
      </footer>
    </div>
  );
}

export default KelolaQuote;
