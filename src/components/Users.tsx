import React from 'react'
import { MotionDiv } from './MotionDiv'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";

const Users = () => {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#FDF7FA] flex justify-between px-20 max-md:flex-col gap-20'>
      <div className='leftContainer flex flex-wrap gap-5 md:max-w-[100%] items-center justify-center'>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:40,opacity:1}} className='card w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative'>
                <div className='icon rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center'><FaArrowTrendUp className='items-center absolute top-5 ml-5 text-2xl justify-center' /></div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>2000 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>Cores AUM</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:0,opacity:1}} className='card w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative'>
                <div className='icon rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center'><IoPeopleSharp className='items-center absolute top-5 ml-5 text-2xl justify-center' /></div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>10000 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>customers</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:50,opacity:1}} className='card w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative'>
                <div className='icon rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center'><FaStar className='items-center absolute top-5 ml-5 text-2xl justify-center' /></div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>5 star</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>User Reviews</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:0,opacity:1}} className='card w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative'>
                <div className='icon rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center'><GoCodeReview className='items-center absolute top-5 ml-5 text-2xl justify-center' /></div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>9.5 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>Customer Satisfaction</h5>
            </MotionDiv>
      </div>
      <div className='rightContainer  max-w-[50%] max-md:max-w-[100%] justify-center'>
           <h2 className='text-[40px] font-bold'>Wondering how a Financial Expert can help you?</h2>
           <div className='flex flex-wrap gap-12 max-w-[100%] '>
            <p>Customized investment solutions</p>
            <p>New investment ideas</p>
            <p>Research-backed fund selection</p>
            <p>Tax planning</p>
            <p>Real-time portfolio monitoring</p>
            <p>Returns that beat benchmark</p>
            <p>Periodic portfolio reviews</p>
            <p>Wealth protection planning</p>
           </div>
      </div>
    </div>
  )
}

export default Users
