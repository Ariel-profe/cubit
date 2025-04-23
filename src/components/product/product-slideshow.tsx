"use client";

import { useState, CSSProperties } from "react";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';


interface Props {
    images: string[];
    title: string;
    className?: string;
};

export const ProductSlideshow = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as CSSProperties}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 4500,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map((image) => (
                        <SwiperSlide key={image}>
                            <img src={`/products/${image}`} alt={`${title}`} className="object-contain w-[600px] h-[600px] rounded" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map((image) => (
                        <SwiperSlide key={image}>
                            <img src={`/products/${image}`} alt={`${title}`} className="object-contain rounded w-[300px] h-[300px] cursor-pointer" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
