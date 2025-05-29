import React, { useContext } from "react";
import { diaContext } from "../context/DiaContext";

const Start = () => {
  const { navigate } = useContext(diaContext);

  return (
    <main className='bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1748388715/bg1_oyvesh.png")] bg-cover bg-center w-full lg:min-h-screen px-5 lg:px-40 flex items-center min-h-[50vh] '>
      <div className="space-y-3 md:w-[588px] w-[350px]">
        <p className="text-[#0088FF] sm:text-[22px] text-[18px] font-bold">
          Advanced Healthcare
        </p>

        <p className="text-[#102D47] xl:text-[50px] sm:text-[30px] text-[20px] font-bold">
          Simplifying healthcare access with innovative technology
        </p>
        <p className="text-[#454D5D] xl:text-[20px] sm:text-[14px]">
          Excepteur sint occaecat cupidatat non proident sunt officia
        </p>

        <button
          onClick={() => navigate("/diagnosis")}
          className="bg-[#2F73F2] px-10 py-4 text-white hover:bg-[#0088FF] transition-color duration-500 delay-75 ease "
        >
          Diagnose Yourself
        </button>
      </div>
    </main>
  );
};

export default Start;
