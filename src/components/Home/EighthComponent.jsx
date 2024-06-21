import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonial from "../../assets/testimonial-1.jpg"
import { Autoplay } from 'swiper/modules';

const EighthComponent = () => {
    const [swiper, setSwiper] = useState()
    function handleNext() {
        swiper.slideNext();
    }
    function handlePrev() {
        swiper.slidePrev();
    }

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    };
    return (
        <div className="slider-1 py-32 bg-gray">
            <div className="container px-4 sm:px-8">
                <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">What do users think about Pavo</h2>


                <div className="slider-container">
                    <div className="swiper-container card-slider">
                        <Swiper 
                        className="swiper-wrapper" 
                        modules={[Autoplay]}
                        slidesPerView={3}
                    spaceBetween={50}
                    breakpoints={breakpoints}
                    autoplay={{ delay: 3000 }}
                    onSwiper={(swiper) => {
                        setSwiper(swiper)
                    }}>

                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <img className="card-image" src={Testimonial} alt="alternative" />
                                    <div className="card-body">
                                        <p className="italic mb-3">It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great</p>
                                        <p className="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <img className="card-image" src={Testimonial} alt="alternative" />
                                    <div className="card-body">
                                        <p className="italic mb-3">It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great</p>
                                        <p className="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <img className="card-image" src={Testimonial} alt="alternative" />
                                    <div className="card-body">
                                        <p className="italic mb-3">It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great</p>
                                        <p className="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <img className="card-image" src={Testimonial} alt="alternative" />
                                    <div className="card-body">
                                        <p className="italic mb-3">It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great</p>
                                        <p className="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <img className="card-image" src={Testimonial} alt="alternative" />
                                    <div className="card-body">
                                        <p className="italic mb-3">It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great</p>
                                        <p className="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <div className="swiper-button-next" onClick={() => { handleNext() }}></div>
                        <div className="swiper-button-prev" onClick={() => { handlePrev() }}></div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default EighthComponent