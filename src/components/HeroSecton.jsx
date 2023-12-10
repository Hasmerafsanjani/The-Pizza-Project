import React from 'react'
import { FaCheck, FaMapMarkerAlt } from 'react-icons/fa';
import ShowPizza from './ShowPizza';

function HeroSecton() {
  return (

    <div className="body-container bg-gray-700 w-[80%] ml-[20%] h-[100%] flex flex-col  items-center"
    style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/selective-focus-close-up-piece-double-cheese-homemade-seafood-pizza-spatula-scoop-with-blur-background-wooden-table-cold-beverage-brick-wall-food-concept_102814-3650.jpg?w=2000)`}}
    >
    <section className=" text-white flex h-full justify-between">
    
      <div className='flex h-screen m-5 pt-10'>
      <div className='flex flex-col justify-center'>
        <div className='space-y-2 m-4'>
        <h2 className="text-4xl font-bold mb-10 text-center italic ">WE DELIVERED WITHIN <span className='text-green-500'>30</span> MIN</h2>
          <p className='flex space-x-3 text-center items-center text-xl'><span className='text-white text-2xl '>✅</span> Choose your ingredients</p>
          <p className='flex space-x-3 text-center items-center text-xl'><span className='text-white text-2xl'>✅</span> Get free delivery 24/7</p>
          <p className='flex space-x-3 text-center items-center text-xl'><span className='text-white text-2xl'>✅</span> Special gift coupons</p>
        </div>
        <div className='m-4 space-x-2'>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-64 px-4 py-2 rounded-l-md focus:outline-none text-black focus:ring focus:border-red-400"
          />
          <button className="bg-green-500 text-white font-bold px-8 py-2 rounded-r-md hover:bg-red-600 transition duration-300">
            Subscribe
          </button>
        </div>
        <div className='flex mx-4 space-x-3'>
          <FaMapMarkerAlt className="text-red-500 text-2xl" />
          <h2 className=" mb-4">Check Your Delivery Zone</h2>
        </div>
        </div>
      <div className='flex items-center'>
        <img
          src="https://image.similarpng.com/very-thumbnail/2022/03/Pepperoni-Pizza-on-transparent-background-PNG.png"
          alt="Delicious Pizza"
          className="w-80 h-auto rounded-full object-fill bg-transparent mr-4"
        />
      </div>
      </div>
    </section>
    <section className='bg-black rounded-t-full w-[80px] h-9 text-center pb-6 items-center text-white font-bold pt-2 '>Scroll</section>
    <ShowPizza/>
  </div>
  )
}

export default HeroSecton