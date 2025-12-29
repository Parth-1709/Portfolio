"use client"
import React from 'react'
import TypeWriter from "typewriter-effect"
function Hero() {
    
  return (
    <div className='w-full mt-10 text-white flex-col items-center flex lg:flex-row lg:justify-around lg:p-5 '>
       <img src="ChatGPT Image Dec 27, 2025, 11_13_16 PM.png" alt="profileimage " className='shadow-lg shadow-zinc-600 max-w-[90%] xs:max-w-[50%] md:max-w-[25%] rounded-full' />
       <div className='lg:w-[50%]'>
            <h1 className='text-xl mt-5 font-sans  text-center font-semibold lg:text-5xl text-[#1ba098]'>Hello, I am</h1>
            <h1 className='text-3xl mt-1 font-sans text-center font-bold lg:text-6xl  text-[#deb992]'>Parth Prakash</h1>
            <h1 className='mt-1 font-sans text-center text-xl font-semibold lg:text-5xl text-[#1ba098]'>And I'm a</h1>
            <div className='mt-1 text-3xl  text-center font-sans font-bold lg:text-6xl  text-[#deb992] '>
                <TypeWriter options={{
                strings:['Web Developer','DSA Enthusiast','Backend Developer'],
                autoStart:true,
                loop:true,
                delay:75
            }}></TypeWriter>
                </div>
        </div>

        
    </div>
  )
}

export default Hero