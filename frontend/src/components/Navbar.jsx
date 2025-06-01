import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { diaContext } from "../context/DiaContext";
import logo from "../assets/Layer 1.png";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "HealthTips", href: "/healthtips" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ];

  const { location, isMenuOpen, setIsMenuOpen } = useContext(diaContext);
  console.log(isMenuOpen);
  console.log(setIsMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="px-5 lg:px-40 w-full bg-[#EFFBFF]  py-8 flex justify-between items-center">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>

        <div className=" gap-10 lg:flex hidden">
          {links.map((link, index) => {
            const isactive = location.pathname === link.href;
            return (
              <Link
                className={`${
                  isactive ? "border-b text-[#0088FF]" : "text-[#102D47]"
                }`}
                to={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          className="lg:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {" "}
          {isMenuOpen ? <FaTimes /> : <BiMenu />}{" "}
        </button>
      </div>

      {/* smallers screens */}

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-500 delay-75 ease-in z-40 fixed h-full w-full top-0 bg-transparent bg-opacity-100 backdrop-blur-3xl`}
      ></div>

      <div
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-50 fixed h-full w-[80%] bg-[#EFFBFF] top-0 left-0 bottom-0 transition-opacity duration-500 delay-75 ease-in  py-8 lg:hidden block`}
      >
        <div className=" flex flex-col gap-5">
          {links.map((link, index) => {
            const isactive = location.pathname === link.href;
            return (
              <Link
                className={`${
                  isactive ? "bg-[#0088FF]  text-white" : "text-[#102D47]"
                } py-2 px-10`}
                to={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
