import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { achivementsData } from './AchivementsData';

const Achivements = () => {
    const sliderRef = useRef(null);

    return (
        <div className="section-box mt-4" id="achievement">
            <div className="row mb-4">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={achivementsData.mainData.title}>
                        {achivementsData.mainData.title}
                    </h6>
                    <h1>{achivementsData.mainData.title2}</h1>
                    <p>{achivementsData.mainData.description}</p>
                </div>
            </div>

            <div className="achievements-carousel-wrapper">
                {/* Left Navigation Arrow */}
                <button
                    className="achievements-nav-btn achievements-nav-prev"
                    onClick={() => sliderRef.current?.slidePrev()}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <Swiper
                    onSwiper={(swiper) => (sliderRef.current = swiper)}
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={24}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 24,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    className="achievements-swiper"
                >
                    {achivementsData.achivements.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="achievement-card">
                                <div className="achievement-image-wrapper">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        placeholder="blur"
                                        className="achievement-image"
                                    />
                                </div>
                                <div className="achievement-content">
                                    <h5 className="achievement-title">{item.name}</h5>
                                    <span className="achievement-issuer">{item.issuer}</span>
                                    <a
                                        href={item.certificateUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="achievement-link"
                                    >
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Right Navigation Arrow */}
                <button
                    className="achievements-nav-btn achievements-nav-next"
                    onClick={() => sliderRef.current?.slideNext()}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <style jsx global>{`
                .achievements-carousel-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .achievements-swiper {
                    width: 100%;
                    padding: 0.5rem 0;
                }

                .achievements-nav-btn {
                    flex-shrink: 0;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .achievements-nav-btn:hover {
                    background: var(--primary-color, #8b5cf6);
                    border-color: var(--primary-color, #8b5cf6);
                    transform: scale(1.05);
                }

                .achievement-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 1rem;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .achievement-card:hover {
                    border-color: rgba(255, 255, 255, 0.15);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                }

                .achievement-image-wrapper {
                    position: relative;
                    width: 100%;
                    height: 280px;
                    background: #fff;
                    overflow: hidden;
                }

                .achievement-image {
                    transition: transform 0.3s ease;
                }

                .achievement-card:hover .achievement-image {
                    transform: scale(1.02);
                }

                .achievement-content {
                    padding: 1.5rem;
                    text-align: center;
                }

                .achievement-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    color: var(--text-color, #fff);
                }

                .achievement-issuer {
                    display: block;
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin-bottom: 1rem;
                }

                .achievement-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.7rem 1.5rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.7);
                    border: 2px dashed rgba(255, 255, 255, 0.3);
                    border-radius: 2rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    background: transparent;
                }

                .achievement-link:hover {
                    border-color: var(--primary-color, #8b5cf6);
                    color: var(--primary-color, #8b5cf6);
                    background: rgba(139, 92, 246, 0.1);
                }

                .achievement-link-disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .achievements-nav-btn {
                        width: 40px;
                        height: 40px;
                    }

                    .achievement-image-wrapper {
                        height: 220px;
                    }

                    .achievement-content {
                        padding: 1rem;
                    }

                    .achievement-title {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default Achivements;