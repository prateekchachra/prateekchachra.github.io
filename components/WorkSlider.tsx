import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const workSlides = {
  slides: [
    {link: 'https://freemyroom.vercel.app/',
      images: [
        {
          title: "Free My Room",
          path: "/freemyroom4.png",
        },
        {
          title: "Free My Room",
          path: "/freemyroom2.png",
        },
        {
          title: "Free My Room",
          path: "/freemyroom3.png",
        },
        {
          title: "Free My Room",
          path: "/freemyroom1.png",
        },
      ],
    },
    { link: 'https://sumanchachra.vercel.app/',
      images: [
        {
          title: "Graphic Designer Portfolio",
          path: "/suman4.png",
        },
        {
          title: "Graphic Designer Portfolio",
          path: "/suman1.png",
        },
        {
          title: "Graphic Designer Portfolio",
          path: "/suman2.png",
        },
        {
          title: "Graphic Designer Portfolio",
          path: "/suman3.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => (
  <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[340px]"
  >
    {workSlides.slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer max-h-[100%]">
          {slide.images.map((image, ind) => (
            <Link href={slide.link} target="_blank"
              key={ind}
              className="relative rounded-lg overflow-hidden flex items-center justify-center group "
            >
              <div className="flex items-center justify-center relative overflow-hidden group">
                <Image
                  src={image.path}
                  width={500}
                  height={300}
                  alt={image.title}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-[#E838CC] 
               to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                ></div>
                <div
                  className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
               transition-all duration-300"
                >
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                    <div className="delay-100">GO TO</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default WorkSlider;
