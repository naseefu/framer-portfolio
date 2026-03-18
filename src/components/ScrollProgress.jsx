import { useScroll, motion, useSpring } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const { dark, toggle } = useTheme()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3,
        background: dark?'#08ff04':'#04cdff', transformOrigin: '0%',
        scaleX, zIndex: 99998,
      }}
    />
  )
}
