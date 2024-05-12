import React from "react";

const Navbar = () => {
  return (
    <nav className="mx-[6rem] mt-[2.75rem]">
      <div className="flex items-center justify-between w-full ">
        <div className="text-2xl font-bold">AR INTERIOR</div>
        <div className="flex items-center justify-center gap-[3.5rem] text-[1.6em]">
          <a href="">About</a>
          <a href="">Contact Us</a>
          <a href="">Pricing</a>
        </div>
        <div className="shadow-md px-6 py-3 rounded-full bg-[#151B54] text-white text-[1.6em]">
          Book a Free Call
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
