"use client"
import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiNodedotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoIosGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { GitBranchIcon } from 'lucide-react';
import { FiFigma } from 'react-icons/fi';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  useGSAP(()=>{
    gsap.from("#box1",{
      x:-100,
      duration:1.2,
      opacity:0,
      ease:"power1.inOut",
      scrollTrigger:"#title"
    })
  })
  return (
    <div className='font-sans scroll-smooth' id='skills'>
        <h1 className='text-center mt-20 text-3xl font-sans font-semibold lg:text-5xl  text-[#deb992]' id='title'>Skills</h1>
        <div className='mt-14 lg:grid lg:grid-cols-12 lg:content-around' id='box1'>
          <div className=' flex-col items-center m-5 mb-14 lg:col-span-4 '>
            <h1 className='text-2xl text-center text-[#deb992]'>Languages</h1>
            <div className='flex justify-around m-3 border-zinc-600 shadow-md shadow-zinc-800 border p-5 rounded-2xl bg-white/20 text-[#1ba098] transition hover:scale-110 ease-in-out delay-200'>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><FaJava/></div>Java</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><TbBrandJavascript/></div>JavaScript</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><FaPython/></div>Python</div>
            </div>
          </div>
          <div className=' flex-col items-center m-5 mb-14 lg:col-span-4'>
            <h1 className='text-2xl text-center text-[#deb992]'>Frontend</h1>
            <div className='flex justify-around m-3 border-zinc-600 shadow-md shadow-zinc-800 border p-5 rounded-2xl bg-white/20 text-[#1ba098] transition hover:scale-110 ease-in-out delay-200'>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><RiReactjsFill/></div>React</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><RiNextjsFill/></div>Nextjs</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><RiTailwindCssFill/></div>Tailwind CSS</div>
            </div>
          </div>
           <div className=' flex-col items-center m-5 mb-14 lg:col-span-4'>
            <h1 className='text-2xl text-center text-[#deb992]'>Backend</h1>
            <div className='flex justify-around m-3 border-zinc-600 shadow-md shadow-zinc-800 border p-5 rounded-2xl bg-white/20 text-[#1ba098] transition hover:scale-110 ease-in-out delay-200'>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><SiNodedotjs/></div>Nodejs</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><SiExpress/></div>Express</div>
            </div>
          </div>
          <div className=' flex-col items-center m-5 mb-14 lg:col-span-4 lg:col-start-3 '>
            <h1 className='text-2xl text-center text-[#deb992]'>Databases</h1>
            <div className='flex justify-around m-3 border-zinc-600 shadow-md shadow-zinc-800 border p-5 rounded-2xl bg-white/20 text-[#1ba098] transition hover:scale-110 ease-in-out delay-200'>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><GrMysql/></div>MySQL</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><SiMongodb/></div>MongoDB</div>
            </div>
          </div>
          <div className=' flex-col items-center m-5 mb-14 lg:col-span-4'>
            <h1 className='text-2xl text-center text-[#deb992]'>Tools</h1>
            <div className='flex justify-around m-3 border-zinc-600 shadow-md shadow-zinc-800 border p-5 rounded-2xl bg-white/20 text-[#1ba098] transition hover:scale-110 ease-in-out delay-200'>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><IoIosGitMerge/></div>Git</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><FaGithub/></div>Github</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><FiFigma/></div>Figma</div>
              <div className='flex-col  items-center text-xl'>  <div className='flex justify-center'><SiPostman/></div>Postman</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills