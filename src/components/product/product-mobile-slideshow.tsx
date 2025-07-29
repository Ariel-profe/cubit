"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';
import { ProductImage } from "./product-image";

interface Props {
    images: string[];
    title: string;
    className?: string;
};

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {

    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '90vw',
                    height: '400px'
                }}
                pagination
                autoplay={{
                    delay: 4500,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    images.map((image) => (
                        <SwiperSlide key={image}>
                            <ProductImage src={image} alt={`${title}`} className="object-contain w-[450px] h-[600px]" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
