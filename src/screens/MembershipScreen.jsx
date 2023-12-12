import React from "react";
import Navbar from "../components/Navbar";

const MembershipScreen = () => {
  return (
    <>
      <div
        className={`border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white`}
      >
        <Navbar />
      </div>
      <div className="flex flex-col justify-between items-center h-full">
        <div className="text-center my-[5rem] w-[80%] md:w-[70%] my-auto">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-[poppins]">
            Registration
          </p>
        </div>
        <div class="w-[70%] bg-[#F5F5F5] rounded overflow-hidden shadow-md flex flex-col justify-end items-center">
          <div class="px-6 py-4 flex flex-col items-center space-y-[1rem]">
            <div class="font-bold text-xl mb-2">Youth Discipleship Event</div>
            <button className="bg-[#2a3e7b] hover:opacity-[95%] text-white font-bold py-3 px-10 md:px-20 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              December 16TH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipScreen;
