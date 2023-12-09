import React from "react";
import logo from "../assets/images/logo.jpg";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "../css/styles";

const Footer = () => {
  return (
    // <div className="p-[5rem]">
    //   <div>
    //     <div className="mb-[3rem]">
    //       <h1>GRACE</h1>
    //       <p>Goodly Response to Abuse</p>
    //       <p>in the Christian Environment.</p>
    //     </div>
    //     <div className="flex w-[100vw]">
    //       <div>
    //         <h1>ABOUT</h1>
    //         <h2>OUR MISSION</h2>
    //       </div>
    //       <div>
    //         <h1>ABOUT</h1>
    //         <h2>OUR MISSION</h2>
    //       </div>
    //       <div>
    //         <h1>ABOUT</h1>
    //         <h2>OUR MISSION</h2>
    //       </div>
    //       <div>
    //         <h1>ABOUT</h1>
    //         <h2>OUR MISSION</h2>
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>
    // </div>
    // <footer className="bg-[#242426] text-white overflow-x-hidden">
    //   <div className="container mx-auto py-8">
    //     <div className="flex">
    //       <img src={logo} alt="Company Logo" className="h-8" />
    //       <h1 className="text-lg font-bold text-[#799ae3]">Grace</h1>
    //     </div>
    //     <div className="flex mt-4">
    //       <div className="w-1/5">
    //         <h6 className="font-bold  text-[#d7af69]">ABOUT</h6>
    //         <ul className="mt-2">
    //           <li>OUR MISSION</li>
    //           <li>OUR VALUES</li>
    //           <li>OUR TEAM</li>
    //         </ul>
    //       </div>
    //       <div className="w-1/5">
    //         <h6 className="font-bold text-[#d7af69]">SERVICES</h6>
    //         <ul className="mt-2">
    //           <li>SAFEGUARDING INITIATIVE</li>
    //           <li>INDEPENDENT INVESTIGATIONS</li>
    //           <li>ORGANIZATIONAL ASSESSMENTS</li>
    //         </ul>
    //       </div>
    //       <div className="w-1/5">
    //         <h6 className="font-bold text-[#d7af69]">LEARN MORE</h6>
    //         <ul className="mt-2">
    //           <li>DONATE</li>
    //           <li>RESOURCES</li>
    //           <li>COMMON QUESTIONS</li>
    //           <li>2022 ANNUAL REPORT</li>
    //         </ul>
    //       </div>
    //       <div className="w-1/5">
    //         <h6 className="font-bold text-[#d7af69]">GET INVOLVED</h6>
    //         <ul className="mt-2">
    //           <li>DONATE</li>
    //           <li>WAYS TO GIVE</li>
    //           <li>EVENTS</li>
    //           <li>SPREAD THE WORD</li>
    //         </ul>
    //       </div>

    //       <div className="w-1/5 space-y-[1rem]">
    //         <h1>STAY CONNECTED</h1>
    //         <p>Subscribe to our newsletter.</p>
    //         <form action="">
    //           <input
    //             type="text"
    //             placeholder="Email Address"
    //             className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-blue-500"
    //           />{" "}
    //         </form>
    //         <button className="border border-[#d7af69] text-[#d7af69] hover:bg-[#d7af69] hover:text-white rounded-lg py-2 px-[3rem] font-semibold">
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex flex-col justify-center items-center space-y-[1rem] mt-[5rem]">
    //       <div className="flex space-x-[1rem]">
    //         <motion.div
    //           initial={{
    //             y: 0,
    //             scale: 1,
    //           }}
    //           whileHover={{
    //             scale: 1.2,
    //             transition: {
    //               duration: 0.2,
    //             },
    //           }}
    //         >
    //           <a
    //             href="https://www.example.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={` hover:text-[#00743A]`}
    //           >
    //             <FaLinkedin size={24} />
    //           </a>
    //         </motion.div>
    //         <motion.div
    //           initial={{
    //             y: 0,
    //             scale: 1,
    //           }}
    //           whileHover={{
    //             scale: 1.2,
    //             transition: {
    //               duration: 0.2,
    //             },
    //           }}
    //         >
    //           <a
    //             href="https://www.example.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={` hover:text-[#00743A]`}
    //           >
    //             <FaTwitter size={24} />
    //           </a>
    //         </motion.div>
    //         <motion.div
    //           initial={{
    //             y: 0,
    //             scale: 1,
    //           }}
    //           whileHover={{
    //             scale: 1.2,
    //             transition: {
    //               duration: 0.2,
    //             },
    //           }}
    //         >
    //           <a
    //             href="https://www.example.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className={` hover:text-[#00743A]`}
    //           >
    //             <FaFacebook size={24} />
    //           </a>
    //         </motion.div>
    //       </div>
    //       <div>
    //         <h1>c 2023 GRACE. ALL RIGHTS RESERVED</h1>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#242426] text-white overflow-x-hidden">
      <div className="container mx-auto py-8 w-[80%] sm:w-[90%]">
        <div className="flex space-x-5  flex items-center mb-[4rem] h-[8rem]">
          <img src={logo} alt="Company Logo" className="h-[5rem] w-[5rem]" />
          <div>
            <h1 className="font-[poppins] text-[35px] smd:text-[45px] font-bold leading-tight">
              Grace
            </h1>
            <h3 className="font-[raleway] text-[14px]">
              Godly Response to Abuse <br className="hidden xs:block" /> in the
              Christian Environment
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full sm:w-1/2 md:w-1/5 mb-[2rem]">
            <h6 className="font-[poppins] font-bold text-[#d7af69] mb-[3px]">
              ABOUT
            </h6>
            <ul className="font-[raleway] space-y-[0.7rem]">
              <li>OUR MISSION</li>
              <li>OUR VALUES</li>
              <li>OUR TEAM</li>
              <li>BROAD MEMBERS</li>
              <li>
                A MESSAGE FROM <br /> OUR FOUNDER
              </li>
              <li>NEWS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5  mb-[2rem]">
            <h6 className="font-[poppins] font-bold text-[#d7af69] mb-[3px]">
              SERVICES
            </h6>
            <ul className="font-[raleway] space-y-[0.7rem]">
              <li>
                SAFEGUARDING <br /> INITIATIVE
              </li>
              <li>
                INDEPENDENT <br /> INVESTIGATIONS
              </li>
              <li>
                ORGANIZATIONAL <br /> ASSESSMENTS
              </li>
              <li>CONSULTATIONS</li>
              <li>
                POLICY REVIEW & <br /> DEVELOPMENT
              </li>
              <li>ONLINE TRAINING</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5  mb-[2rem]">
            <h6 className="font-[poppins] font-bold text-[#d7af69] mb-[3px]">
              LEARN MORE
            </h6>
            <ul className="font-[raleway] space-y-[0.7rem]">
              <li>DONATE</li>
              <li>RESOURCES</li>
              <li>
                COMMON <br /> QUESTIONS
              </li>
              <li>
                2022 ANNUAL <br /> REPORT
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5  mb-[2rem]">
            <h6 className="font-[poppins] font-bold text-[#d7af69] mb-[3px]">
              GET INVOLVED
            </h6>
            <ul className="font-[raleway] space-y-[0.7rem]">
              <li>DONATE</li>
              <li>WAYS TO GIVE</li>
              <li>EVENTS</li>
              <li>SPREAD THE WORD</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/5 space-y-[1rem] mt-[2rem]">
            <h1 className="font-[poppins] text-[20px] font-[700]">
              STAY CONNECTED
            </h1>
            <p>Subscribe to our newsletter.</p>
            <form action="">
              <input
                type="text"
                placeholder="Email Address"
                className="border border-gray-300 rounded-sm p-2 focus:outline-none focus:border-blue-500"
              />
            </form>
            <button className="font-[raleway] border border-[#d7af69] text-[#d7af69] hover:bg-[#d7af69] hover:text-white rounded-lg py-2 px-[3rem] font-semibold">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mt-8 justify-center">
          <div className="w-full sm:w-1/2 md:w-4/5 flex justify-center items-center mt-8 sm:mt-0">
            <div className="flex space-x-[1rem]">
              <div>
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` hover:text-[#0A66C2]`}
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` hover:text-[#1DA1F2]`}
                >
                  <FaTwitter size={24} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={` hover:text-[#1877F2]`}
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[raleway] flex justify-center items-center mt-8">
          <h1>&copy; 2023 GRACE. ALL RIGHTS RESERVED</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
