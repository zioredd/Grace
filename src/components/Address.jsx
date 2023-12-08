import React from "react";

const Address = () => {
  return (
    <div className="container mx-auto py-[5rem]">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <div className="p-4">
            <h1 className="font-[poppins] mb-[1rem] font-bold">ADDRESS</h1>
            <p className="font-[raleway]">
              3001 Saturn Rd. <br /> Garland TX 75041
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4">
            <h1 className="font-[poppins] mb-[1rem] font-bold">
              CONTACT OUR STAFF
            </h1>
            <h2>Contact Office</h2>
            <p className="font-[raleway]">
              Phone: (214) 703-0100 <br /> support@eecdallas.org
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4">
            <h1 className="font-[poppins] mb-[1rem] font-bold">
              OPENING HOURS
            </h1>
            <div className="flex space-x-5">
              <div className="font-[raleway]">
                <p>Sunday</p>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
              </div>
              <div className="font-[raleway]">
                <p>9:00 - 1:00</p>
                <p>9:00 - 1:00</p>
                <p>9:00 - 1:00</p>
                <p>9:00 - 1:00</p>
                <p>9:00 - 1:00</p>
                <p>9:00 - 1:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
