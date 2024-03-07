import React from "react";
import { details, quotes } from "../../constants/utils";
// import { FaArrowUpLong } from "react-icons/fa6";
import { MotionDiv } from "./MotionDiv";
import Image from "next/image";
import styles from "../styles/LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={`${styles.landingMain} w-full h-screen pt-1 font-bold`}>
      <div className="textstructure mt-52 flex flex-col px-20">
        {quotes.map((i, index) => (
          <div key={index} className="Quotes">
            <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (<MotionDiv initial={{width : 0,opacity : 0}} animate ={{width : "14vw",opacity : 1}} transition={{ease : [0.56,0,0.24,1]}} className="mr-3 ml-3 w-[10vw] h-[6vw] top-[.3vw] relative "><Image src ={"/Investement.jpg"} alt="Investement_Logo"  width={600} height={300} /></MotionDiv>)}
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
          <div className="px-5 py-2 border-[2px] rounded-full border-red-900  text-sm font-bold">
            Book a Call
          </div>
          <div className="w-5 h-5 rounded-full border-[2px] flex  items-center justify-center border-black hover:bg-[#FFBB4D] hover:border-none cursor-pointer shadow-lg hover:scale-150 duration-150 hover:p-4">
            <span className="rotate-[45deg]">
              {/* <FaArrowUpLong className="text-sm" /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

