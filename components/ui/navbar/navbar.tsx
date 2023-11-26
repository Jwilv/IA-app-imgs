import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
    return (
        <header
            className=' w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'
        >
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt='logo page'
                    className='w-28 object-contain'
                />
            </Link>
        </header>
    )
}

export default navbar