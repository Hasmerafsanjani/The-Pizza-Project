import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import PageNotFound from './Pages/PageNotFound'
import Order from './Pages/Order'
import OrderSuccess from './Pages/OrderSuccess'
import WorkInprogress from './Pages/WorkInprogress'
import axios from 'axios'



  
  function App() {
    
     const [allData, setaAlldata] = useState(null)
     const [error, seterror] = useState(null)

    // useEffect(()=>{

    //   const fetchData = async () => {
    //     const options = {
    //       method: 'GET',
    //       url: 'https://pizzaallapala.p.rapidapi.com/productos',
    //       headers: {
    //         'X-RapidAPI-Key': '3441f2735emsh1334ac1d9514be0p1201bdjsnda4285cd56d3',
    //         'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
    //       }
    //     };
  
    //     try {
    //       const response = await axios.request(options);
    //       console.log('Fetched Product Data:', response.data);
    //       setaAlldata(response.data); 
          
    //     } catch (error) {
    //       seterror(error.message);
    //     }
    //     //  finally {
    //     //   setLoading(false);
    //     // }
    //   };

  
    //   fetchData();
    // },[])


  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home data={allData}/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/succefull' element={<OrderSuccess/>}/>
      <Route path='/progress' element={<WorkInprogress/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
