import {
  RxMobile,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Service } from "../utils/types";

const serviceData: Service[] = [
  {
    icon: <RxMobile />,
    title: "Mobile App Development",
    description:
      "Development for Hybrid React Native Applications (Android/iOS) with covered use cases for Native Modules if need be",
  },
  {
    icon: <RxDesktop />,
    title: "Full Stack Development",
    description:
      "MERN Stack Development with Next.JS for ease of SEO and Typescript for maintenance and scalability",
  },
  {
    icon: <RxPencil2 />,
    title: "Portfolio Website Development",
    description:
      "Developing Portfolio Single Page Websites for clients from all walks of life",
  },
  {
    icon: <RxReader />,
    title: "Technical Architecture Consultant",
    description:
      "Reviewing the Technical Architecture and suggesting changes for Optimizing, Security and Scalability",
  },
  {
    icon: <RxRocket />,
    title: "Scrum Management",
    description:
      "Managing the Agile Development Lifecycle and fine-tuning the process.",
  },
];

const ServiceSlider = () => (
  <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[320px] sm:h-[380px]"
  >
    {serviceData.map((item, index) => (
      <SwiperSlide key={index}>
        <div
          className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col 
        gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 justify-between"
        >
          <div className="text-4xl text-accent mb-4">{item.icon}</div>
          <div className="mb-8">
            <div className="mb-2 text-lg h-[90px]">{item.title}</div>
            <p className="max-w-[350px] leading-normal text-xs h-[120px]">
              {item.description}
            </p>
          </div>
          <div className="text-3xl">
            <RxArrowTopRight
              className="group hover:rotate-45 group-hover:text-accent transition-all duration-300 
            "
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ServiceSlider;
