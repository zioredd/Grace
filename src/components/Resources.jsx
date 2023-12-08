import React from "react";
import GroupStudy from "../assets/images/GroupStudy.jpg";
import {
  FaAngleDoubleRight,
  FaAngleRight,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const data = [
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
  {
    title: "ARTICLES ABUSE IMPACT",
    details:
      "Abuse leaves survivors vulnerable to significant health concerns, prompting up to 36% higher lifetime healthcare costs for a person who experienced abuse as a child. Jesus showed throughout His ministry on Earth that He cares for our physical health, and multiple Bible passages urge stewardship of the bodies we have been given. Understanding the physical health impact of abuse equips us to care for our bodies and for the children God has placed in our care.",
  },
];

const Section = (prop) => {
  return (
    <div className="w-full h-full text-[#030303] text-[0.9rem]  gap-4 text-start  flex justify-start items-start flex-col  ">
      <h1 className=" text-red-600 text-[1rem]  font-bold  ">{prop.title}</h1>
      <h4 className=" ">{prop.details}</h4>
      <div className=" text-blue-600 flex gap-2 cursor-pointer items-center ">
        Read More <FaLongArrowAltRight />
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="App w-screen   bg-[#eee]   relative pb-20 ">
      <div className=" max-h-[65vh] min-h-[50vh] h-[100vw] w-[100vw]  flex  justify-center items-center overflow-hidden relative bg-black bg-opacity-10">
        <img
          src={GroupStudy}
          alt=""
          className="object-cover  w-full h-full absolute z-[0] "
        />
        <div className="bg-black absolute w-full h-full bg-opacity-30 "></div>
        <div className="absolute z-[2]  text-[3rem] sm:text-[5rem]  font-bold text-white ">
          Resources
        </div>
      </div>
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10">
        {data.map((item, i) => (
          <Section title={item.title} details={item.details} key={i} />
        ))}
      </div>
      <div className=" flex items-center justify-center gap-5 text-red-600">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaAngleLeft />
          Newer
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          Older <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Resources;
