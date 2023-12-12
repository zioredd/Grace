import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Church from "../assets/images/Church.jpg";

const data = [
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
  {
    img: Church,
    text: "Lorem ipsum dolor sit amet, cons adipiscing elit sed do eiusmod",
  },
];

const CardMain = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg mx-auto"
        >
          <img src={item.img} alt="" className="w-full" />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-[18px]">{item.text}</p>
            <div className="text-blue-600 flex gap-2 cursor-pointer items-center font-[raleway] mt-5">
              Read More <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMain;
