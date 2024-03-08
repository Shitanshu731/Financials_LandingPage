import React from "react";
import { details, quotes } from "../../constants/utils";
import { MotionDiv } from "./MotionDiv";
import Image from "next/image";
import styles from "../styles/LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={`${styles.landingMain} w-full h-screen pt-1 font-bold`}>
      <div className="textstructure mt-52 flex flex-col px-20 max-md:mt-56 max-md:px-10 max-sm:px-5">
        {quotes.map((i, index) => (
          <div key={index} className="Quotes ">
            <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (<MotionDiv initial={{width : 0,opacity : 0}} animate ={{width : "14vw",opacity : 1}} transition={{ease : [0.56,0,0.24,1]}} className="mr-3 ml-3 w-[10vw] h-[6vw] top-[.3vw] relative max-md:ml-1 "><Image src ={"/gif.gif"} alt="Investement_Logo"  width={600} height={300} /></MotionDiv>)}
              <h1 className="uppercase text-[#25291C] text-[9vw] max-md:text-[8vw] leading-[.79] max-md:leading-[1] tracking-tighter font-medium ">
                {i}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2   border-[#FFBB4D] mt-32 flex max-md:flex-col max-md:gap-5 max-md:mt-[11.6rem] justify-between items-center py-5 px-20">
        {details.map((i, index) => (
          <p
            key={index}
            className="text-md font-semibold tracking-tight leading-none underline cursor-pointer"
          >
            {i}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] rounded-full shadow-lg bg-[#FDF7FA] cursor-pointer text-sm font-bold hover:scale-110 duration-200 ">
            Book a Call
          </div>
          <div className="w-5 h-5 rounded-full  flex  items-center justify-center   cursor-pointer shadow-lg  duration-300 ">
            <span className="rotate-[-90deg] hover:rotate-[-125deg]">
              <Image src={"/downarrow.png"} alt="downarrow" height={43} width={43} className="text-sm z-50 hover:scale-150 hover:bg-[#FFBB4D] rounded-full duration-300 shadow-lg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

