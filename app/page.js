"use client"
import React, { useEffect, useState } from "react";
import {BottomTabBar, MenuItem,SubHeading} from "../components";
import {
  getHotBar,
  getExtras,
  getColdBar,
  getHealtyBar,
  getHerbalBar,
} from "../client";
import Image from "next/image";

const Menu = () => {
  const [hotBar, setHotBar] = useState([]);
  const [extras, setExtras] = useState([]);
  const [coldBar, setColdBar] = useState([]);
  const [herbalBar, setHerbalBar] = useState([]);
  const [healtyBar, setHealtyBar] = useState([]);
  const [open,setOpen] = useState(false);
  const [item,setItem] = useState();

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
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="flex w-full justify-center items-center mx-auto flex-col bg-white section__padding"
      id="menu"
    >
      <div className="flex flex-col text-center">
        <div className="mx-auto">
          <Image
            src="/logo.png"
            width={150}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container">
        <div
          id="hotbar"
          className="flex flex-col text-center my-8 "
          style={{
            background: `url(/coffee2.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black font-alt font-extrabold text-3xl mb-8">
            HOT BAR
          </p>
          <div className="flex flex-col gap-4">
            {hotBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
                extras={item.extras}
                onClick={(extras) => {
                  setOpen(!open);
                  setItem(extras);
                }}
              />
            ))}
          </div>
        </div>

        {open && (
          <div className="fixed overflow-y-scroll bg-white text-3xl font-bold flex flex-col  top-0 left-0 text-secondary font-alt w-full h-full items-center justify-center z-50">
            <button
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <div className="absolute px-2 items-center gap-4 flex flex-col top-10">
              <Image
                src={
                  item.title === "Honduras"
                    ? "/honduras.png"
                    : item.title === "Guatemala Antigua Pastoral"
                    ? "/guatemala.png"
                    : "/colombia.png"
                }
                width={50}
                height={50}
                alt="Honduras"
                className=""
              />
              <h1 className="">{item.title}</h1>
              <p className="text-lg text-black">{item.story}</p>
            </div>
          </div>
        )}

        <div
          id="coldbar"
          className="flex flex-col text-center my-8"
          style={{
            background: `url(/coffee.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black font-alt font-extrabold text-3xl mb-8">
            COLD BAR
          </p>
          <div className="flex flex-col gap-4">
            {coldBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div
          id="healtybar"
          className="flex flex-col text-center"
          style={{
            background: `url(/coffee3.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black font-alt font-extrabold text-3xl mb-8">
            HEALTY BAR
          </p>
          <div className="flex flex-col gap-4">
            {healtyBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div
          id="herbalbar"
          className="flex flex-col text-center"
          style={{
            background: `url(/coffee4.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black font-alt font-extrabold text-3xl mb-8">
            HERBAL BAR
          </p>
          <div className="flex flex-col gap-4">
            {herbalBar.map((item, index) => (
              <MenuItem
                key={item.title + index}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div
          id="extras"
          className="flex flex-col text-center mb-20"
          style={{
            background: `url(/coffee5.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-black font-alt font-extrabold text-3xl mb-8">
            EXTRAS
          </p>
          <div className="flex flex-col gap-4">
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
      <BottomTabBar />
    </div>
  );
};

export default Menu;
