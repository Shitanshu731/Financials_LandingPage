import React from 'react'
import { Link } from '../../constants/utils'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className = {`${styles.navbar} fixed z-[999]  w-full px-20 py-8 flex justify-between items-center shadow-lg bg-blend-multiply` }>
        <div className='logo'>
            <Image src ={"/pss_logo.png"} alt="PSS_Logo" width={350} height={300}/>
        </div>
        <div className={`${styles.links} flex gap-10`}>
            {Link.map((i,index) =>(
                <a key={index} className='text-xl font-semibold  cursor-pointer'>{i}</a>
            ) )}
        </div>
      
    </div>
  )
}

export default Navbar