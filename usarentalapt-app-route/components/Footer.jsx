"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="bg-[#ddddddc9] py-10 px-6 md:px-12 xl:px-16 w-full grid sm:grid-cols-[2fr,1fr] justify-center items-center">

      
      <div className="grid grid-cols-1 sm:grid-cols-[6rem,1fr] gap-x-10 justify-items-center items-center">
        <Image className="mb-3 sm:mb-0" src="/images/equal-1-957x1024.png" alt="footer" width={90} height={100}/>
        <p className="text-[1.1rem] sm:text-lg text-center sm:text-left">We are embraces a comprehensive approach to Real Estate: Leasing, Sales, Property Management and Development all under one roof. We are 50 plus real estate professionals, 100s of years of combined experience and 1000’s of 5 star reviews all with one goal: To exceed your expectations!</p>
      </div>
      <div className="sm:justify-self-end  text-center sm:text-left">
        <h3 className="font-bold text-2xl mt-4 sm:mt-0">Quick Links</h3>
        <div className="pl-2 ">
          <Link className="block text-neel-500 py-2 text-lg capitalize" href="/">contact us</Link>
          <Link className="block text-neel-500 text-lg capitalize" href="/terms-condition">terms and condition</Link>
        </div>
      </div>
      </div>
      <div className="text-center text-xl py-5 text-sky-900">
        <h3 >Copyright ©<strong>2023</strong></h3>
      </div>
    </footer>
  )
}
