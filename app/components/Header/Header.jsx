import React from 'react'
import { config } from '../../config'
import Link from 'next/link'
import Button from '../Button/Button'
const Header = () => {
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if(section) {
  //     section.scrollIntoView({behavior:'smooth'});
  //   }
  // }

  return (
    <nav className="relative py-10 w-full md:w-[75%] mx-auto flex items-center justify-center">
      {/* logo div */}
      <div className="logo left-5 md:left-0 absolute-v-middle flex items-center justify-center gap-2">
        {/* <Image src={logo} alt="logo" /> */}
        <span className="font-bold">The Technobytes</span>
      </div>

      <ul className="max-md:hidden flex items-center gap-8">
        {config.navLinks.map((link, index) => {
          return (
            <Link href={link.link.startsWith("#") ? link.link : link.link}
              key={link.id}
              className='group scroll-smooth'
            >
              {link.title}
              <div className='bg-white h-[2px] w-0 group-hover:w-full ease-in-out duration-300 '></div>
            </Link>
          );
        })}
      </ul>

      {/* join now button */}
      <div className="logo right-5 md:right-0 absolute-v-middle flex items-center justify-center gap-2 cursor-pointer duration-300  hover:scale-105">
        <Button
          text={"Join Now"}
          className={"px-5 py-2"}
        />
      </div>
    </nav>
  );
}

export default Header
