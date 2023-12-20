import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags, img }) => (
  <div className="product">
    <div className="product__info">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
{/*       <p className="p__opensans margin" style={{ color: "#AAAAAA" }}>
        {tags}
      </p> */}
    </div>
    <div className="center">
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price} ₺</p>
      </div>
    </div>
  </div>
);

export default MenuItem;
