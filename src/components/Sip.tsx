import React from 'react'
import styles from "../styles/Sip.module.css"
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

const Sip = () => {
  return (
    <div id="sip" className={`${styles.sipMain} w-full py-5 px-20 flex  gap-32 items-center justify-between max-md:flex-col`}>
      <MotionDiv initial={{x: "-100%"}} animate={{x:0}} className={`${styles.leftContainer}`}>
      <h2 className='text-[40px] font-bold max-sm:text-[20px] -mt-10 mb-7'>Start SIP with expert guidance</h2>
      <p className="w-[80%] font-semibold mb-10">If you are new to SIP, it can be overwhelming to choose from all the options. Get expert guidance based on your specific Financial Goals.</p>
      <div className='flex gap-12 max-w-[100%] max-sm:flex-col'>
        <div className='flex flex-col gap-5'>
          <div className='flex gap-4 font-semibold items-center'><span><Image src ={"/tick.png"} alt ="tick" width={15} height={15} /></span><p>Returns that beat benchmark</p></div>
          <div className='flex gap-4 font-semibold items-center'><span><Image src ={"/tick.png"} alt ="tick" width={15} height={15} /></span><p>Get Compounding Returns</p></div>
        </div>
        <div className='flex flex-col gap-5'>
        <div className='flex gap-4 font-semibold items-center'><span><Image src ={"/tick.png"} alt ="tick" width={15} height={15} /></span><p>Funds backed by research</p></div>
        <div className='flex gap-4 font-semibold items-center'><span><Image src ={"/tick.png"} alt ="tick" width={15} height={15} /></span><p>Personalized Plans</p></div>
        </div>
      </div>
      </MotionDiv>
      <MotionDiv initial={{x: "100%"}} animate={{x:0}} ><Image className={`${styles.sipImg} ${styles.rightContainer}`} src ={"/sipImage.png"} alt ="SIP" width={600} height={222} /></MotionDiv>
    </div>
  )
}

export default Sip
