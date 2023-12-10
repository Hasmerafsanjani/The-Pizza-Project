import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSuccess() {
  const navigation = useNavigate()
  const handenHome = ()=>{
    navigation("/")
  }
  return (
    <div className='flex flex-col m-6 justify-center items-center'>
      <div className='text-5xl text-center mt-28 font-bold '>✅<br /> Your Order is Succefully Completed </div>
      <img src="https://media.tenor.com/zAQQRuL7QVsAAAAM/speeding-car-otw.gif" alt="" 
      className='h-52 w-auto rounded-lg m-3 '/>
      <button onClick={handenHome} className='m-7 bg-blue-600 items-center p-2 px-5 rounded-md text-3xl font-bold text-white '>Go to Home</button>
    </div>
  )
}

export default OrderSuccess