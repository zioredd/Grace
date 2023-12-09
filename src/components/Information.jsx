import React from "react";
import icon from "../assets/images/family.svg";
import { data } from "../constants";

const Section = (prop) => {
  return (
    <div className="w-full h-full text-[#030303] text-[0.9rem]  gap-4 text-start  flex justify-center items-center flex-col  ">
      <h1 className="font-[raleway] text-[25px] font-[500]  font-bold  ">
        {prop.title}
      </h1>
      <h4 className="font-bold font-[raleway] text-[25px] font-[800] ">
        {prop.details}
      </h4>

      <div className="flex justify-center">
        <img src={icon} alt="" />
      </div>
      <div className="flex justify-center">
        <p className="font-[raleway] text-[18px] font-[600]">{prop.text}</p>
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <>
      <div className=" grid grid-cols-1 xs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-10 py-[5rem] xs:px-[3rem] ss:px-[0rem]">
        {data.map((item, i) => (
          <Section
            title={item.title}
            details={item.details}
            icon={item.icon}
            text={item.text}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default Information;
