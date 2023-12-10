import axios from 'axios';
import React from 'react'
import Navbar from '../components/Navbar';
import HeroSecton from '../components/HeroSecton';


function Home({}) {
  
  return (
    <>
    <Navbar/>
    <div className='flex h-full justify-between'>
    <HeroSecton/>
    </div>
    <div></div>
    </>
  )
}

export default Home