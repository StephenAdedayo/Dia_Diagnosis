import React from "react";
import iconbg from "../assets/iconbg.png";
import mail1 from "../assets/mail1.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";

const EmailUs = () => {
  return (
    <div className="w-full px-5 lg:px-40 my-20 ">
      <main className="flex justify-between flex-col md:flex-row items-center gap-20">
        <div className="flex gap-5 ">
          <div className="size-[70px] relative ">
            <img className="w-full object-cover" src={iconbg} alt="" />
            <img
              className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
              src={mail1}
              alt=""
            />
          </div>

          <div className="space-y-5">
            <div>
              <p className="uppercase font-bold text-[20px] text-[#102D47]">
                Email Us
              </p>
              <p className="text-[#547593] text-[20px]">
                Please feel free to drop us a line. We will respond as soon as
                possible.
              </p>
            </div>

            <Link to={"gmail.com"}>
              <div className="flex items-center gap-5">
                <p className="text-[#2F73F2] text-[18px]">Leave a message</p>
                <img className="w-[20px]" src={arrow} alt="" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex gap-5 ">
          <div className="size-[70px] relative ">
            <img className="w-full object-cover" src={iconbg} alt="" />
            <img
              className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
              src={mail1}
              alt=""
            />
          </div>

          <div className="space-y-5">
            <div>
              <p className="uppercase font-bold text-[20px] text-[#102D47]">
                careers
              </p>
              <p className="text-[#547593] text-[20px]">
                Please feel free to drop us a line. We will respond as soon as
                possible.
              </p>
            </div>

            <a href={"/wa.me/08143184639"}>
              <div className="flex items-center gap-5">
                <p className="text-[#2F73F2] text-[18px]">
                  Send an application
                </p>
                <img className="w-[20px]" src={arrow} alt="" />
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmailUs;
