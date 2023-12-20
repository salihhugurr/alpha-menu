import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Şef'in sözü" />
      <h1 className="headtext__cormorant">Neye İnanıyoruz?</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Herkesin her şeyin aynı olduğu tüketim toplumunda akılda ve damakta kalıcı bir iz bırakabilme ve özgünlüğünü koruyabilme motivasyonumuzu üst düzeyde tutabilmek için her sabah ateşimizi yakıyoruz </p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Chef Yılmaz</p>
        <p className="p__opensans">Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
