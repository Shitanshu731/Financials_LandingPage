"use client"
import Image from 'next/image'
import React, { useEffect, useRef,MouseEvent } from 'react'
import styles from "../styles/MobileBar.module.css"

const MobileBar:React.FC = () => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const listItems = listRef.current?.querySelectorAll(`.${styles.list}`);

        function activeLink(event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) {
            listItems?.forEach((item) => item.classList.remove(styles.active));
            (event.currentTarget as HTMLElement).classList.add(styles.active);
        }

        listItems?.forEach((item) => item.addEventListener('click', activeLink as VoidFunction));

        return () => {
            listItems?.forEach((item) => item.removeEventListener('click', activeLink as VoidFunction));

        };
    }, [listRef]);
  return (
    <div className='fixed top-[40rem] w-full' >
       <div className={`${styles.navigation} mx-auto`}>
          <ul ref={listRef}>
            <li className={`${styles.list} ${styles.active}`}>
                <a href= "#">
                  <span className={`${styles.icon}`} ><Image  src ={"/home.jpg"} alt="Home" width={20} height={20} /></span>
                  <span className={`${styles.text}`}>Home</span>
                </a>
            </li>
            <li className={`${styles.list}`}>
                <a href= "#users">
                  <span className={`${styles.icon}`}><Image src ={"/people.png"} alt="Reviews" width={20} height={20} /></span>
                  <span className={`${styles.text}`}>Users</span>
                </a>
            </li>
            <li className={`${styles.list}`}>
                <a href= "#">
                  <span className={`${styles.icon}`}><Image src ={"/lock.png"} alt="Ensure your Plan" width={20} height={20} /></span>
                  <span className={`${styles.text}`}>Home</span>
                </a>
            </li>
            <li className={`${styles.list}`}>
                <a href= "#advice">
                  <span className={`${styles.icon} hidden`}><Image src ={"/sip.png"} alt="Talk to expert" width={20} height={20} /></span>
                  <span className={`${styles.text}`}>SIP</span>
                </a>
            </li>
            <li className={`${styles.list}`}>
                <a href= "#">
                  <span className={`${styles.icon}`}><Image src ={"/call.png"} alt="PSS_Logo" width={20} height={20} /></span>
                  <span className={`${styles.text}`}>Book a Call</span>
                </a>
            </li>
            <div className={`${styles.indicator}`}></div>
          </ul>
        </div>
    </div>
  )
}

export default MobileBar
