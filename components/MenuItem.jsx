import React from "react";

const MenuItem = ({ title, price, tags, img,extras,onClick }) => {
  return (
    <div className="relative w-full mt-4 justify-between">
      <div className="flex justify-between items-center">
        <div className="w-[90%]">
          <p className="text-left font-alt text-[18px] font-black md:text-lg ">
            {title}
          </p>

          {/* Uncomment the following line if you want to display tags */}
          {/* <p className="p__opensans margin" style={{ color: "#AAAAAA" }}>
          {tags}
        </p> */}
        </div>

        <div className="flex justify-center items-center">
          <div className="mr-8 w-8 h-[1px] bg-secondary m-0 1rem" />
          <div className="flex justify-end items-end">
            <p className="w-12 text-sm md:text-lg lg:text-lg font-base font-black text-[18px] text-secondary">
              {price} ₺
            </p>
          </div>
        </div>
      </div>
      {extras?.map((item, index) => (
        <div key={index} className="flex justify-between text-left text-sm font-alt font-black gap-2 mt-2">
          <h4 className="flex gap-4">
          {item.title}
          <button onClick={()=> onClick(item)} className="text-white text-[12px] font-alt px-2 bg-secondary">Hikayesi</button>
          </h4>
          <div className="flex justify-center items-center">
            <div className="mr-8 w-4 h-[.5px] bg-secondary m-0 1rem" />
            <div className="flex justify-end items-end">
              <p className="w-12 text-xs md:text-lg lg:text-lg font-base font-black text-[18px] text-secondary">
                + {item.price} ₺
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItem;
