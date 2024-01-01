import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import regularBlogs from "../../public/blogs.json";
import devBlogs from "../../public/blogsDev.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import Image from "next/image";

import {Navigation, FreeMode} from "swiper/modules";

const Blogs = ({currentTab}) => {
  let blogs = currentTab === "features" ? regularBlogs : devBlogs;

  return (
    <div className="lg:mt-[30px] mt-[20px]">
      <div className="swiper-wrapper relative w-full">
        <Swiper
          spaceBetween={40}
          slidesPerView={4}
          navigation={{prevEl: ".button-prev", nextEl: ".button-next"}}
          modules={[Navigation, FreeMode]}
          className="mySwiper"
          freeMode={true}
          breakpoints={{
            240: {
              slidesPerView: "auto",
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="w-[262px] p-[15px] bg-[#FFF] rounded-[10px] border">
                <Image src={blog.photo} alt="blog image" height={184} width={232} />
                <h3 className="font-semibold text-base text-green pt-[15px] pb-[10px]">{blog.title}</h3>
                <p className="text-sm">{blog.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="cursor-pointer">
          <div className="button-prev border absolute hover:bg-gray-300 -left-4 z-20 top-[43%] bg-white h-[32px] w-[32px] rounded-full flex justify-center items-center">
            <Image src={"/buttonPrev.png"} alt="button prev icon" height={21} width={21} />
          </div>
          <div className="button-next border absolute hover:bg-gray-300 -right-4 z-20 top-[43%] bg-white h-[32px] w-[32px] rounded-full flex justify-center items-center">
            <Image src={"/buttonNext.png"} alt="button prev icon" height={21} width={21} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
