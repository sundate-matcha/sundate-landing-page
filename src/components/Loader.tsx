'use client'

import Logo from '../assets/images/logo.png'
import LogoText from '../assets/images/typeface.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import '../styles/loader.scss'

function Loader() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    /* From Uiverse.io by Li-Deheng */
    <div
      className={'flex h-dvh bg-background w-full items-center justify-center'}
    >
      <a
        href={'#'}
        className={
          'cursor-pointer justify-center flex items-center gap-4 flex-row '
        }
      >
        <motion.img
          src={Logo}
          alt="Sundate Logo"
          className={'md:h-24 h-14'}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.img
          src={LogoText}
          alt="Sundate Logo Text"
          className={'md:h-24 h-14'}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </a>
    </div>
  )
}

export default Loader
