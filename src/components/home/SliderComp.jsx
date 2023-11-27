import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
   // dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='!flex items-center bg-gray-100 px-6'>
        <div className=''>
          <div className='text-6xl font-bold'>En kaliteli Ayakkabılar burada</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident laborum dolor ipsa officiis quae inventore qui, nisi vitae doloribus labore natus amet, veritatis iure a repellendus tempore dolore. Laboriosam.</div>
          <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16
           flex items-center justify-center bg-gray-200'>İncele</div>
        </div>
        <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png' alt=''
          className='w-[500px] h-[500px]'
        />

      </div>
      <div className='!flex items-center bg-gray-100 px-6'>
        <div className=''>
          <div className='text-6xl font-bold'>En kaliteli Ayakkabılar burada</div>
          <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident laborum dolor ipsa officiis quae inventore qui, nisi vitae doloribus labore natus amet, veritatis iure a repellendus tempore dolore. Laboriosam.</div>
          <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16
           flex items-center justify-center bg-gray-200'>İncele</div>
        </div>
        <img src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e26f0e3b-b064-455d-9663-bcaeefad1df3/air-force-1-gen%C3%A7-ayakkab%C4%B1s%C4%B1-zvkc5q.png' alt=''
          className='w-[500px] h-[500px]'
        />
      </div>
    </Slider>
  )
}

export default SliderComp


