import Head from 'next/head'
import React from 'react'
import Navbar from '../ui/navbar/Navbar';

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>IA imgs</title>
                <meta name="description" content="app for generate images with IA" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Navbar />
            <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
                {children}
            </main>

        </>
    )
}

export default MainLayout