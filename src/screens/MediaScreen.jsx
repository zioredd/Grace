import React from "react";
import Church from "../assets/images/Church.jpg";
import Navbar from "../components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import CardMain from "../components/CardMain";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import CTAMain from "../components/CTAMain";

const MediaScreen = () => {
  return (
    <>
      <div
        className={`border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white  z-[200]`}
      >
        <Navbar />
      </div>
      <HeaderMain />

      <CTAMain />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10"> */}
      <div>
        <CardMain />
      </div>
      <Footer />
    </>
  );
};

export default MediaScreen;
