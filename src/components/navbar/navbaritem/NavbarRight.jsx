import {MdPostAdd} from "react-icons/md"
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { modalFunc } from '../../../redux/modalSlice'

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector(state => state.carts)

  useEffect(() => { 
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
      <input className='bg-gray-200 outline-none' type='text' placeholder='Arama Yapınız...' />
      <BiSearch size={28}/> 
      </div>
      <AiOutlineHeart size={28}/>
      <div onClick={() => navigate("cart")} className='relative'>
        <div className='flex items-center justify-center absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5'>
          {itemCount}
        </div>
        <SlBasket size={28}/>
       
      </div>
      <div onClick={() => dispatch(modalFunc())} className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <MdPostAdd size="24" className=""/>
        </div>
    </div>
    
  )
}

export default NavbarRight
