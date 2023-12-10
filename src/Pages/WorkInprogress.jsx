import React from 'react'
import { useNavigate } from 'react-router-dom'

function WorkInprogress() {
    const navigate  = useNavigate()

    const backtoHome=()=>{
        navigate("/")
    }

  return (
    <div className='flex flex-col items-center gap-10 mt-32 '> 
        <p className='text-4xl font-bold'>Website is in Construction Mode. Will be updated soon....</p>

        <img src="https://horticulture.tg.nic.in/img/work-in-progress-wip.jpg" alt=""
        className='h-64 w-64'
        />
        <button className='bg-yellow-500 p-2 rounded-md font-bold text-violet-600' onClick={backtoHome}>Back To Home</button>
    </div>
  )
}

export default WorkInprogress