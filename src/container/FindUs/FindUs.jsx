import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="İletişim" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Mutlu Bir Deneyim İçin Adres
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Kurtuluş Mahallesi Demokrasi Sokak Nadide Apartmanı No: 24 İç Kapı
          No:, D:2, 01130 Seyhan/Adana
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Açılış Saatleri
        </p>
        <p className="p__opensans">Pzt - Cum: 11:00 - 11:30</p>
        <p className="p__opensans">Cmt - Paz: 11:00 - 11:30</p>
      </div>
      {/* <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
