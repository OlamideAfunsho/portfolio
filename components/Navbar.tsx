"use client";

import React, { useEffect, useState } from 'react'
import { momoSignature } from '@/app/font';
import { HomeIcon, SendIcon, FileIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className='flex items-center justify-between px-6 py-3 text-[#121212]'>
        <h1 className={`${momoSignature.className}  `}>Prodigy</h1>

        <div className='flex gap-2 p-1 sm:px-2 sm:py-2 bg-white/10 backdrop-blur-md rounded-md border border-[#E2E8F0]'>
            {navLinks.map((link, i) => (
                <Link key={i} href={link.href} className=' hover:bg-[#F8FAFC] p-1 sm:p-3 rounded-sm'>
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