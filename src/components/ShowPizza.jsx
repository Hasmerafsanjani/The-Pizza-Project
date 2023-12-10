import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Quickdetails from './Quickdetails';
import {  useNavigate } from 'react-router-dom';

function ShowPizza() {
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const navigate = useNavigate();
  

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
        console.log('Fetched Product Data:', response.data);
        setAllData(response.data.productos);
      } catch (error) {
        setError(error.message);
      // } finally {
      //   setLoading(false);
      }
    };
    fetchData();
  }, []);

const addToCart = ()=>{
  navigate('/order')

}
  //  const quickView = (dataId)=>{const
  //    selectedProduct = products.find((product) => product.id === dataId);
  //             setSelectedProductId(dataId);
  //             setShowModal(true);
  //             setProductDetails(selectedProduct);
  //           }
  const quickView = (dataId) => {
    const selectedProduct = allData.find((product) => product.id === dataId);
    setSelectedProductId(dataId);
    setShowModal(true);
    setProductDetails(selectedProduct);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const displayedData = allData.slice(0, 12);

  return (
    <div className='flex justify-center'>
      <div className='flex justify-center mt-7 gap-5 flex-wrap'>
        {displayedData.map((data) => (
          <div
            key={data.id}
            className='flex h-[350px] rounded-md pt-2 w-[22%] bg-green-200 items-center flex-col relative'
            onMouseEnter={() => setHoveredCardId(data.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <img
              src={data.linkImagen}
              alt={data.nombre}
              className='rounded-full h-[60%] p-3 w-[90%] object-fill'
            />
            <p className='font-bold text-center'>{data.nombre.toUpperCase()}</p>
            <p className='text-center'>{data.descripcion}</p>
            <p>Price: {data.precio}</p>
            {hoveredCardId === data.id &&  <div className=''>
        <button className='bg-green-600 p-2 rounded' onClick={addToCart}> Add to Cart</button>
    <button className='bg-yellow-600 p-2 rounded' onClick={()=>quickView(data.id)}> Quick View</button>
         </div>}
          </div>
        ))}
      </div>
      <Quickdetails show={showModal} handleClose={handleCloseModal} productDetails={productDetails} />
    </div>
  );
}

export default ShowPizza;





