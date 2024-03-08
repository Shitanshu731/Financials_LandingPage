import React from "react";
import { Link } from "../../constants/utils";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div
      className={`${styles.navbar} fixed z-[999]  w-full px-20 py-8 flex justify-between items-center shadow-lg bg-blend-multiply `}
    >
      <div className="logo">
        <Image src={"/pss_logo.png"} alt="PSS_Logo" width={200} height={200} />
      </div>
      <div className={`${styles.links} flex gap-10 max-md:hidden`}>
        {Link.map((i, index) => (
          <a
            key={index}
            className={`${
              index === 2
                ? "ml-28 bg-[#FFBE55] rounded-full p-2 flex items-center gap-3"
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
