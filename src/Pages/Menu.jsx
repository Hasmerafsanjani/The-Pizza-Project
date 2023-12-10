import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
useNavigate

function Menu() {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://pizzaallapala.p.rapidapi.com/productos',
        headers: {
          'X-RapidAPI-Key': '3441f2735emsh1334ac1d9514be0p1201bdjsnda4285cd56d3',
          'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        // console.log('Fetched Product Data:', response.data);
        setAllData(response.data.productos);
      } catch (error) {
        setError(error.message);
      // } finally {
      //   setLoading(false);
      }
    };
    fetchData();
  }, []);

  const goToHome = ()=>{
    navigation('/')
  }
  const workinProgress = ()=>{
    navigation("/progress")
  }
  const myData = allData.slice(0, 12);
  // console.log(myData);

  return (
        <div> 
    <div className='h-9 flex justify-between bg-slate-300'>
       <img 
        src="https://e7.pngegg.com/pngimages/613/484/png-clipart-pizza-logo-illustration-pizza-logo-logo-free-logo-design-template-food.png" alt=""
        className='h-full ml-4 bg-transparent rounded-full '
        />
       <div className=' flex justify-center'>
        <div className='flex items-center gap-4 pl-6'>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" onClick={goToHome}>HOME</p>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" >MENU</p>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" onClick={workinProgress}   >PAGES</p>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" onClick={workinProgress}  >EVENTS</p>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" onClick={workinProgress}  >BLOG</p>
          <p className="text-cyan-600 cursor-pointer hover:text-red-700 text-xs font-bold" onClick={workinProgress}  >LANGING</p>
        </div>
       </div>
       <div className='flex items-center cursor-pointer pr-5 gap-2'>
        <p className='cursor-pointer'> 🛒</p>
       <input type="text" />
       <p>  🔍</p>
       </div> 
      </div>
      <div className='bg-red-600 h-96 pt-36 '>
             <p className='italic text-center text-xl tracking-wider text-yellow-100'>Chose Your Favarite One</p>
             <p className='text-center text-5xl font-bold text-yellow-100 opacity-90'>MENU LIGHT</p>
      </div>
      <div>
        {myData.map((data)=>{
            <div
            key={data.id}
              >
                <img
              src={data.linkImagen}
              alt={data.nombre}
              className='rounded-full h-[60%] p-3 w-[90%] object-fill'
            />
              </div>
        })}
      </div>
       </div>
  )
}

export default Menu