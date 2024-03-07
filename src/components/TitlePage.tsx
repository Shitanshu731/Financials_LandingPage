import React from 'react'
import { Motionh1 } from './MotionDiv';
import styles from "../styles/TitlePage.module.css"
const TitlePage = () => {
  return (
    <div className={` ${styles.titleBack} w-full py-20 rounded-tl-3xl rounded-tr-3xl`}>
      <div className={`${styles.title} text border-t-2 border-b-2 border-[#FDF7FA] flex overflow-hidden`} >
        <Motionh1 initial={{x : "0"}} animate={{x: "-100%"}} transition={{repeat : Infinity, ease :"linear",duration: 10}} className={`${styles.titleText} text-[10vw] py-10 text-nowrap leading-none font-bold pr-10`}>
          Pss Financials 
        </Motionh1>
        <Motionh1 initial={{x : "0"}} animate={{x: "-100%"}} transition={{repeat : Infinity, ease :"linear",duration: 10}} className={`${styles.titleText} text-[10vw] py-10 text-nowrap leading-none font-bold pr-10`}>
          Pss Financials
        </Motionh1>
        <Motionh1 initial={{x : "0"}} animate={{x: "-100%"}} transition={{repeat : Infinity, ease :"linear",duration: 10}} className={`${styles.titleText} text-[10vw] py-10 text-nowrap leading-none font-bold pr-10`}>
          Pss Financials
        </Motionh1>
      </div>
      </div>
  );
};

export default TitlePage;
