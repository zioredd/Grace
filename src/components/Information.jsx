import React from "react";
import InfoCard from "./InfoCard";
import family from "../assets/images/family.svg";

const Information = () => {
  return (
    <>
      <div className="flex justify-center items-center my-[5rem] overflow-x-hidden">
        <div className="grid grid-cols-1 xs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4 gap-y-[5rem] gap-x-[10rem] ss:gap-x-[4rem] md:gap-x-[7rem] lg:gap-x-[10rem] lgg:gap-x-[12rem] xl:gap-x-[15rem]">
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          <InfoCard
            amh="Lejoch"
            eng="Chlidren"
            icon={family}
            text="lorem ipsum dolor"
          />
          {/* <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard /> */}
        </div>
      </div>
    </>
  );
};

export default Information;
