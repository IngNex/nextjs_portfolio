import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
        dark:text-dark dark:bg-light
        '
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration:1.5}}}
        viewport={{once: true}}>
        {name}
    </motion.div>
  )
}

const Skills = () => {
  
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center
      justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light px-2 py-7 shadow-dark cursor-pointer
        dark:bg-light dark:text-dark'
        whileHover={{scale:1.05}}>
        App/Web
        </motion.div>
        
        <Skill name="Flutter" x="-5vw" y="-12vw"/>
        <Skill name="Dart" x="-20vw" y="-15vw"/>
        <Skill name="Bloc" x="15vw" y="-12vw"/>
        <Skill name="Android" x="0vw" y="-20vw"/>
        <Skill name="HTML" x="0vw" y="12vw"/>
        <Skill name="CSS" x="-25vw" y="2vw"/>
        <Skill name="Javascript" x="25vw" y="5vw"/>
        <Skill name="Firebase" x="32vw" y="-5vw"/>
        <Skill name="Design" x="-25vw" y="18vw"/>
        <Skill name="Tailwind" x="18vw" y="18vw"/>

      </div>
    </>
  )
}

export default Skills
