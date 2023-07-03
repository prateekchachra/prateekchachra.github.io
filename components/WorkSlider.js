

import {RxMobile, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper';
import Image from 'next/image';

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className='h-[320px] sm:h-[380px]'
  >
    {workSlides.slides.map((slide,index) => (
      <SwiperSlide key={index}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image,ind) => 
          (
            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
              <div className='flex items-center justify-center relative overflow-hidden'>
               <Image src={image.path} width={500} height={300} alt={image.title}/>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>;
};

export default WorkSlider;