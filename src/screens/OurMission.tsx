import React from "react";
import Navbar from "../components/Navbar";

const data = [
  {
    title: "OUR MISSION STATEMENT",
    Subtitle: "THE GREAT COMMISSION",

    verse: `"Go therefore and make disciples of all nations, baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to observe all that I commanded you; and lo, I am with you always."`,
    ref: "MATTHEW 28:19-20",
  },
  {
    title: "OUR MARKETING STRATEGY",
    Subtitle: "OUR CITY, OUR STATE, OUR NATION, OUR WORLD",

    verse: `"You will be my witnesses both in Jerusalem, and in all Judea and Samaria, even to the remotest part of the earth."`,
    ref: "ACTS 1:8",
  },
  {
    title: "OUR PRODUCT",
    Subtitle: "THE GOOD NEWS OF JESUS CHRIST!",

    verse: `"So, for my part, I am eager to preach the gospel to you also who are in Rome. For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed from faith to faith; as it is written, “But the righteous man shall live by faith."`,
    ref: "ROMANS 1:15-17",
  },
  {
    title: "OUR PROFIT",
    Subtitle: "CHANGED LIVES",

    verse:
      "Therefore, if anyone is in Christ, he is a new creature; the old things passed away; behold, new things have come.",
    ref: "MATTHEW 28:19-20",
  },
];

const Section = (prop) => {
  return (
    <div className="w-full h-full text-[#c5c4c4] gap-4 text-center flex justify-center items-center flex-col">
      <h1 className="text-[3rem] md:text-[5rem] 2xl:text-[6rem] md:w-[55vw] leading-none font-Poppins">
        {prop.title}
      </h1>
      <h4 className="text-[1.2rem] md:text-[1.6rem] w-[50vw] 2xl:text-[2rem] leading-none text-[rgb(169,193,222)]">
        {prop.Subtitle}
      </h4>
      <h5 className="text-[1.2rem] md:text-[1.6rem] 2xl:text-[2rem] w-[80vw]">
        {prop.verse}
      </h5>
      <h4 className="text-[1.2rem] md:text-[1.6rem] 2xl:text-[2rem] w-[40rem] leading-none text-[rgb(169,193,222)]">
        {prop.refrence}
      </h4>
    </div>
  );
};

const OurMission = () => {
  return (
    <>
      <div
        className={`border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white`}
      >
        <Navbar />
      </div>
      <div className="App w-screen  h-full    ">
        <div className="w-[110vw] h-[110vh] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black z-[-1] ">
          <div
            className="w-full h-full  animate-bg-spin3 animate-bg-spin3  overflow-visible  "
            style={{
              backgroundImage: `url("public/assets/bg.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" absolute w-full h-full bg-[#2b2a2a] bg-opacity-80  top-0"></div>
        </div>
        {data.map((item, i) => (
          <Section
            title={item.title}
            Subtitle={item.Subtitle}
            verse={item.verse}
            refrence={item.ref}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default OurMission;
