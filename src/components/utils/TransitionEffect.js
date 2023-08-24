import { motion } from 'framer-motion'
import React from 'react'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed bottom-full h-screen w-screen z-30 bg-blue-600'
        initial={{y:"100%", height:"100%"}}
        animate={{y:"0%", height:"0%"}}
        exit={{y:["0%", "100%"], height:["0%", "100%"]}}
        transition={{duration:0.8, ease:"easeInOut"}}
        />
        <motion.div className='fixed bottom-full h-screen w-screen z-20 bg-red-600'
        initial={{y:"100%", height:"100%"}}
        animate={{y:"0%", height:"0%"}}
        transition={{delay:0.2,duration:0.8, ease:"easeInOut"}}
        />
        <motion.div className='fixed bottom-full h-screen w-screen z-10 bg-primaryDark'
        initial={{y:"100%", height:"100%"}}
        animate={{y:"0%", height:"0%"}}
        transition={{delay:0.3,duration:0.8, ease:"easeInOut"}}
        />  
    </>
  )
}

export default TransitionEffect
