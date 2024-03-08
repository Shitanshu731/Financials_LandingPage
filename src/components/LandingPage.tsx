import React from "react";
import { details, quotes } from "../../constants/utils";
import { MotionDiv } from "./MotionDiv";
import Image from "next/image";
import styles from "../styles/LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={`${styles.landingMain} w-full h-screen pt-1 font-bold `}>
      <div className="textstructure mt-52 flex flex-col px-20 max-md:mt-56 max-md:hidden max-sm:px-5">
        {quotes.map((i, index) => (
          <div key={index} className="Quotes  ">
            <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (<MotionDiv initial={{width : 0,opacity : 0}} animate ={{width : "14vw",opacity : 1}} transition={{ease : [0.56,0,0.24,1]}} className=" mr-3 ml-2 w-[10vw] max-md:hidden  h-[6vw] top-[.3vw] relative max-md:ml-1 "><Image src ={"/gif.gif"} alt="Investement_Logo"  width={600} height={300} /></MotionDiv>)}
              <h1 className="uppercase text-[#25291C] text-[9vw] max-md:text-[4vw] leading-[.79] max-md:leading-[1] tracking-tighter font-medium ">
                {i}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden z-50  absolute  text-sm w-full"><h1 className="text-center mx-auto w-[60%] mt-[11.7rem] font-semibold">Grow Your Wealth with Expert Guidance</h1></div>
      <Image className="md:hidden mx-auto h-52 mt-60 rounded-lg shadow-lg sm:w-[30rem]" src ={"/gif.gif"} alt="Investement_Logo"  width={360} height={50} />
      <p  className="text-center mx-auto w-[70%] mt-[1rem] font-semibold text-[13px]">Connect with Financial Experts whom you can trust and get the best guidance on creating, protecting and managing your Wealth.</p>
      <div className="md:border-t-2 border-[#FFBB4D] mt-32 flex max-md:flex-col max-md:gap-5 max-md:mt-[1rem] justify-between items-center py-5 px-16">
        {details.map((i, index) => (
          <div
            key={index}
            className="text-md text-[#25291C] font-semibold tracking-tight leading-none cursor-pointer flex gap-2"
          >
            <Image src={"/tick.png"} alt="tick" height={15} width={15} /><p>{i}</p>
          </div>
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

