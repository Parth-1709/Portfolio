"use client"
import React from 'react'

function Projects() {
  return (
    <div className='font-sans mt-14 ' id='projects'>
        <h1 className='text-center text-3xl font-semibold text-[#deb992] lg:text-5xl mb-14'>Projects</h1>
        <div>
            <div className='m-5 mb-10 flex flex-col items-center justify-center lg:flex-row lg:justify-around border-zinc-600 border-2 rounded-2xl p-4 shadow-md  shadow-zinc-700 bg-white/5 lg:m-20 lg:p-6 lg:gap-10'>
                <img src="firstphotonptel.png" alt="image" className=' mb-2 rounded-2xl border-0 bg-contain lg:w-[50%]'/>
                <div className='lg:w-[50%]'>
                    <h1 className='text-center font-semibold text-[#deb992] text-xl lg:text-3xl p-4'>Full-Stack AI-Assisted Resume Evaluator</h1>
                    <p className='text-[#1ba098] tracking-wider p-4'>Built a scalable full-stack platform that parses resumes and computes compatibility scores using NLP-driven analysis, a FastAPI backend, PostgreSQL, and a React dashboard for real-time insights.</p>
                    <a href="https://nptel-resume-project.vercel.app/" className=' p-2 block text-center cursor-pointer m-4 tracking-wider font-semibold rounded-full bg-white text-black hover:bg-zinc-400 hover:scale-110 transition duration-200 ease-in-out' target='blank'>View Project</a>
                </div>
            </div>
            <div className='m-5 mb-10 flex flex-col items-center justify-center lg:flex-row lg:justify-around border-zinc-600 border-2 rounded-2xl p-4 shadow-md  shadow-zinc-700 bg-white/5 lg:m-20 lg:p-6 lg:gap-10'>
                <img src="project1.png" alt="image" className=' mb-2 rounded-2xl border-0 bg-contain lg:w-[50%]'/>
                <div className='lg:w-[50%]'>
                    <h1 className='text-center font-semibold text-[#deb992] text-xl lg:text-3xl p-4'>User Authentication System with Next.js</h1>
                    <p className='text-[#1ba098] tracking-wider p-4'>Built a full authentication flow in Next.js including user registration, login, session handling, and form validation. Focused on secure routing and backend integration using API routes.</p>
                    <a href="https://nextjslogin-xnoo.vercel.app/login" className=' p-2 block cursor-pointer text-center m-4 tracking-wider font-semibold rounded-full bg-white text-black hover:bg-zinc-400 hover:scale-110 transition duration-200 ease-in-out' target='blank'>View Project</a>
                </div>
            </div>
             <div className='m-5 mb-10 flex flex-col items-center justify-center lg:flex-row lg:justify-around border-zinc-600 border-2 rounded-2xl p-4 shadow-md  shadow-zinc-700 bg-white/5 lg:m-20 lg:p-6 lg:gap-10'>
                <img src="project2.png" alt="image" className=' mb-2 rounded-2xl border-0 bg-contain lg:w-[50%]'/>
                <div className='lg:w-[50%]'>
                    <h1 className='text-center font-semibold text-[#deb992] text-xl lg:text-3xl p-4'>Image Sharpening using Python</h1>
                    <p className='text-[#1ba098] tracking-wider p-4 '>Implemented an image sharpening algorithm in Python to enhance image clarity by emphasizing edges and fine details. The project focuses on understanding image processing fundamentals and analyzing the effect of different sharpening techniques on image quality.</p>
                    <a href="https://github.com/Parth-1709/Imagekdproject" className=' p-2 block text-center cursor-pointer m-4 tracking-wider font-semibold rounded-full bg-white text-black hover:bg-zinc-400 hover:scale-110 transition duration-200 ease-in-out' target='blank'>View Project</a>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default Projects
