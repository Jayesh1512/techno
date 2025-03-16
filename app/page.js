import React from 'react'
import Hero from './components/Hero/Hero';
import Productivity from './components/Productivity/Productivity';
import Success from './components/Success/Success';
import AboutUs from './components/about-us/AboutUs';


const Page = () => {
    return (
        <main className='bg-black min-h-screen  overflow-x-hidden text-white'>
            <Hero />
            <Productivity />
            <Success />
            <AboutUs />
        </main>
    )
}

export default Page;
