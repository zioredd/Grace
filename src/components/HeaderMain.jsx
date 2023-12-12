import React from "react";
import Church from "../assets/images/Church.jpg";

const HeaderMain = () => {
  return (
    <div className=" max-h-[65vh] min-h-[50vh] h-[100vw] w-[100vw]  flex  justify-center items-center overflow-hidden relative bg-black bg-opacity-10">
      <img
        src={Church}
        alt=""
        className="object-cover  w-full h-full absolute z-[0] "
      />
      <div className="bg-black absolute w-full h-full bg-opacity-30 "></div>
      <div className="absolute z-[2]  text-[3rem] sm:text-[5rem]  font-bold text-white text-center leading-none font-Poppins ">
        Safeguarding
        <br /> Intiative
      </div>
    </div>
  );
};

export default HeaderMain;
