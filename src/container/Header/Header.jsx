import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Burger Yediğinizi Hissedin" />
      <h1 className="app__header-h1">Mutlu olacağınız lezzet</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>Her muhteşem hikaye 2 türlü başlar ya bir yolculuğa çıkılır ya da şehre burgerci gelir </p>
      <a href="/menu" type="button" className="custom__button">Menüyü Keşfet</a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome2} alt="header_img" />
    </div>
  </div>
);

export default Header;
