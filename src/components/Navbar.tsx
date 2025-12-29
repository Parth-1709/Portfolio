"use client"
import React, { useState } from 'react'

import { Menu } from 'lucide-react'
import { X } from 'lucide-react';
function Navbar() {
  const [menu,ismenu] = useState(true);
  const setmenu=()=>{
    ismenu(prev=>!prev);
  }
  return (
    <div className='relative '>
      <div className={`flex lg:m-10  md:m-8 m-5 items-center  justify-between text-[#1ba098] tracking-wider font-sans `}>
        <h1 className='font-bold text-xl md:text-5xl p-2'>Parth Prakash</h1>
        <ul className='hidden
        lg:flex lg:justify-around lg:gap-15 lg:items-center'>
            <a href='#aboutme'  className='cursor-pointer hover:text-white'>About me</a>
            <a href='#skills' className='cursor-pointer hover:text-white'>Skills</a>
            <a href='#projects' className='cursor-pointer hover:text-white'>Projects</a>
            <a href='#contact' className='cursor-pointer hover:text-white'>Contact</a>
            <a href='https://drive.google.com/file/d/1edPhtO5kw24PwgmzM-yT3q9BZGyPSMqS/view?usp=sharing' target='blank' className='px-8 py-2 rounded-full bg-blue-950 cursor-pointer text-[#deb992]  items-center flex hover:bg-blue-950/50 hover:scale-110 transition ease-in-out'>Resume</a>
        </ul>
        <Menu className={`lg:hidden ${menu?"":"hidden"} cursor-pointer right-0`} onClick={setmenu}></Menu>
      </div>
      <div className={`${menu?"hidden":""}  lg:hidden  text-zinc-200  fixed inset-0  backdrop-blur-md`}>
        <X className={`lg:hidden ${menu?"hidden":""} cursor-pointer absolute top-6 right-6`} onClick={setmenu}></X>
          <ul className='text-xl flex flex-col items-center gap-10 mt-10'>
            <a href='#aboutme' className='cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-120' onClick={setmenu}>About me</a>
            <a href='#skills' className='cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-120' onClick={setmenu}>Skills</a>
            <a href='#projects' className='cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-120' onClick={setmenu}>Projects</a>
            <a href='#contact' className='cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-120' onClick={setmenu}>Contact</a>
            <a href="https://drive.google.com/file/d/1edPhtO5kw24PwgmzM-yT3q9BZGyPSMqS/view?usp=sharing" target='blank' className='cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-120'>Resume</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar