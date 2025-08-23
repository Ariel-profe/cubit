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
import { ProductImage } from "./product-image";


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
                    '--swiper-navigation-color': '#00f',
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
                            <ProductImage src={image} alt={`${title}`} className="object-contain w-full aspect-square rounded" />
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
                            <ProductImage src={image} alt={`${title}`} className="object-contain rounded w-[300px] h-[300px] aspect-square cursor-pointer" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
