import { GrClose } from "react-icons/gr"
import { useDispatch } from "react-redux"
import { modalFunc } from "../redux/modalSlice";

const Modal = ({ title, content, btnText, btnFunc }) => {
 const dispatch = useDispatch();

 return (
  <div className='flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 w-full h-screen'>
   <input type="text" placeholder="test" />
   <input type="text" placeholder="test" />
   <input type="text" placeholder="test" />

 </div>
 )
}

export default Modal