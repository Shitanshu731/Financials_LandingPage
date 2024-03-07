import React from "react";
import { details, quotes } from "../../constants/utils";
import { FaArrowUpLong } from "react-icons/fa6";
import { MotionDiv } from "./MotionDiv";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#FDF7FA] pt-1 font-bold">
      <div className="textstructure mt-52 flex flex-col px-20">
        {quotes.map((i, index) => (
          <div key={index} className="Quotes">
            <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (<MotionDiv initial={{width : 0}} animate ={{width : "9vw"}} transition={{ease : [0.66,0,0.24,1]}} className="rounded-md mr-3 ml-3 w-[10vw] h-[6vw] top-[.3vw] relative bg-[#FFBB4D]"></MotionDiv>)}
              <h1 className="uppercase text-[#25291C] text-[9vw] leading-[.79] tracking-tighter font-medium ">
                {i}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-[#FFBB4D] mt-32 flex justify-between items-center py-5 px-20">
        {details.map((i, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {i}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] rounded-full border-red-900 font-light text-sm">
            Start the Project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] flex items-center justify-center border-red-900">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

