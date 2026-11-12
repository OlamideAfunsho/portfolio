"use client";

import React, { useEffect, useState } from 'react'
import { momoSignature } from '@/app/font';
import { HomeIcon, SendIcon, FileIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

const Navbar = () => {

    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    // if (!time) {
    //     return <span className="text-[#71717A] text-sm">--:--:-- --</span>;
    // }

    const navLinks = [
        {
            icon: HomeIcon,
            href: '/'
        },
        {
            icon: SendIcon,
            href: '/'
        },
        {
            icon: FileIcon,
            href: '/'
        },
        {
            icon: MailIcon,
            href: '/'
        }
    ]

  return (
    <>
    <div className='flex items-center justify-between'>
        <h1 className={`${momoSignature.className}  `}>Prodigy</h1>

        <div className='flex gap-2 px-2 py-2 bg-white/10 backdrop-blur-md rounded-full border border-[#E2E8F0]'>
            {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className='transition-colors duration-500 ease-in-out hover:bg-[#edf2f6] p-1 sm:p-3 rounded-full'>
                <link.icon className='w-4 h-4 sm:w-auto sm:h-auto' />
            </Link>
            ))}
        </div>

        <span className='font-bold font-mono text-[12px] sm:text-[16px]'>{time}</span>
    </div>
    </>
  )
}

export default Navbar