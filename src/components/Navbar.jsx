import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 inset-x-0 bg-[#000] bg-opacity-50 text-white w-full">
      <div className=" flex items-center justify-between py-4 px-[2.5rem]">
        <div className="font-[raleway] text-lg font-bold lgg:text-[22px]">
          <button onClick={() => history("/")}>
            <h1>Logo</h1>
          </button>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex space-x-[1rem] py-[0.85rem] text-[13px] smd:space-x-[2rem] md:space-x-[2.5rem] lg:text-[17px]">
            <NavbarItem label="ABOUT" dropdownItems={["Staff", "OurMission"]} />
            <NavbarItem
              label="SERVICES"
              dropdownItems={["Services", "Services", "Services", "Services"]}
            />

            <li
              onClick={() => history("/give")}
              className="font-[500] cursor-pointer lgg:text-[22px]"
            >
              GIVE
            </li>
            <li
              onClick={() => history("/media")}
              className="font-[500] cursor-pointer lgg:text-[22px]"
            >
              MEDIA
            </li>
            <li
              onClick={() => history("/membership")}
              className="font-[500] cursor-pointer lgg:text-[22px]"
            >
              MEMBERSHIP
            </li>
            <li
              onClick={() => history("/resources")}
              className="font-[500] cursor-pointer lgg:text-[22px]"
            >
              RESOURCES
            </li>
            <li
              onClick={() => history("/contact")}
              className="font-[500] cursor-pointer lgg:text-[22px]"
            >
              CONTACT
            </li>
          </ul>
        </div>
        <div className="mr-2 flex sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          !isMenuOpen ? "hidden" : "flex"
        } p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-[#242426]`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-5">
          <li
            onClick={() => history("/about")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            About
          </li>
          <li
            onClick={() => history("/services")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Services
          </li>
          <li
            onClick={() => history("/ourmission")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Give
          </li>
          <li
            onClick={() => history("/staff")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Media
          </li>
          <li
            onClick={() => history("/contact")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Membership
          </li>
          <li
            onClick={() => history("/resources")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Resources
          </li>
          <li
            onClick={() => history("/contact")}
            className={`font-poppins font-medium cursor-pointer text-[16px]`}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavbarItem = ({ label, dropdownItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const history = useNavigate();

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleItemClick = (itemRoute) => {
    history(itemRoute);
  };

  return (
    <li
      className="relative group lgg:text-[22px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        // onClick={() => handleItemClick(route)}
        className="font-[500] cursor-pointer lgg:text-[22px] space-x-[1rem] smd:space-x-[2rem] md:space-x-[2.5rem] text-[13px] lg:text-[17px]"
      >
        {label}
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 bg-white text-gray-800 shadow-lg rounded-lg transition-opacity duration-300 opacity-100">
          <ul className="space-y-2 p-2">
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleItemClick(`/${item.toLowerCase()}`)}
                  className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Navbar;
