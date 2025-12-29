"use client"
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
    useGSAP(()=>{
        gsap.from('#aboutmeimg',{
            y:100,
            opacity:0,
            ease:"power1.inOut",
            duration:1,
            scrollTrigger:{
                trigger:"#title",
            }
        })
        gsap.from("#p1",{
            x:-100,
            opacity:0,
            duration:0.8,
            ease:"power1.inOut",
            scrollTrigger:{
                trigger:"#title",
            }
        })
         
    })
  return (
    <div className=" lg:flex lg:justify-around lg:items-center scroll-smooth" id='aboutme'>
        <div className='mt-10 lg:m-10 lg:w-[50%]'>
        <h1 id="title" className='text-center  text-[#deb992] text-3xl lg:text-5xl font-sans font-semibold'>About Me</h1>
        <div id='p1' className='text-[#1ba098] flex flex-col gap-3 tracking-wider font-sans text-md mt-5 p-6'>
            <p  className=' block'>Hello, I’m Parth Prakash. I’ve been curious about technology for as long as I can remember, which naturally led me to exploring and building things on the web. I enjoy creating websites not just for how they look, but for how they work — focusing on user experience while being mindful of performance and efficiency.</p>
            <p className='block'>I see every project as a learning opportunity. Alongside web development, I spend a lot of time improving my problem-solving skills through Data Structures and Algorithms, regularly practicing on platforms like LeetCode.</p>
            <p className='block'>I don’t want to limit my learning to a single domain. Beyond web development, I’m curious about areas like AI and enjoy exploring how different technologies connect. For me, continuous learning and not giving up when things get difficult are what truly matter.</p>
        </div>
        <div className='flex flex-col gap-10 items-center mt-9 mb-5 lg:flex-row lg:gap-10 lg:ml-5'>
            <div className='w-[70%] text-center text-[#deb992] bg-white/10 border-zinc-700 border backdrop-blur-md shadow-lg shadow-zinc-700 text-xl font-sans font-semibold p-4 rounded-xl hover:scale-110 transition ease-in-out duration-300'>400+ DSA Problems Solved</div>
            <div className='w-[70%] text-center text-[#deb992] bg-white/10 border-zinc-700 border backdrop-blur-md shadow-lg shadow-zinc-700 text-xl font-sans font-semibold p-4 rounded-xl hover:scale-110 transition ease-in-out duration-300'>Hands-on Project Building</div>
        </div>
        </div>
    <img src="aboutmeimage.png" id='aboutmeimg' alt="image" className='hidden lg:block max-w-[35%] rounded-[75px] shadow-lg shadow-zinc-600' />
    </div>
  )
}

export default Aboutme