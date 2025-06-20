import React from "react";
import { NavLink } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div className="px-5 lg:px-40 bg-[#EFFBFF] min-h-[50vh] flex items-center justify-center text-center">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-[#102D47] lg:text-[35px] text-[25px]">
          Connect with Our Project Team
        </p>

        <p className="text-[#102D47] lg:text-[20px] max-w-[500px] text-[14px]">
          We’re here to answer your questions, receive your feedback,  or
          discuss potential collaboration. Let’s work together to make early{" "}
           diabetes detection smarter and more accessible.
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
            to={"/Contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
