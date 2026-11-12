"use client"

import Image from 'next/image'
import userImage from '../public/images/user.jpg'
import * as motion from "motion/react-client"
import { Typewriter } from 'react-simple-typewriter'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex-1 flex flex-col justify-center text-[#0F172A]'>
        <Image src={userImage} alt='user-icon' width={60} height={60} className='rounded-full mb-2' />
        <span>Hey there,</span>
        <h1 className='text-3xl sm:text-7xl font-bold mt-2'>
            I'm 
            <Typewriter
            words={[" Olamide Afunsho."]}
            loop={0} // 0 means infinite loop
            cursor
            cursorStyle="!"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
            />
            <br /> Software Engineer
        </h1>
        <p className='italic mt-4 text-[#64748B]'>
            With 3+ years of building software, each day, I get closer to being world-class.
        </p>
    </div>
    </>
  )
}

export default Hero