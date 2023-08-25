import AnimationText from '@/components/AnimationText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/1.jpg"
import project2 from "../../public/images/projects/2.jpg"
import project3 from "../../public/images/projects/3.jpg"
import project4 from "../../public/images/projects/4.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/utils/TransitionEffect'

const FramerImage = motion(Image);

/* =============== Components FeaturedProject ================= */
const FeaturedProject = ({type, title, summary, img, link,  github})=>{
    return (
        <motion.div
        initial={{y:80}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        >
            <article className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-xl xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                priority
                sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw 33vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-base'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>

        </motion.div>
        
    )
}

/* =============== Components Project ================= */
const Project = ({title, type, img, link, github})=>{
    return(
        <motion.div
        initial={{y:80}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        >
<article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
            rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                priority
                sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw 33vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark
                lg:text-lg md:text-base '>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold
                    lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank'
                    className='text-lg text-semibold underline md:text-base'
                    >
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon/>
                    </Link>
                    
                </div>
            </div>
        </article>
        </motion.div>
        
    )
}


/* ================ Page Projects ==================== */
const projects = () => {
  return (
    <>
      <Head>
        <title>MaicolDev | Projects Page</title>
        <meta name='description' content='any description'/>
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimationText text="Code innovates knowledge!!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="Portfolio Personal Web"
                    img={project3}
                    summary="A Personal Portfolio web page in which he uses React, NextJs, Tailwind CSS, 
                    React Router, FramerMotion, DarkMode. It shows information about me and the projects 
                    that I carry out or practice."
                    link="/"
                    type="Featured Project"
                    github="https://github.com/IngNex/nextjs_portfolio"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="ApiRest Pokemon UI Mobile"
                    img={project1}
                    link="https://github.com/IngNex/flutter-apipokemon-practice"
                    type="Practice Project"
                    github="https://github.com/IngNex/flutter-apipokemon-practice"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="ApiRest DragonBall UI Mobile"
                    img={project2}
                    link="https://github.com/IngNex/flutter_dragonball_ui"
                    type="Practice Project"
                    github="https://github.com/IngNex/flutter_dragonball_ui"
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject
                    title="App Rick and Morty"
                    img={project4}
                    summary="A well featured technical test app using Flutter, Dart, Bloc, Animation, SearchWidget and Dark Theme. 
                    I use the Rick and Morty API to display character and episode information, which can be done by selecting a 
                    character and being able to view its information. Likewise, a character search engine was added."
                    link="https://github.com/IngNex/rickandmorty_app"
                    type="Featured Project"
                    github="https://github.com/IngNex/rickandmorty_app"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project
                    title="ApiRest Pokemon UI Mobile"
                    img={project1}
                    link="https://github.com/IngNex/flutter-apipokemon-practice"
                    type="Practice Project"
                    github="https://github.com/IngNex/flutter-apipokemon-practice"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    title="ApiRest DragonBall UI Mobile"
                    img={project2}
                    link="https://github.com/IngNex/flutter_dragonball_ui"
                    type="Practice Project"
                    github="https://github.com/IngNex/flutter_dragonball_ui"
                    />
                </div>
            </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
