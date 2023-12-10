import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quickdetails = ({ show, handleClose, productDetails }) => {
  const navigate = useNavigate();

  const modalStyle = {
    display: show ? 'flex' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(146, 233, 255 , 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
    overflowY: 'auto',
  };

  const modalContentStyle = {
    display: 'flex',
    background: 'rgb(142, 98, 255)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(146, 233, 255, 0.5)',
    maxWidth: '600px',
    width: '100%',
    height:"300px",
    position: 'relative',
  };

  const closeButtonStyle = {
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  const imageContainerStyle = {
    flex: '1',
    marginRight: '20px',
  };

  const productImageStyle = {
    width: '80%',
    height: '80%',
    background: '#eee',
    borderRadius: '8px',
  };

  const detailsContainerStyle = {
    flex: '1',
    color:"white"
  };

  const productNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const productPriceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const productDescriptionStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const addToCartButtonStyle = {
    background: 'rgb(85, 213, 233)',
    color: 'black',
    fontWeight:"bold",
    padding: '15px',

    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  const handleAddToCart = () => {
   
    navigate('/Order');
  };

  return (
    <div style={modalStyle} onClick={handleClose}>
      <div 
       className='flex bg-slate-600 p-5 rounded w-[800px] h-[350px] relative'
      onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle}
         onClick={handleClose}>
       ❌
        </button>

        <div style={imageContainerStyle}>
          <img src={productDetails?.linkImagen} alt={productDetails?.nombre} style={productImageStyle} />
        </div>

        <div style={detailsContainerStyle}>
          <h2 style={productNameStyle}>{(productDetails?.nombre.toUpperCase())}</h2>
          <p style={productPriceStyle}>Price :  ₹ {productDetails?.precio}</p>
          <p style={productDescriptionStyle}>{productDetails?.descripcion}</p>
          <section className='pb-4 '>
            <div className='flex justify-start gap-52 font-bold'>
                <p>inced</p>
                <p> val</p>
            </div>
            <div className='flex justify-start gap-32 '>
                <p>inced ------</p>
                <p>------ val</p>
            </div>
            <div className='flex justify-start gap-32 '>
                <p>inced ------</p>
                <p>------ val</p>
            </div>
            <div className='flex justify-start gap-32 '>
                <p>inced ------</p>
                <p>------ val</p>
            </div>
          </section>
          <button style={addToCartButtonStyle} onClick={handleAddToCart}  >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quickdetails;