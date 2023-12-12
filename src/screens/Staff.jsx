import ManImage from "../assets/images/Man.jpg";
import WomanImage from "../assets/images/Woman.jpg";
import vanillastyle from "../css/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const data = [
  {
    title: "JOSH + KATIE KREHBIEL | FOUNDING PASTORS",
    details: [
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
    ],
    img: ManImage,
  },
  {
    title: "NICOLE PALSER | EXECUTIVE PASTOR + CREATIVE DIRECTOR",
    details: [
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
    ],
    img: WomanImage,
  },
  {
    title: "BEN PETERSON | ASSOCIATE PASTOR",
    details: [
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
    ],
    img: ManImage,
  },
  {
    title: "DANNY + ABBY CHRISTIAN | CHILDREN’S PASTORS",
    details: [
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
    ],
    img: WomanImage,
  },
  {
    title: "ALEX KRUSE | YOUTH PASTOR ",

    details: [
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
      { name: "Kaleab Tibebu", phone: "0901711106" },
      { name: "Beyene Dereje", phone: "0901711106" },
      { name: "Tigabu Mekuria", phone: "0901711106" },
      { name: "Tadael Tibebu", phone: "0901711106" },
    ],
    img: ManImage,
  },
];

const Section = (prop) => {
  return (
    <div className="sm:w-[70vw] w-[90vw] h-full text-[#3a3a3a] gap-5 text-start flex  items-start flex-col sm:flex-row  py-10 border-t-2 border-[#bdbdbd] ">
      <img
        src={prop.img}
        alt=""
        className="sm:w-[30vw] sm:h-[30vw] w-[90vw] h-[90vw] flex-none object-cover"
      />
      <div className=" w-full md:text-[1rem]  text-[0.9rem]">
        <h1 className="  font-bold font-Poppins  ">{prop.title}</h1>
        <div className=" grid  grid-cols-3 ">
          {prop.details.map((item, i) => (
            <>
              <p className=" col-span-1 sm:col-span-2 lg:col-span-1">
                {item.name} :
              </p>
              <p className=" col-span-2 sm:col-span-1 lg:col-span-2">
                {item.phone}
                <br />
                <br />
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const Staff = () => {
  return (
    <>
      <div
        className={`border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white  z-[200]`}
      >
        <Navbar />
      </div>
      <div className="App w-screen relative flex flex-col items-center">
        <div className="p-10 mt-[5rem]">
          <h1 className="md:text-[4rem] sm:text-[3rem] text-[2rem] text-center  font-bold font-Poppins ">
            EVERYDAY PASTORAL STAFF
          </h1>
        </div>
        {data.map((item, i) => {
          return (
            <Section
              key={i}
              title={item.title}
              details={item.details}
              img={item.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default Staff;
