import React, { useRef, useContext } from "react"
import { gsap } from "gsap"
import { Box } from "theme-ui"
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect"
import { TransitionContext } from "../context/TransitionContext"

const FadeInUp = ({ as, children, duration, delay, y }) => {
  const el = useRef()

  gsap.set(el.current, { transform: "translate(0px, " + (y || 40) + "px)" })

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      y: 0,
      opacity: 1,
      delay: delay || 0,
      duration: duration || 0.5,
      ease: "back.out",
    })
  }, [])

  return (
    <Box as={as} sx={{ opacity: 0 }} ref={el}>
      {children}
    </Box>
  )
}

export default FadeInUp
