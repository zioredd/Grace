import React from "react";

const InfoCard = ({ amh, eng, icon, text }) => {
  return (
    <>
      <div className="space-y-[1rem]">
        <div className="flex justify-center">
          <p className="font-[raleway] text-[25px] font-[500]">{amh}</p>
        </div>
        <div className="flex justify-center">
          <p className="font-bold font-[raleway] text-[25px] font-[800] text-shadow">
            {eng}
          </p>
        </div>
        <div className="flex justify-center">
          <img src={icon} alt="" />
        </div>
        <div className="flex justify-center">
          <p className="font-[raleway] text-[18px] font-[600]">{text}</p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
