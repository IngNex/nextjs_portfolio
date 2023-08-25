import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between
        lg:flex-col lg:py-6'>
            <span>&copy; All Right Reserved {new Date().getFullYear()}</span>
            <div className='flex items-center lg:py-2'>
                I love Code 
                <span 
                className='text-primary text-2xl px-2 dark:text-primaryDark'>
                  &#9825;</span>
                <Link href="https://www.youtube.com/@maicoldeveloper" 
                className='underline underline-offset-2' target={'_blank'}>MaicolDev</Link>
            </div>
            <Link href="https://www.tiktok.com/@maicoldev" className='underline underline-offset-2' target={'_blank'}>
              Developer TikTok
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer
