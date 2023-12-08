/* eslint-disable no-unused-vars */
import React from "react";
import vanillastyle from "../css/stylecss.module.css";
import video from "../assets/videos/background_video.mp4";
import Navbar from "./Navbar";
import styles from "../css/styles";

const Header = () => {
  return (
    <div className="relative overflow-x-hidden">
      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
        poster="path_to_poster_image.jpg"
      >
        <source src={video} type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
      </video>
      <div
        className={`${vanillastyle.anav} border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white`}
      >
        <Navbar />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          className="font-[poppins] text-[13px] xs:text-[7pxpx] ss:text-[18px] sm:text-[20px] lgg:text-[20px] text-[#fff]"
          style={{ color: "#ffffff" }}
        >
          WORSHIP WITH THE
        </h1>
        <h1
          className="font-[poppins] text-[20px] xs:text-[30px] ss:text-[40px] sm:text-[50px] lgg:text-[70px] font-[700]"
          style={{ color: "#ffffff" }}
        >
          SECOND FAMILY
        </h1>
        <div className="flex  space-x-5">
          <button
            className={`${styles.btn__header} bg-[#f8c933] text-[#000] lgg:text-[20px]`}
          >
            JOIN
          </button>
          <button
            className={`${styles.btn__header} bg-[#f8c933] text-[#000] lgg:text-[20px]`}
          >
            WATCH
          </button>
          <button
            className={`${styles.btn__header} bg-[#f8c933] text-[#000] lgg:text-[20px]`}
          >
            GIVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
