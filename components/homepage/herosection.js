import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef, useLayoutEffect } from 'react';
const Herosection = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.headline', {
        opacity: 0,
        y: 50,
        duration: 0.6,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="overflow-hidden relative w- ">
      <div className="headline text-center font-extrabold text-6xl leading-[60px] font-Poppins absolute z-[20] w-full top-[20%] ">
        turning ideas into the real life
        <span className="text-blue-500">projects</span> is my calling.
      </div>

      <div className="relative h-[180vh] "></div>
    </div>
  );
};

export default Herosection;
