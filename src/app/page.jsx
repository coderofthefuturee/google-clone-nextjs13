import React from 'react'
import HomeHeader from './components/HomeHeader'
import Image from "next/image";
import HomeSearch from './components/HomeSearch';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <HomeHeader />
      {/* google logo  */}
      <div className='flex flex-col items-center mt-24'>
        <Image
          width="300"
          height="100"
          src="/googleLogo.png"
          alt="Google Logo"
        />
        {/* search */}
        <HomeSearch />
      </div>
    </>
  )
}
