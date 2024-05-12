import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Navbar = () => {

  // useGSAP(()=>{
  //   gsap.from("",{
  //     y:-50,
  //     opacity:0,
  //     duration:1,
  //     delay:1
  //   })
  // },[])

  return (
    <nav className="mx-[6.3em] my-[2.75em] border">
      <div className="flex items-center justify-between w-full ">
        <div className="text-2xl font-bold">AR INTERIOR</div>
        <div className="flex items-center justify-center gap-[3.5rem] text-[1.6em]">
          <a href="" className="items">About</a>
          <a href="" className="items">Contact Us</a>
          <a href="" className="items">Pricing</a>
        </div>
        <div className="shadow-md px-6 py-3 rounded-full bg-[#151B54] text-white text-[1.6em]">
          Book a Free Call
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
