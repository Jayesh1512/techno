// pages/index.js
'use client';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Design Magic | Website Builder</title>
        <meta name="description" content="Build stunning websites effortlessly with our design tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <p className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#CBFB45" />
                <path d="M7 12H17M7 7H17M7 17H12" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="ml-2 font-bold">Design</span>
            </p>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/features"><p className="hover:text-gray-300">Features</p></Link>
          <Link href="/pricing"><p className="hover:text-gray-300">Pricing</p></Link>
          <Link href="/help"><p className="hover:text-gray-300">Help</p></Link>
          <Link href="/blog"><p className="hover:text-gray-300">Blog</p></Link>
        </nav>

        <div>
          <Link href="/login">
            <p className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors">Log in</p>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unleashing the<br />Magic of <span className="text-[#CBFB45]">Design</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Create stunning websites with our intuitive design platform
            </p>
            <button 
              className="bg-[#CBFB45] text-black font-medium px-6 py-3 rounded-full flex items-center mx-auto hover:bg-opacity-90 transition-all"
              onClick={() => setShowDemo(true)}
            >
              <span>Get Started Free</span>
              <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Editor Preview */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="bg-[#1E1E1E] rounded-lg p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-[#2D2D2D] rounded px-4 py-1 text-xs">
                  editor.design.file
                </div>
                <div>
                  <button className="bg-[#CBFB45] text-black text-xs px-3 py-1 rounded">
                    Save
                  </button>
                </div>
              </div>
              <div className="bg-white text-black rounded overflow-hidden">
                <div className="p-8 relative">
                  <h2 className="text-4xl font-black tracking-tight uppercase">FINN SOLVEIG</h2>
                  <p className="text-gray-600">Creative Director • Product Designer • Strategist</p>
                  
                  <div className="absolute right-4 top-4">
                    <div className="w-8 h-8 rounded-full bg-[#CBFB45] flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 3.33333L10.6667 8L6 12.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 border-t border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center flex-wrap">
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand1.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand2.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand3.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand4.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand5.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
              <div className="w-1/3 md:w-1/6 px-4 mb-6 md:mb-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/brand6.svg" alt="Brand logo" width={100} height={40} layout="responsive" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <Image 
                src="/designers-working.jpg" 
                alt="Designers working together" 
                width={600} 
                height={400} 
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Build Stunning Websites Effortlessly</h2>
              <p className="text-gray-400 mb-8">
                Our intuitive drag-and-drop editor makes it easy to create professional websites without any coding knowledge. Design beautiful pages, customize them to match your brand, and publish with a single click.
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                </div>
                <p className="text-sm text-gray-400">Join 10,000+ designers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Tools, Limitless Possibilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform provides everything you need to create, manage, and grow your web presence. Get started in minutes with our intuitive tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V18M6 12H18" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Drag-Drop Editing</h3>
              <p className="text-gray-400">
                Build stunning layouts visually with our intuitive drag and drop interface.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M10 12H20M20 12L17 9M20 12L17 15" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">API Exports</h3>
              <p className="text-gray-400">
                Connect your designs with external services and applications seamlessly.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5C3.89543 11 3 11.8954 3 13V19C3 20.1046 3.89543 21 5 21H7C8.10457 21 9 20.1046 9 19ZM9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M9 19C9 20.1046 9.89543 21 11 21H13C14.1046 21 15 20.1046 15 19M15 19V5C15 3.89543 15.8954 3 17 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H17C15.8954 21 15 20.1046 15 19Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO & Analytics</h3>
              <p className="text-gray-400">
                Track performance and optimize your site for search engines in real-time.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400">
                Work together with your team in real-time with built-in collaboration features.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Hosting & Content Delivery</h3>
              <p className="text-gray-400">
                Deploy your sites globally with our fast, secure content delivery network.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 bg-pink-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7H7V17H9V7Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7H15V13H17V7Z" stroke="#CBFB45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Management System</h3>
              <p className="text-gray-400">
                Manage and update your content with our easy-to-use CMS that integrates with your design.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 bg-gray-900 rounded-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Showcase Your Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Display your projects in beautiful, responsive portfolios that highlight your best work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="rounded-lg overflow-hidden mb-4">
                <Image src="/portfolio1.jpg" alt="Portfolio project" width={400} height={300} layout="responsive" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black font-medium">FINN SOLVEIG</span>
                <div className="w-6 h-6 rounded-full bg-[#CBFB45] flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Add more portfolio items as needed */}
          </div>
        </section>

        {/* CTA Section */}
        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Designing?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of designers and creators who are building amazing websites with our platform.
            </p>
            <button className="bg-[#CBFB45] text-black font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Get Started Free
            </button>
            <p className="text-gray-500 mt-4">No credit card required. Free plan available.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what designers and creators are saying about our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">UI Designer @ Dropbox</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "This platform has completely transformed my workflow. I can now create stunning websites for clients in half the time it used to take me."
              </p>
              <div className="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Alex Martinez</h4>
                  <p className="text-gray-400 text-sm">Freelance Designer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "The collaboration features are amazing. I can work with clients in real-time, making revisions on the fly. It's changed how I approach client projects."
              </p>
              <div className="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-600 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Thompson</h4>
                  <p className="text-gray-400 text-sm">Creative Director @ Studio22</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "As a creative agency, we needed a platform that could handle complex designs without compromising on performance. This tool delivers on all fronts."
              </p>
              <div className="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#CBFB45" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1L12.39 6.88L18.5 7.64L13.92 12.09L15.18 18.16L10 15.27L4.82 18.16L6.08 12.09L1.5 7.64L7.61 6.88L10 1Z"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16 md:py-24" id="pricing">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-gray-400 mb-4">Perfect for individuals and small projects</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>1 project</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Community support</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 border border-[#CBFB45] text-[#CBFB45] font-medium rounded-lg hover:bg-[#CBFB45] hover:bg-opacity-10 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-[#CBFB45] relative transform md:scale-105 md:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CBFB45] text-black px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <p className="text-gray-400 mb-4">For professionals and growing businesses</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>10 projects</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Premium templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Custom domains</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 bg-[#CBFB45] text-black font-medium rounded-lg hover:bg-opacity-90 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-400 mb-4">For teams and organizations</p>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>All templates</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>White labeling</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 border border-[#CBFB45] text-[#CBFB45] font-medium rounded-lg hover:bg-[#CBFB45] hover:bg-opacity-10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Got questions? We've got answers. If you don't see what you're looking for, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Do I need coding knowledge?</h3>
              <p className="text-gray-400">
                No, our platform is designed for designers of all skill levels. The drag-and-drop interface allows you to create professional websites without writing a single line of code.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I use my own domain?</h3>
              <p className="text-gray-400">
                Yes, all paid plans allow you to connect your custom domain to your websites. We provide simple instructions to guide you through the process.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Is my data secure?</h3>
              <p className="text-gray-400">
                Absolutely. We employ industry-standard security measures to protect your data. All connections are encrypted, and we regularly perform security audits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-400">
                Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer support?</h3>
              <p className="text-gray-400">
                Yes, we offer different levels of support depending on your plan. All users have access to our documentation and community forums.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Can I export my website?</h3>
              <p className="text-gray-400">
                Enterprise plans include the ability to export your websites as standard HTML/CSS files that can be hosted anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-[#CBFB45] rounded-xl p-8 md:p-12 text-center text-black">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Design Workflow?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-800">
              Join thousands of designers creating stunning websites with our intuitive platform.
            </p>
            <button className="bg-black text-white font-medium px-8 py-3 rounded-full hover:bg-gray-900 transition-all">
              Get Started Free
            </button>
            <p className="mt-4 text-gray-700">No credit card required. Free plan available.</p>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">PRIXKLUB</span>
            </Link>
          </div>
          
          {/* Pages Column */}
          <div>
            <h3 className="font-medium text-gray-300 mb-4">Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-white transition">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/blog/post" className="text-gray-400 hover:text-white transition">Blog (Single Post)</Link></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h3 className="font-medium text-gray-300 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-gray-400 hover:text-white transition">Support</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-white transition">Changelog</Link></li>
              <li><Link href="/documentation" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
            </ul>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded transition">
              More from docs
            </button>
          </div>
          
          {/* Utility Pages Column */}
          <div>
            <h3 className="font-medium text-gray-300 mb-4">Utility Pages</h3>
            <ul className="space-y-2">
              <li><Link href="/404" className="text-gray-400 hover:text-white transition">404 Error Page</Link></li>
              <li><Link href="/password" className="text-gray-400 hover:text-white transition">Password</Link></li>
              <li><Link href="/changelog" className="text-gray-400 hover:text-white transition">Changelog</Link></li>
              <li><Link href="/licensing" className="text-gray-400 hover:text-white transition">Licensing</Link></li>
            </ul>
            
            {/* Follow Us Section */}
            <h3 className="font-medium text-gray-300 mb-4 mt-8">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition">
                Twitter
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition">
                Facebook
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition">
                Instagram
              </Link>
              <Link href="https://dribbble.com" className="text-gray-400 hover:text-white transition">
                Dribbble
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © Made by Power Elite
        </div>
      </div>
    </footer>
    </div>
  )
}