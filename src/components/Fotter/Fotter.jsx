import React from 'react'
import img1 from '../../assets/apple-touch-icon.png';
import { BsTwitter ,BsFillStopwatchFill,BsFillSendFill,BsFacebook,BsFillStarFill } from "react-icons/bs";
const Fotter = () => {
  return (
<div>
<div className='flex justify-around items-center mt-28'>
  <div>
    <div><img src={img1} className='w-16' alt="" /></div>
    <div><h1 className='text-4xl font-medium text-blue-700'>nexo</h1></div>
  </div>
  <div>
    <div><h1 className='text-2xl font-medium'>Sign up for updates</h1>
    <input type="text" placeholder='Enter your email' className='border-1 p-3 border-black' />
    
    </div>

  </div>

  <div>
    <div><h1 className='text-2xl font-medium'>Follow us</h1></div>
    <div className='flex gap-4 mt-3'>
      <div className='shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800'> <BsTwitter/> </div>
      <div  className='shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800'><BsFillStopwatchFill/></div>
      <div  className='shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800'><BsFillSendFill/></div>
      <div  className='shadow-inner bg-gray-300 p-2 text-2xl rounded-lg text-gray-800'><BsFacebook/></div>
    </div>
  </div>

<div>
  <div>
    <div>
      <div className=' bg-gray-300 p-2 text-2xl rounded-lg w-12 text-center text-green-500'><BsFillStarFill/></div>
      <div>
        <h1 className='text-2xl font-medium'>Trustpilot</h1>
      </div>
     
    </div>
    <div className='flex gap-2'>
    <div className=' bg-green-500 p-1 text-xl rounded-lg text-white'><BsFillStarFill/></div>
    <div className=' bg-green-500 p-1 text-xl rounded-lg text-white'><BsFillStarFill/></div>
    <div className=' bg-green-500 p-1 text-xl rounded-lg text-white'><BsFillStarFill/></div>
    <div className=' bg-green-500 p-1 text-xl rounded-lg text-white'><BsFillStarFill/></div>
    <div className=' bg-green-500 p-1 text-xl rounded-lg text-white'><BsFillStarFill/></div>

    </div>
  </div>
</div>
  
</div>

</div> 
 )
}

export default Fotter;