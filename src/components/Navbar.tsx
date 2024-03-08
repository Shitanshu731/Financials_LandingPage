import React from "react";
import { Link } from "../../constants/utils";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div
      className={`${styles.navbar} fixed z-[999]  w-full px-20 py-8 flex justify-between max-md:gap-6 items-center md:shadow-lg bg-blend-multiply`}
    >
      <div className="logo max-md:hidden">
        <Image src={"/pss_logo.png"} alt="PSS_Logo" width={200} height={200} />
      </div>
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
                ? "ml-28 bg-[#FFBE55] rounded-full p-2 flex items-center gap-3 max-md:p-4 max-md:max-h-10 max-md:text-[10px] max-md:w-52 max-md:mx-auto justify-between"
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
                className={`${styles.downArrow} text-3xl`}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};
<script></script>;
export default Navbar;
