import React from "react";
import Navbar from "../components/Navbar";

const AboutScreen = () => {
  return (
    <>
      <div
        className={` border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white z-[200]`}
      >
        <Navbar />
      </div>
    </>
  );
};

export default AboutScreen;
