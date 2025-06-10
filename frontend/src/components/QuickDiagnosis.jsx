import React from "react";

const QuickDiagnosis = () => {
  return (
    <div className="w-full overflow-hidden  sm:px-5 lg:px-40 mt-20 flex flex-col   xl:flex-row">
      <div className="bg-[#2F73F2] flex-[50%] text-center flex justify-center items-center lg:min-h-screen min-h-[50vh] text-[40px] text-white  w-full  ">
        <p>Get Quick Free <br /> Diagnosis</p>
      </div>

      <div className="min-h-screen flex-[50%] xl:relative  flex items-center justify-center p-5 bg-[#46C4FF]">
        <form action="" className="bg-white xl:absolute xl:-left-30 md:p-10 p-5 w-full space-y-3">
          <div className="flex flex-row w-full gap-5">
            <div htmlFor="" className="flex flex-col gap-3 w-full">
              <p>Name</p>
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none  border w-full border-[#547593] px-2 py-3"
                required
              />
            </div>

            <label htmlFor="" className="flex w-full flex-col gap-3">
              <p>Email</p>
              <input
                type="email"
                placeholder="Email address"
                className="outline-none w-full  border border-[#547593] px-2 py-3"
                required
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <label htmlFor="" className="flex w-full flex-col gap-3">
              <p>Phone</p>
              <input
                type="tel"
                placeholder="+91"
                className="outline-none border border-[#547593] px-2 py-3"
                required
              />
            </label>

            <label htmlFor="" className="flex w-full flex-col gap-3">
              <p>Department</p>
              <input
                type="text"
                placeholder="ml modelling"
                className="outline-none border border-[#547593] px-2 py-3"
                required
              />
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <label htmlFor="" className="flex flex-col gap-3 w-full">
              <p>Time</p>
              <input
                type="time"
                placeholder="12:00"
                className="w-full outline-none border border-[#547593] px-2 py-3"
                required
              />
            </label>

            <label htmlFor="" className="flex w-full flex-col gap-3">
              <p>Date</p>
              <input
                type="date"
                placeholder=""
                className="w-full outline-none border border-[#547593] px-2 py-3"
                required
              />
            </label>
          </div>

          <label htmlFor="" className="flex w-full flex-col gap-3">
            <p>Message</p>
            <textarea
              className="w-full outline-none border border-[#547593] px-2 py-3"
              name=""
              id=""
              rows={5}
              cols={10}
              required
              placeholder="Enter symptoms"
            ></textarea>
          </label>

          <button
            type="submit"
            className="px-6 py-3 border text-[#2F73F2] border-[#2F73F2]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickDiagnosis;
