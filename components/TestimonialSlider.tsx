import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Agustin Berisso",
    position: "Manager | Taxfix",
    message:
      "Prateek always brings in new, amazing ideas! He worked with me in Taxfix in the Clippys team and was one of the most energetic members of the team!",
  },
  {
    image: "/t-avt-2.png",
    name: "Abhilash Sakunthala",
    position: "Co-Worker | Taxfix",
    message:
      "Prateek is a gem to work with! He is quite skilled and there's always something you can learn from talking to him",
  },
  {
    image: "/t-avt-3.png",
    name: "Dhananjay Jha",
    position: "Manager | Nucleus Software",
    message:
      "Prateek's grasping power is quite good, he's able to understand the tasks and come up with good solutions for various issues fairly quickly!",
  },
];

const TestimonialSlider = () => (
  <Swiper
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    className="h-[400px]"
  >
    {testimonialData.map((person, index) => (
      <SwiperSlide key={index}>
        <div
          className="flex flex-col items-center md:flex-row gap-x-8 
        h-full px-16"
        >
          <div
            className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative
          mx-auto "
          >
            <div className="flex flex-col justify-center text-center">
              <div className="mb-2 mx-auto">
                <Image src={person.image} width={100} height={100} alt="" />
              </div>
              <div className="text-lg">{person.name}</div>
              <div className="text-[12px] uppercase font-extralight tracking-widest">
                {person.position}
              </div>
            </div>
          </div>
          <div
            className="flex flex-1 flex-col justify-center before:w-[1px]
            xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px]
            relative xl:pl-20 "
          >
            <div className="mb-4 ">
              <FaQuoteLeft
                className="text-4xl xl:text-6xl text-white/20 mx-auto
                md:mx-0 "
              />
            </div>
            <div className="xl:text-lg text-center md:text-left">
              {person.message}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default TestimonialSlider;
