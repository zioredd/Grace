import img from "../assets/images/istockphoto.jpg";
import Navbar from "../components/Navbar";
import styles from "../css/styles";
import vanillastyle from "../css/stylecss.module.css";

const ContactHeading = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center overflow-x-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className={`${vanillastyle.anav} border-solid border-grey absolute top-4 sm:top-10 h-[3rem] sm:h-[4rem] text-white`}
        >
          <Navbar />
        </div>
        <div className="absolute inset-0 flex justify-center items-center"></div>
        {/* <div className="container mx-auto py-10 md:py-20 px-4 sm:px-6 lg:px-8 text-white relative z-10 h-[100vh]  flex justify-center items-center">
          <h2 className="font-[poppins] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-no-wrap flex justify-center items-center ">
            Safeguarding <br /> Initiative
          </h2>
        </div> */}
        <div className="flex items-center justify-center h-screen">
          <h1 className="font-[poppins] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
            Safeguarding <br /> Initiative
          </h1>
        </div>
      </section>
    </>
  );
};

export default ContactHeading;
