import imagee from "../assets/images/services_img.jpg";
import style from "../css/whoweare.module.css";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row p-[1rem] sm:p-[3rem] overflow-x-hidden items-center">
        <div className="md:w-1/2 p-4  md:order-1">
          <div className="mb-4">
            <p className="font-[poppins] text-[14px] ss:text-[16px] sm:text-[18px] text-[#007474] text-[#d09c4e] font-[700]">
              WHO WE ARE
            </p>
            <h1 className="font-[poppins] font-bold text-[25px] xs:text-[30px] sm:text-[40px] font-[700] text-[#1c2938]">
              <span>DEDICATED TO CHANGES.</span>
            </h1>
          </div>
          <div>
            <p className="font-[raleway] text-[16px] ss:text-[18px] sm:text-[19px] mb-[2rem] text-[#000]">
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
            <p className="font-[raleway] text-[16px] ss:text-[18px] sm:text-[19px] text-[#000]">
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className="sm:w-1/2  md:order-2 flex justify-end items-end ">
          <img className="w-full h-auto" src={imagee} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
