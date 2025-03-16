'use client'
import React from 'react';
import Tag from '../Button/Tag';
import Image from 'next/image';
import TopCard from './TopCard';
import graph from '../../assets/images/success/graph2.svg';
import img1 from '../../assets/icons/solution/img1.svg'
import img2 from '../../assets/icons/solution/img2.png'
import img3 from '../../assets/icons/solution/img3.png'
import img4 from '../../assets/icons/companies/logo-4.svg'

const successItems = [
  {
    id: 1,
    text: "AI Task Bots (Code Generator, Content Optimizer)",
    logo: img1,
  },
  {
    id: 2,
    text: "App/Widget Development",
    logo: img2,
  },
  {
    id: 3,
    text: "Blockchain Integration",
    logo: img3,
  },
  {
    id: 4,
    text: "Digital Foundation Services (SEO/Content/ Websites)",
    logo: img4,
  },
];


const companyLogos = [
  "../../icons/companies/logo-1.svg",
  "/icons/companies/logo-2.svg",
  "/icons/companies/logo-3.svg",
  "/icons/companies/logo-4.svg",
  "/icons/companies/logo-5.svg",
];

const Success = () => {
  return (
    <div className="section text-white py-10 flex flex-col gap-12">
      <div className="header-section flex flex-col gap-2">
        <Tag text="Solutions" />
        <div className="heading flex justify-center items-center gap-3">
          <h2 className="text-5xl text-center font-bold">Solution Showcase</h2>
        </div>
      </div>

      <div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center w-3/4 mx-auto"
      >
        {successItems.map((item) => (
          <InteractiveCard key={item.id} logo={item.logo} text={item.text} />
        ))}
      </div>

      <TopCard />

      <div className="flex flex-col max-lg:items-center lg:flex-row w-[90%] lg:w-3/4 mx-auto gap-[75px] justify-between my-10">
        <div
        >
          <Image
            src={graph}
            width={407}
            height={445}
            alt="graphical analytics"
            className="-mt-10"
          />
        </div>
        <div className="relative w-full md:w-3/4 mx-auto gray-gradient py-[25px] sm:py-10 lg:py-[75px] px-6 lg:px-12 flex flex-col items-center justify-center rounded-xl gap-10 mt-5 lg:mt-10">
          <h2 className="text-center text-4xl font-bold">We integrate what you love</h2>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-center"
          >
            {companyLogos.map((logo, index) => (
              <LogoHolder key={index} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InteractiveCard = ({ logo, text }) => {
  return (
    <div

      className="flex flex-col items-center gap-3 bg p-6  shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:from-gray-800 hover:to-gray-700 hover:scale-105"
    >
      <div className="logo gray-gradient p-5 rounded-full">
        <Image src={logo.src} width={40} height={40} alt="logo" className="w-[40px] h-[40px]" />
      </div>
      <p className="text-center w-3/4 text-lg font-medium">{text}</p>
    </div>
  );
};

const LogoHolder = ({ logo }) => {
  return (
    <div
      className="rounded-xl gray-gradient flex items-center justify-center w-[60px] h-[60px] md:w-[90px] md:h-[90px]"
    >
      <Image src={logo} width={60} height={60} alt="logo" className="w-[50px] h-[50px] md:w-[90px] lg:h-[90px]" />
    </div>
  );
};

export default Success;
