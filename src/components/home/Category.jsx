import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  // console.log(categories, "categories")

  return (
    <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
      <div className='border-b pb-1 text-xl font-bold'>CATEGORY</div>
      {
        categories?.map((category, i) => (
          <div className='text-xl cursor-pointer hover:bg-gray-200 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category
