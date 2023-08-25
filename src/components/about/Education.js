import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'
import Link from 'next/link';


const Details =({type, time, place, info, link})=>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <Link href={link} target={'_blank'}>
              <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                  {type}
              </h3>
            </Link>
            <span className='capitalize font-medium text-dark/80 dark:text-light/80 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
  );
    
  return (
    <div className='my-64'> 
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
      
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
            type='Systems Engineering Bachelor'
            time='2018-2022'
            place='National University of Cañete (UNDC)'
            info="Relevant courses included algorithms, data structure, web design, 
            database, mobile applications with android studio, introduction to AI."
            link="https://portal.undc.edu.pe"/>
            <Details
            type='Professional Technician Industrial Electrician'
            time='2014-2016'
            place='National Industrial Work Training Service (SENATI)'
            info="Relevant courses included structured cabling, motor starting with PLC programming, 
            electrical port programming, and hydraulic installation programming."
            link="https://www.senati.edu.pe"
            />
        </ul>
      </div>
    </div>
  )
}

export default Education
