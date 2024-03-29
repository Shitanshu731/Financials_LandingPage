import React from "react";
import { Link } from "../../constants/utils";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

const Navbar: React.FC = () => {
  return (
    <div
      className={`${styles.navbar} fixed max-md:absolute  max-md:mx-auto z-[999]  w-full px-20 py-8  max-md:py-32 flex justify-between max-md:gap-6 items-center md:shadow-lg bg-blend-multiply `}
    >
      <MotionDiv initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="logo max-md:hidden">
        <Image src={"/companyLogo.png"} alt="PSS_Logo" width={100} height={50} />
      </MotionDiv>
      <div className={`${styles.links} flex gap-10 max-md:gap-0 max-md:w-full`}>
        {Link.map((i, index) => (
          <a
            key={index}
            className={`${
              index === 1  ?
                "max-md:hidden"  :""  
            } 
            ${
              index === 0  ?
                "max-md:hidden"  :""  
            } ${
              index === 2
                ? "ml-28 bg-[#FFBE55] rounded-full p-2 flex items-center gap-3 max-md:p-4 max-md:max-h-6 max-md:text-[12px] max-md:top-7 max-md:absolute max-md:w-48 max-md:mx-auto justify-between"
                : ""
            } text-xl font-semibold cursor-pointer`}
          >
            {i}{" "}
            {index === 2 && (
              <Image
                src={"/downarrow.png"}
                alt="downarrow"
                width={33}
                height={33}
                className={`${styles.downArrow} text-xl max-md:w-6`}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
