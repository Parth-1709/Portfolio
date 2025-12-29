"use client"

import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
function Contact() {
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [message,setmessage]=useState("");
  const[loading,setloading] = useState(false);
  const sendEmail=async (e:any)=>{
    e.preventDefault();
    setloading(true);
    const serviceID = "service_1o461oc"
    const templateID = "template_8pjsou2"
    const publicKey = "5ifqDzhylHgWALNGq"

    const  templateParams = {
      name:name,
      email:email,
      message:message
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      console.log("Email sent successfully");
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.log("Error sending email", error);
    } finally {
      setloading(false); 
    }
    
  }
  return (
    <div className='font-sans scroll-smooth' id='contact'>
      <h1 className=' text-[#deb992] text-3xl font-semibold mt-20  text-center mb-4 lg:text-5xl '>Contact Me</h1>
      <div className='lg:flex lg:justify-center gap-20 items-center '>
        
        <div className='p-10 mt-4 lg:w-[50%]'>
          <form onSubmit={sendEmail} className='flex flex-col  '>
            <label className='text-[#1ba098] ml-3 tracking-wider'>Name</label>
          <input type="text" className='bg-white/5 text-white m-1 mb-6 rounded-lg tracking-wider text-xl p-2 ' placeholder='Enter Name' required value={name} onChange={(e)=>setname(e.target.value)} />
          <label className='text-[#1ba098] ml-3 tracking-wider'>Email</label>
          <input type="text" placeholder='Enter Email'className='bg-white/5 m-1 rounded-lg tracking-wider text-xl text-white  mb-6 p-2 ' required value={email} onChange={(e)=>setemail(e.target.value)} />
          <label className='text-[#1ba098] ml-3 tracking-wider'>Message</label>
          <textarea name="message" className='bg-white/5 text-white  m-1 mb-8 rounded-2xl tracking-wider text-xl p-2 ' id='msg' placeholder='Enter Message' value={message} onChange={(e)=>setmessage(e.target.value)} rows={3} cols={20}></textarea>
          <button type='submit' disabled={loading} className='p-2 block text-center m-4 cursor-pointer tracking-wider font-semibold rounded-xl bg-white text-black hover:bg-zinc-400 hover:scale-110 transition duration-200 ease-in-out mt-4'>{loading?"Sending Email":"Send Email"}</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
