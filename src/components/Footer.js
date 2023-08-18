import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
            <div className='flex items-center'>
                I love Code <span className='text-red-600 text-2xl px-2'>&#9825;</span>
                <Link href="https://www.youtube.com/@maicoldeveloper" 
                className='underline underline-offset-2' target={'_blank'}>MaicolDev</Link>
            </div>
            <Link href="https://www.youtube.com/@maicoldeveloper" className='underline underline-offset-2' target={'_blank'}>
                Say Hello
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer
