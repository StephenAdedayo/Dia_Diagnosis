import React from "react";
import { NavLink } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <div className="px-5 lg:px-40 bg-[#EFFBFF] min-h-[50vh] flex items-center justify-center text-center">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-[#102D47] lg:text-[40px] text-[35px]">
          Our Smart Health Services
        </p>

        <p className="text-[#102D47] lg:text-[20px] text-[17px]">
          We offer intelligent, accessible tools <br /> to help users detect
          diabetes risks early <br /> and make informed health decisions.
        </p>

        <div className="flex items-center justify-center gap-2">
          <NavLink
            className={"text-[#879AAC] text-[17px] lg:text-[20px]"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={"text-[#102D47] text-[17px]  lg:text-[20px]"}
            to={"/services"}
          >
            Services
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
