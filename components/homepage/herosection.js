import Image from 'next/image';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { motion} from 'framer-motion'


const Herosection = () => {

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: .9, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };


  return (
    <div className="containers overflow-hidden relative  ">
        {/* <motion.svg
      width="100vw"
      height="100vh"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="30"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="#0099ff"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        stroke="#0099ff"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#ff0055"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#ff0055"
        custom={3.5}
        variants={draw}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        stroke="#00cc88"
        custom={4}
        variants={draw}
      />
      <motion.circle
        cx="100"
        cy="500"
        r="80"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        stroke="#0099ff"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="#0099ff"
        variants={draw}
        custom={4.5}
      />
      <motion.rect
        width="40"
        height="40"
        x="410"
        y="430"
        rx="20"
        stroke="#ff0055"
        variants={draw}
        custom={5}
      />
    </motion.svg> */}
      <div className=" font-headline headline text-center font-extrabold text-6xl leading-[60px]  absolute z-[20] w-full top-[20%] ">
        turning ideas into the real life
        <span className="text-blue-500"> &nbsp; projects</span> is my calling.
      </div>

      <div className="relative h-[180vh] "></div>
    </div>
  );
};

export default Herosection;
