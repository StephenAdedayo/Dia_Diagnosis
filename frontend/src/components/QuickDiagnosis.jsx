import React, { useContext, useState } from "react";
import { diaContext } from "../context/DiaContext";
import axios from "axios";
import { toast } from "react-toastify";

const QuickDiagnosis = () => {
  const { backendUrl } = useContext(diaContext);
  const [prediction, setPrediction] = useState("Prediction:");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Polyuria, setPolyuria] = useState("");
  const [Polydipsia, setPolydipsia] = useState("");
  const [SuddenWeightLoss, setSuddenWeightLoss] = useState("");
  const [weakness, setWeakness] = useState("");
  const [Polyphagia, setPolyphagia] = useState("");
  const [GenitalThrush, setGenitalThrush] = useState("");
  const [VisualBlurring, setVisualBlurring] = useState("");
  const [Itching, setItching] = useState("");
  const [Irritability, setIrritability] = useState("");
  const [DelayedHealing, setDelayedHealing] = useState("");
  const [PartialParesis, setPartialParesis] = useState("");
  const [MuscleStiffness, setMuscleStiffness] = useState("");
  const [Alopecia, setAlopecia] = useState("");
  const [Obesity, setObesity] = useState("");

  const predictDiabetes = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData()

      const { data } = await axios.post(backendUrl + "/api/model/predict", {
        Age,
        Gender,
        Polyuria,
        Polydipsia,
        SuddenWeightLoss,
        weakness,
        Polyphagia,
        GenitalThrush,
        VisualBlurring,
        Itching,
        Irritability,
        DelayedHealing,
        PartialParesis,
        MuscleStiffness,
        Alopecia,
        Obesity,
      });
      if (data.success) {
        setPrediction(`Prediction: ${data.prediction}`);
        toast.success(`You test ${data.prediction} for diabetes`)
      } else {
        setPrediction("Prediction failed.");
      }
      setAge("");
      setAlopecia("");
      setDelayedHealing("");
      setGender("");
      setItching("");
      setMuscleStiffness("");
      setObesity("");
      setPartialParesis("");
      setPolydipsia("");
      setPolyphagia("");
      setPolyuria("");
      setGenitalThrush("");
      setIrritability("");
      setVisualBlurring("");
      setWeakness("");
      setSuddenWeightLoss("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full overflow-hidd min-h-screen sm:px-5 lg:px-40 mt-20 flex flex-col  lg:flex-row">
      <div className="bg-[#2F73F2] hidden flex-[50%] text-center xl:flex justify-center items-center lg:min-h-screen min-h-[50vh] text-[40px] text-white w-full ">
        <p>
          Get Quick Free <br /> Diagnosis
        </p>
      </div>

      <div className="p-5  min-h-screen bg-[#65c3f3] flex-[50%] ">
        <p className="text-center text-white xl:hidden max-md:mb-10 block md:text-[35px] text-[25px]">
          Get Quick Free Diagnosis
        </p>

        <div className=" min-h-screen flex items-center justify-center ">
          <form
            onSubmit={predictDiabetes}
            className="bg-white  md:p-10 p-5 w-full min-h-screen  space-y-3"
          >
            <div className="flex flex-row w-full gap-5">
              <div htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Age</p>
                <input
                  value={Age}
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  placeholder="Age"
                  className="outline-none  border w-full border-[#547593] px-2 py-3"
                  required
                />
              </div>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Gender</p>
                <input
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  placeholder="Gender"
                  className="outline-none w-full  border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Polyuria</p>
                <input
                  value={Polyuria}
                  onChange={(e) => setPolyuria(e.target.value)}
                  type="text"
                  placeholder="Polyuria"
                  className="outline-none border w-full border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Polydipsia</p>
                <input
                  value={Polydipsia}
                  onChange={(e) => setPolydipsia(e.target.value)}
                  type="text"
                  placeholder="Polydipsia"
                  className="outline-none border w-full border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>SuddenWeightLoss</p>
                <input
                  value={SuddenWeightLoss}
                  onChange={(e) => setSuddenWeightLoss(e.target.value)}
                  type="text"
                  placeholder="Suddenweightloss"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Weakness</p>
                <input
                  value={weakness}
                  onChange={(e) => setWeakness(e.target.value)}
                  type="text"
                  placeholder="Weakness"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Polyphagia</p>
                <input
                  value={Polyphagia}
                  onChange={(e) => setPolyphagia(e.target.value)}
                  type="text"
                  placeholder="Polyphagia"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Genital Thrush</p>
                <input
                  value={GenitalThrush}
                  onChange={(e) => setGenitalThrush(e.target.value)}
                  type="text"
                  placeholder="Genital Thrush"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Visual Blurring</p>
                <input
                  value={VisualBlurring}
                  onChange={(e) => setVisualBlurring(e.target.value)}
                  type="text"
                  placeholder="Visual Blurring"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Itching</p>
                <input
                  value={Itching}
                  onChange={(e) => setItching(e.target.value)}
                  type="text"
                  placeholder="itching"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Irritability</p>
                <input
                  value={Irritability}
                  onChange={(e) => setIrritability(e.target.value)}
                  type="text"
                  placeholder="irritablity"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Delayed Healing</p>
                <input
                  value={DelayedHealing}
                  onChange={(e) => setDelayedHealing(e.target.value)}
                  type="text"
                  placeholder="delayed healing"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Partial Paresis</p>
                <input
                  value={PartialParesis}
                  onChange={(e) => setPartialParesis(e.target.value)}
                  type="text"
                  placeholder="Partial Paresis"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Muscle Stiffness</p>
                <input
                  value={MuscleStiffness}
                  onChange={(e) => setMuscleStiffness(e.target.value)}
                  type="text"
                  placeholder="muscle stiffness"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col gap-3 w-full">
                <p>Alopecia</p>
                <input
                  value={Alopecia}
                  onChange={(e) => setAlopecia(e.target.value)}
                  type="text"
                  placeholder="alopecia"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>

              <label htmlFor="" className="flex w-full flex-col gap-3">
                <p>Obesity</p>
                <input
                  value={Obesity}
                  onChange={(e) => setObesity(e.target.value)}
                  type="text"
                  placeholder="Obesity"
                  className="w-full outline-none border border-[#547593] px-2 py-3"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-3 border text-[#2F73F2] border-[#2F73F2]"
            >
              Submit
            </button>

            <div className="">{prediction}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickDiagnosis;
