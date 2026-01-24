import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialData } from './TestimonialData';

const Testimonial = () => {
    return (
        <div className="section-box mt-4" id="testimonial">
            <div className="row align-items-center">
                <div className="col-6">
                    <h6 className="title-heading mb-0" data-backdrop-text={testimonialData.mainData.title}>
                        {testimonialData.mainData.title2}
                    </h6>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1800,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    bulletClass: 'swiper-pagination-bullet',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
                className="testimonial-swiper mt-4"
            >
                {testimonialData.testimonial.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-box">
                            <div className="d-block text-yellow mb-3">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>{item.description}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <div className="d-inline-block me-3">
                                <Image
                                    className="img-mask-avatar-sm"
                                    src={item.avatar}
                                    alt={item.name}
                                    placeholder="blur"
                                />
                            </div>
                            <div className="d-inline-block">
                                <h5 className="fw-medium m-0 line-height-140">{item.name}</h5>
                                <span className="font-small fw-normal">{item.jobTitle}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                .testimonial-swiper {
                    padding-bottom: 50px;
                }
                .swiper-pagination {
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                }
                .swiper-pagination-bullet {
                    position: relative;
                    width: 12px;
                    height: 12px;
                    background-color: transparent;
                    border: 2px solid #666;
                    border-radius: 50%;
                    opacity: 0.5;
                    margin: 0 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    width: 6px;
                    height: 6px;
                    background-color: #666;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    border-color: #333;
                }
                .swiper-pagination-bullet-active::after {
                    background-color: #333;
                    transform: translate(-50%, -50%) scale(1);
                }
                .swiper-pagination-bullet:hover {
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
};

export default Testimonial;