import React, { useEffect, useState } from "react";

import { SubHeading, MenuItem, Hamburger } from "../../components";
import "./Menu.css";
import { urlFor,getHotBar, getExtras, getColdBar, getHealtyBar,getHerbalBar, } from "../../client";

const Menu = () => {
const [hotBar,setHotBar ] = useState([]);
const [extras,setExtras ] = useState([]);
const [coldBar,setColdBar ] = useState([]);
const [herbalBar,setHerbalBar ] = useState([]);
const [healtyBar,setHealtyBar ] = useState([]);

const getData = async () => {
  let hotbar = await getHotBar();
  const sortedHotBar = hotbar.sort((a, b) => a.order - b.order);
  setHotBar(sortedHotBar);
  let extra = await getExtras();
  const sortedExtras = extra.sort((a, b) => a.order - b.order);
  setExtras(sortedExtras);
  let coldbar = await getColdBar();
  const sortedColdBar = coldbar.sort((a, b) => a.order - b.order);
  setColdBar(sortedColdBar);
  let healtyBar = await getHealtyBar();
  const sortedHealtyBar = healtyBar.sort((a, b) => a.order - b.order);
  setHealtyBar(sortedHealtyBar);
  let herbalBar = await getHerbalBar();
  const sortedHerbalBar = herbalBar.sort((a, b) => a.order - b.order);
  setHerbalBar(sortedHerbalBar);
}

useEffect(() => {
  getData();
},[])


  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">

      <div className="app__specialMenu-title">
        <SubHeading title="Alpha Coffee Menu" />
        <h1 className="headtext__cormorant">Alpha Coffee</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">HOT BAR</p>
          <div className="app__specialMenu_menu_items">
            {hotBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img" />

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">COLD BAR</p>
          <div className="app__specialMenu_menu_items">
            {coldBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">HEALTY BAR</p>
          <div className="app__specialMenu_menu_items">
            {healtyBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img" />

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">HERBAL BAR</p>
          <div className="app__specialMenu_menu_items">
            {herbalBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">EXTRA</p>
        <div className="app__specialMenu_menu_items">
          {extras.map((item, index) => (
            <MenuItem
              key={item.title + index}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
