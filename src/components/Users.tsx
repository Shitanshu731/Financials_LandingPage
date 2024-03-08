import React from 'react'
import { MotionDiv } from './MotionDiv'
import styles from "../styles/Users.module.css"
import { User } from '../../constants/utils';
import Image from 'next/image';

const Users = () => {
  return (
    <div id="users" className={`${styles.userMain} w-full py-20  bg-[#FDF7FA] flex justify-between px-20 max-md:flex-col gap-20`}>
      <div className={`${styles.leftContainer} flex flex-wrap gap-5 items-center justify-center`}>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:0,opacity:1}} className={`${styles.card1} w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative`}>
                <div className={`${styles.icon} rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center`}>
                  <Image src={"/arrowup.png"} alt="arrowup" height={23} width={23} className={`${styles.image}items-center absolute top-5 ml-5 text-2xl justify-center`} />
                  </div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>2000 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>Cores AUM</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:40,opacity:1}} className={`${styles.card2} w-64 h-52 max-sm:w-36  bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative`}>
                <div className={`${styles.icon} rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center`}>
                  <Image src={"/people.png"} alt="people" height={23} width={23} className={`${styles.image}items-center absolute top-5 ml-5 text-2xl justify-center`} />
                  </div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>10000 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>customers</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:0,opacity:1}} className={`${styles.card3} w-64 h-52 max-sm:w-36 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative`}>
                <div className={`${styles.icon} rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center`}>
                  <Image src={"/star.png"} alt="star" height={23} width={23} className={`${styles.image}items-center absolute top-5 ml-5 text-2xl justify-center`} />
                  </div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>5 star</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>User Reviews</h5>
            </MotionDiv>
            <MotionDiv initial={{y:'100px',opacity: 0}} animate={{y:40,opacity:1}} className={`${styles.card4} w-64 h-52 max-sm:w-36  bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] shadow-lg rounded-lg relative`}>
                <div className={`${styles.icon} rounded-full w-16 h-16 bg-gradient-to-r from-[#FDF7FA] to-[#FFBB4D] absolute top-5 ml-5 text-center`}>
                  <Image src={"/review.png"} alt="review" height={23} width={23} className={`${styles.image}items-center absolute top-5 ml-5 text-2xl justify-center`} />
                  </div>
                <h2 className='text-[30px] absolute top-24 ml-5 font-bold'>9.5 +</h2>
                <h5 className='text-[20px] absolute top-36 ml-5 font-bold'>Customer Satisfaction</h5>
            </MotionDiv>
      </div>
      <div className={`${styles.rightContainer}  justify-center`}>
           <h2 className='text-[40px] font-bold max-sm:text-[20px]'>Wondering how a Financial Expert can help you?</h2>
           <div className='flex gap-12 max-w-[100%] max-sm:flex-col '>
            <div>
              {User.leftTag.map((i) => (
                <div key={i} className='flex items-center gap-4 font-semibold mt-7'>
                  <Image src={"/tick.png"} alt="tick" height={15} width={15} />
                <p >{i.toLowerCase()}</p></div>
              ))}
            </div>
            <div>
              {User.rightTag.map((i) => (
                <div key={i} className='flex items-center gap-4 font-semibold mt-7'>
                <Image src={"/tick.png"} alt="tick" height={15} width={15} />
              <p >{i.toLowerCase()}</p></div>
              ))}
            </div>
           </div>
      </div>
    </div>
  )
}

export default Users
