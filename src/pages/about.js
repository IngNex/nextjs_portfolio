import AnimationText from '@/components/AnimationText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profile from '../../public/images/profile/profile.jpg'
import { useSpring, useInView, useMotionValue } from 'framer-motion'
import Skills from '@/components/about/Skills'
import Experience from '@/components/about/Experience'
import Education from '@/components/about/Education'


const AnimationNumbers =  ({value})=>{
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration: 3000});
  const isInView = useInView(ref, {once:true});

  useEffect(()=>{
    if (isInView) {
      motionValue.set(value);

    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest)=>{
      //console.log(latest)
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])
  

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>MaicolDev | About Page</title>
        <meta name='description' content='any description'/>
      </Head>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            {/* ============  Text in about  ============ */}
            <AnimationText 
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' 
            text="Passion Fuels Purpose!"/>

            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                {/* ============  BIOGRAPHY ============ */}
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                    <p className='font-medium'>
                    Hi, I&rsquo;m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                    and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                    new and innovative ways to bring my client&rsquo;s visions to life.
                    </p>
                    <p className='my-4 font-medium'>
                        I believe that design is about more than just making things look pretty. it&rsquo;s about solving problems and 
                        creating intuitive, enjoyable experiences for users. 
                    </p>
                    <p className='font-medium'>
                        Whether I&rsquo;m working on a website, mobile app, or 
                        other digital product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                    </p>
                
                </div>
                {/* ============  Img about  ============ */}
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                  <Image src={profile} alt="Michael Rodriguez" className='w-full h-auto rounded-2xl'
                  priority
                  sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw 33vw'
                  />
                </div>
                {/* ============  Text Numbers  ============ */}
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
                md:order-3'>
                  <div className='flex flex-col items-end justify-center xl:items-center '>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                      <AnimationNumbers value={50}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimationNumbers value={40}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                  </div>
                  <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimationNumbers value={2}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                    xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                  </div>
                </div>
            </div>
            {/* ============  Components ============ */}
            <Skills/>
            <Experience/>
            <Education/>
        </Layout>
      </main>
    </>
  )
}

export default about
