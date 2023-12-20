import React from "react";

import "./Hamburger.css";

const Hamburger = ({ title, price, tags, img }) => (
  <div className="product">
    <img
      className="product__image"
      src={img}
      alt={title}
    />
    <div className="product__info">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans margin" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
    <div className="center">
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price} ₺</p>
      </div>
    </div>
  </div>
);

export default Hamburger;
