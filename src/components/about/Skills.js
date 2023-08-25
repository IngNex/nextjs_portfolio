import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
        dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold 
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
      <h2 className='font-bold text-8xl mt-64 w-full text-center 
      md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='pt-5'>
        <div className='w-full h-screen relative flex items-center
        justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
          <motion.div className='flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-5 shadow-dark cursor-pointer
          dark:bg-light dark:text-dark
          lg:p-6 md:text-sm md:p-4 sm:p-3 xs:text-xs xs:p-2'
          whileHover={{scale:1.05}}>
          App
          </motion.div>
          
          <Skill name="Flutter" x="-13vw" y="2vw"/>
          <Skill name="Dart" x="13vw" y="-2vw"/>
          <Skill name="Android" x="0vw" y="12vw"/>
          <Skill name="Bloc" x="-5vw" y="-12vw"/>
          <Skill name="Provider" x="16vw" y="-12vw"/>
          <Skill name="ApiRest" x="-20vw" y="-15vw"/>
          <Skill name="Responsive" x="0vw" y="-20vw"/>
          <Skill name="CleanArch" x="25vw" y="5vw"/>
          <Skill name="GetX" x="-25vw" y="5vw"/>
          <Skill name="Animation" x="18vw" y="18vw"/>
          <Skill name="Postman" x="-20vw" y="16vw"/>
          <Skill name="Firebase" x="32vw" y="-5vw"/>
          <Skill name="GitHub" x="-32vw" y="-5vw"/>
          
        </div>
      </div>
      <div className='pt-5 2xl:pt-20 lg:pt-5'>
        <div className='w-full h-screen relative flex items-center
        justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
          <motion.div className='flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-5 shadow-dark cursor-pointer
          dark:bg-light dark:text-dark
          lg:p-6 md:text-sm md:p-4 sm:p-3 xs:text-xs xs:p-2'
          whileHover={{scale:1.05}}>
          Web
          </motion.div>
          
          <Skill name="HTML" x="-13vw" y="2vw"/>
          <Skill name="CSS" x="13vw" y="-2vw"/>
          <Skill name="JavaScript" x="0vw" y="12vw"/>
          <Skill name="ReactJs" x="-5vw" y="-12vw"/>
          <Skill name="NodeJs" x="16vw" y="-12vw"/>
          <Skill name="ApiRest" x="-20vw" y="-15vw"/>
          <Skill name="Responsive" x="0vw" y="-20vw"/>
          <Skill name="Tailwind" x="25vw" y="5vw"/>
          <Skill name="NextJs" x="-25vw" y="5vw"/>
          <Skill name="Animation" x="18vw" y="18vw"/>
          <Skill name="Postman" x="-20vw" y="16vw"/>
          <Skill name="Firebase" x="32vw" y="-5vw"/>
          <Skill name="GitHub" x="-32vw" y="-5vw"/>
          
        </div>
      </div>
    </>
  )
}

export default Skills
