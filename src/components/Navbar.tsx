import React from 'react'
import { Link } from '../../constants/utils'

const Navbar = () => {
  return (
    <div className = "fixed z-[999]  w-full px-20 py-8 flex justify-between items-center">
        <div className='logo'>
            <img src ="https://pssfinancial.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpss_logo.6d80ab5c.png&w=640&q=75" width = "200rem"/>
        </div>
        <div className="links flex gap-10">
            {Link.map((i,index) =>(
                <a key={index} className='text-md capitalise font-light'>{i}</a>
            ) )}
        </div>
      
    </div>
  )
}

export default Navbar