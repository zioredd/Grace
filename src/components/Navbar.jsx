import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 inset-x-0 bg-[#000] bg-opacity-50 text-white w-full">
      <div className="container mx-auto flex items-center justify-between sm:py-4 sm:px-[3rem]">
        <div>
          <h1 className="font-[raleway] text-lg font-bold lgg:text-[22px]">
            Logo
          </h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex space-x-4">
            <NavbarItem
              label="WHO WE ARE"
              dropdownItems={["Who we are", "Staff"]}
            />
            <NavbarItem
              label="EVENTS"
              dropdownItems={[
                "Prayer",
                "Counselling",
                "Counselling",
                "Counselling",
              ]}
            />

            <li className="px-4 py-2 font-semibold">LOCATION</li>
            <li className="px-4 py-2 font-semibold">GIVE</li>
            <li className="px-4 py-2 font-semibold">LOGIN</li>
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
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-[#242426]`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-5">
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            WHO WE ARE
          </li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            EVENTS
          </li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            LOCATIONS
          </li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            GIVE
          </li>
          <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
            lOGIN
          </li>
        </ul>
      </div>
    </nav>
  );
};

const NavbarItem = ({ label, dropdownItems }) => {
  const [isDropdownOpen, setDropdownOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <li
      className="relative group lgg:text-[22px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="px-4 py-2 font-semibold">{label}</button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg">
          <ul className="space-y-2 p-2">
            {dropdownItems.map((item) => (
              <li key={item}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Navbar;
