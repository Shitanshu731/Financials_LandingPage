import React from 'react'
import styles from "../styles/Advice.module.css"
import { MotionDiv } from './MotionDiv'
import Image from 'next/image'

const Advice = () => {
  return (
    <div id="advice" className={`${styles.adviceMain} w-full py-20 `}>
        <h2 className='text-center font-bold text-3xl max-sm:text-2xl'>Overwhelmed with Finance Lingos?</h2>
        <p className='text-center text-xl mx-auto w-[80%] mt-6 '>Our Financial Experts can cut through the noise and give you a simple, actionable plan to achieve your Financial Goals.</p>
        <div className='boxContainer mt-10 flex gap-3 flex-wrap w-full'>
            <MotionDiv initial={{x:"-100%",opacity:0}} animate={{x:0,opacity:1}}  className={`${styles.eachBox} max-md:w-[22rem] w-[25rem] rounded-lg h-[20rem] items-center justify-center relative mx-auto`}>
                <Image src={"/arrowup.png"} alt="arrowup" height={23} width={23} className='mt-6 text-3xl text-center items-center mx-auto mb-5'/>
                <h5 className='text-center font-bold text-2xl'>Make your Money, make Money</h5>
                <p className='text-center px-4 mt-9 text-lg'>SIP sounds like a jargon, but its not. You can start with as little amount as possible and start seeing your money work for you.</p>
                <button className='text-center mx-auto cursor-pointer py-3 px-2 bg-[#FFBB4D] absolute top-[80%] left-[38%] rounded-md hover:bg-[#ffbb4de0] shadow-lg'>Book a Call</button>
            </MotionDiv>          
            <MotionDiv initial={{y:"100%",opacity:0}} animate={{y:0,opacity:1}}  className={`${styles.eachBox} max-md:w-[22rem] w-[25rem] rounded-lg h-[20rem] items-center justify-center relative mx-auto`}>
                <Image src={"/lock.png"} alt="shield" height={23} width={23} className='mt-6 text-3xl text-center items-center mx-auto mb-5'/>
                <h5 className='text-center font-bold text-2xl'>Shield your Wealth</h5>
                <p className='text-center px-4 mt-9 text-lg'>We know how difficult it can be to go through 100s of Insurance policies. Get the best guidance on insurance that suits you.</p>
                <button className='text-center mx-auto cursor-pointer py-3 px-2 bg-[#FFBB4D] absolute top-[80%] left-[38%] rounded-md hover:bg-[#ffbb4de0] shadow-lg'>Book a Call</button>
            </MotionDiv>          
            <MotionDiv initial={{x:"100%",opacity:0}} animate={{x:0,opacity:1}}  className={`${styles.eachBox} max-md:w-[22rem] w-[25rem] rounded-lg h-[20rem] items-center justify-center relative mx-auto`}>
                <Image src={"/percentage.png"} alt="percentage" height={23} width={23}  className='mt-6 text-3xl text-center items-center mx-auto mb-5'/>
                <h5 className='text-center font-bold text-2xl'>Save Tax upto ₹85,800</h5>
                <p className='text-center px-4 mt-9 text-lg'>Financial Year 2023-24 is around the corner. It’s high time to plan how much you can save on taxes this year and put it in your pocket.</p>
                <button className='text-center mx-auto cursor-pointer py-3 px-2 bg-[#FFBB4D] absolute top-[80%] left-[38%] rounded-md hover:bg-[#ffbb4de0] shadow-lg'>Book a Call</button>
            </MotionDiv>                  
        </div>
    </div>
  )
}

export default Advice
