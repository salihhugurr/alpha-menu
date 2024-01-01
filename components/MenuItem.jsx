import React from "react";

const MenuItem = ({ title, price, tags, img, extras, onClick }) => {
  return (
    <div className="relative w-full mt-4 justify-between flex flex-col md:flex-row">
      {/* Image column */}
      {img && (
        <div className="md:w-1/4">
          {img && <img src={img} alt={title} className="w-full h-auto mb-4" />}
        </div>
      )}

      {/* Content column */}
      <div className="flex flex-col md:w-3/4 md:pl-4">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-[90%]">
            <p className="text-left font-alt text-[16px] font-black md:text-lg">
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
              <p className="w-14 md:w-12 text-[17px] md:text-[20px] font-base font-black text-secondary">
                {price} ₺
              </p>
            </div>
          </div>
        </div>
        {extras?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-left text-sm font-alt font-black gap-4 mt-4"
          >
            <h4 className="flex gap-4 text-[12px] md:text-[16px]">
              {item.title}
              <button
                onClick={() => onClick(item)}
                className="text-white text-[12px] md:text-[14px] font-alt px-2 bg-secondary"
              >
                Hikayesi
              </button>
            </h4>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
