import { defaultOverrides } from 'next/dist/server/require-hook'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'
import { SiLeetcode } from 'react-icons/si'

function Footer() {
  return (
   <div className='mt-10 p-8 bg-gray-950 w-full'>
     <div className='text-white p-4 flex-col flex items-center'>
        <h1 className='text-md tracking-wider text-center mb-4 text-semibold'>Find me on:</h1>
        <div className='flex flex-row gap-5 justify-center mt-2 '>
        <a href="https://www.linkedin.com/in/parth-prakash-9920a4358/" className='hover:text-[#1ba098] hover:scale-110 transition ease-in-out duration-150' target='blank'><LiaLinkedin/></a>
        <a href="https://github.com/Parth-1709" className='hover:text-[#1ba098] hover:scale-110 transition ease-in-out duration-150' target='blank'><FaGithub/></a>
        <a href="https://leetcode.com/u/beast1234_/"className='hover:text-[#1ba098] hover:scale-110 transition ease-in-out duration-150' target='blank'><SiLeetcode/></a>
        </div>
    </div>
    <h1 className='text-xs text-white text-center mt-4'>© 2025 Parth Prakash</h1>
   </div>
  )
}

export default Footer