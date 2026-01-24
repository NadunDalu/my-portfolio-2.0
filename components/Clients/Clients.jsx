import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { clientsData } from './ClientsData';
import Link from 'next/link';

const Clients = () => {
    return (
        <div className="section-box mt-4" id="clients">
            <div className="row align-items-center">
                <div className="col-6">
                    <h2
                        className="title-heading mb-4"
                        data-backdrop-text={clientsData.mainData.title}
                    >
                        {clientsData.mainData.title2}
                    </h2>
                </div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                    bulletClass: 'swiper-pagination-bullet',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                className="clients-swiper mt-4"
            >
                {clientsData.clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="client-box">
                            <Link href={client.url} passHref>
                                <img
                                    src={client.logo}
                                    alt={`Client Logo ${index + 1}`}
                                    width="60" // Reduced from 70
                                    height="60" // Reduced from 70
                                    style={{ objectFit: 'contain' }}
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                .clients-swiper {
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

export default Clients;
