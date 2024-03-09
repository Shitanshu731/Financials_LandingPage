import React from 'react'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div id="call" className={`${styles.footerMain} w-full py-20  bg-[#FDF7FA] flex justify-between px-20 flex-col gap-20 text-center`}>
      <h2 className='text-[40px] font-bold max-sm:text-[20px] '>Ready to achieve Financial Freedom?</h2>
      <p className="w-[80%] font-semibold mb-10 mx-auto -mt-10">There has never been a better time than right now.</p>
      <button className="bg-gradient-to-r from-[#ffffff] to-[#FFBB4D] rounded-full h-10 cursor-pointer shadow-lg w-40 mx-auto -mt-20 hover:scale-110 duration-200">Book a Free Call</button>
      <p className="w-[100%] mx-auto max-md:-mb-20 py-2 text-[14px] md:-mb-14">© Copyright 2024 PSSFinancials· All rights reserved.</p>
    </div>
  )
}

export default Footer
