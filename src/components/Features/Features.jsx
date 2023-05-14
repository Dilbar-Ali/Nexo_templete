import React from 'react'
import img1 from '../../assets/wsj-grey.svg'
import img2 from '../../assets/the-washington-post-grey.svg'
import img3 from '../../assets/reuters-grey.svg'
import img4 from '../../assets/bloomberg-grey.svg'
import img5 from '../../assets/fortune-grey.svg'
import img6 from '../../assets/cnbc-grey.svg'
import img7 from '../../assets/coindesk-grey.svg'
import img8 from '../../assets/the-block-gery.svg'
import img9 from '../../assets/cointelegraph-grey.svg'
import img10 from '../../assets/decrypt-grey.svg'
const Features = () => {
  return (
    <div>

<h1 className='text-center text-3xl font-medium'>As Featured in</h1>

<div>
    <div className='flex gap-9 mt-11  flex-wrap justify-center items-center'>
        <img src={img1} alt=""   className='w-10 transition duration-2 ease-1 transform hover:scale-110 align-middle'/>
        <img src={img2} alt="" className='transition duration-2 ease-1 transform hover:scale-110 align-middle' />
        <img src={img3} alt="" className='transition duration-2 ease-1 transform hover:scale-110 align-middle'/>
        <img src={img4} alt="" className='w-40 transition duration-2 ease-1 transform hover:scale-110 align-middle' />
        <img src={img5} alt="" className='transition duration-2 ease-1 transform hover:scale-110 align-middle' />
        <img src={img6} alt="" className='transition duration-2 ease-1 transform hover:scale-110 align-middle' />
        <img src={img7} alt="" className='w-40 transition duration-2 ease-1 transform hover:scale-110 align-middle'/>
        <img src={img8} alt=""  className='transition duration-2 ease-1 transform hover:scale-110 align-middle'/>
        <img src={img9} alt=""  className='w-40 transition duration-2 ease-1 transform hover:scale-110 align-middle' />
        <img src={img10} alt="" className='transition duration-2 ease-1 transform hover:scale-110 align-middle' />
    </div>
</div>

    </div>
  )
}

export default Features