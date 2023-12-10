import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Hovercomp from './Hovercomp'
import { v4 as uuid } from "uuid";

function ShowPizza() {
    const [allData, setaAlldata] = useState([])
    const [error, seterror] = useState(null)
    const [isHovered, setIsHovered] = useState(false);

   useEffect(()=>{

     const fetchData = async () => {
       const options = {
         method: 'GET',
         url: 'https://pizzaallapala.p.rapidapi.com/productos',
         headers: {
           'X-RapidAPI-Key': '3441f2735emsh1334ac1d9514be0p1201bdjsnda4285cd56d3',
           'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
         }
       };
 
       try {
         const response = await axios.request(options);
         console.log('Fetched Product Data:', response.data);
         setaAlldata(response.data.productos); 
         
       } catch (error) {
         seterror(error.message);
       }
        finally {
         setLoading(false);
       }
     };
     fetchData();
     
   },[])
   const displayedData = allData.slice(0, 12);

  return (
    <div className='flex justify-center '>
    <div className='flex justify-center  mt-7 gap-5 flex-wrap'>
      {displayedData.map((data) => (
        <div key={data.id} className='flex h-[30%] rounded-md pt-2 w-[22%] bg-green-200  items-center flex-col'> { isHovered && <Hovercomp/>}
          <img src={data.linkImagen} alt={data.nombre} className='rounded-full h-[60%] w-[60] object-contain'/>
          <p className='font-bold'>{(data.nombre).toUpperCase()}</p>
          <p className='text-center'>{data.descripcion}</p>
          <p>Price: {data.precio}</p>
    
        </div>
      ))}
    </div>
  </div>
  )
}

export default ShowPizza