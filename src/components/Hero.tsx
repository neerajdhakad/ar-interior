import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero", {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }, []);
  
  return (
    <div className="hero my-24 text-[4em] leading-2 border">
      <div className="text-center font-medium">
        Redefining Interior Design
        <p className="">
          in{" "}
          <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Bhopal
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
