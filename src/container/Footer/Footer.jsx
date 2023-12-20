import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bizimle İletişime Geçin</h1>
        <p className="p__opensans">
          Kurtuluş Mahallesi Demokrasi Sokak Nadide Apartmanı
        </p>
        <p className="p__opensans">0534 503 96 07</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.omnia} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Kendinizi Bulmanın En İyi Yolu, Kendinizi Başkalarının
          Hizmetinde Kaybetmektir...&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <a
            href="https://www.facebook.com/people/Omnia-Story-Burger/100076082181727/?paipv=0&eav=Afb7vzVuHtN5oduBSdIuhRVFDyq3H5WFzileWPti5FIq8fA0rKPBUWtmqhO0Gi-MuVM&_rdr"
            target="_blank"
          >
            <FiFacebook />
          </a>

          <a
            href="https://www.instagram.com/omniastoryburger"
            target="_blank"
          >
            <FiInstagram />
          </a>
          {/* <FiTwitter /> */}
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Çalışma Saatleri</h1>
        <p className="p__opensans">Pazartesi-Cuma:</p>
        <p className="p__opensans">11:00 - 21:00</p>
        <p className="p__opensans">Cumartesi-Pazar:</p>
        <p className="p__opensans">11:00- 21:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">@2023 Peglad. Tüm hakları saklıdır.</p>
    </div>
  </div>
);

export default Footer;
