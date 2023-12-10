import React from 'react'

function Order() {

  const orderCompleted=()=>{

  }
  return (
    <div
    className="bg-cover bg-center h-screen blur-5 "
    style={{ backgroundImage: `url(https://i.pinimg.com/1200x/52/ff/40/52ff401df7f40fac0478f3dba0dace93.jpg)` }}
    >
      <div className='absolute'>
      <div className='h-[470px] w-[380px] bg-slate-200 bg-opacity-70 rounded overflow-hidden ml-16 mt-10'> 
        <h1 className='text-2xl font-bold text-center p-3 bg-cyan-800 text-white'> Welcom to Pizza Hut</h1>
        <div className='flex flex-col ml-5 '>
       Name: <input type="text"
       placeholder='Name'
          className='w-[80%] pl-2 rounded-md'
       />
        </div>
        <div className='flex flex-col ml-5 '>
       Phone No: <input type="number"
       placeholder='Phone No'
          className='w-[80%] pl-2 rounded-md'
       />
        </div>
        <div className='flex flex-col ml-5 '>
       No of Slice: <input type="number"
       placeholder='Slice no'
          className='w-[80%] pl-2 rounded-md'
       />
        </div>
        <div className='flex flex-col ml-5 '>
       Pizza Size : <div className='flex gap-2'>
        <input type="radio"  name="x"  />
        <label for="y">8-inch</label>
        <input type="radio"  name="x"  />
        <label for="z">10-inch</label>
        <input type="radio"  name="x"  />
        <label for="z">12-inch</label>
        <input type="radio"  name="x"  />
        <label for="z">14-inch</label>
      </div>
        </div>
        <div className='flex flex-col ml-5 '>
       Toppings : <div className='flex gap-1'>
        <input type="checkbox"  name="x"  />
        <label for="y">Pepperoni </label>
        <input type="checkbox"  name="x"  />
        <label for="z">Onions </label>
        <input type="checkbox"  name="x"  />
        <label for="z">Mushrooms </label>
        <input type="checkbox"  name="x"  />
        <label for="z">Sausage </label>
      </div>
      <div>
        <br />
        I agree all Term and condition <br />
        <input type="checkbox" />
      </div>
        </div>
      <button className='bg-green-500 p-2 ml-4 rounded-2xl font-bold text-xl w-[350px] flex justify-center ' onClick={orderCompleted} > Complete Order </button>
      </div>
      </div>
      <img src="https://clipart-library.com/images_k/pizza-slice-transparent-background/pizza-slice-transparent-background-19.jpg" alt=""
      className='bg-transparent'
      />
       </div>
  )
}

export default Order