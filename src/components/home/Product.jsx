import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='w-[440px] p-3 mb-5 mx-5 border rounded-md relative'>
      <div className='text-3xl p-2 m-1 font-bold absolute rounded-md top-0 right-0 bg-black text-white'>
        {product?.price}
        <span className='text-sm'>TL</span>
      </div>
      <img className='w-[200px] h-[200px]' src={product?.image} alt="" />
      <div className='text-center mx-3 mt-3 text-xl font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product
