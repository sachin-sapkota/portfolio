import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import AnimateInOut from "./AnimateInOut"

const FadeInOut = ({ children, delay, x, y, durationIn, durationOut }) => (
  <AnimateInOut
    as="div"
    durationIn={durationIn || 1}
    durationOut={durationOut || 0.25}
    delay={delay}
    from={{
      transform: "translate(" + (x || 0) + "px, " + (y || 0) + "px)",
      opacity: 0,
      duration: 0.25,
      ease: "power4.out",
    }}
    to={{
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power4.inOut",
    }}
  >
    {children}
  </AnimateInOut>
)

export default FadeInOut
