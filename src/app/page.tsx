"use client"
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutme from "../components/Aboutme";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div >
      <div className="h-screen p-1 min-w-75 ">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div>
        <Aboutme></Aboutme>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
