import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import Image from 'next/image'

import { useTheme } from 'next-themes'
const SideBar = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <Image
                src='/images/mifoto.jpg'
                alt='myAvatar'
                className='w-40 h-40 mx-auto rounded-full'
                height='128px'
                width='128px'
                layout='intrinsic'
                quality='100'
            />
            <h3
                className='my-4 text-3xl font-medium tracking-wider font-Patrick'
            >
                <span className='text-green'>Marcelo </span>Batista
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
            >
                Web Developer | Mobile Developer
            </p>
            <a
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
                href='/images/blink.jpg'
                download='Marcelo Batista Resume.pdf'
            >
                <GiTie className='w-6 h-6' /> Download Resume
            </a>
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href=''>
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href=''>
                    <AiFillInstagram className='w-8 h-8 cursor-pointer' />
                </a>
            </div>
            <div>

            </div>
            <div
                className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
            >
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Canelones, Uruguay</span>
                </div>
                <p className='my-2'>chelobat16411@gmail.com</p>
                <p className='my-2'>+598 092438757</p>
            </div>
            <button
                className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'
                onClick={() => window.open('mailto:chelobat16411@gmail.com')}
            >
                Email me
            </button>
            <button
                onClick={changeTheme}
                className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400'
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default SideBar

