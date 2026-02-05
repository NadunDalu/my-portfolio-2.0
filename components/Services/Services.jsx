import React from 'react'
import { servicesData } from './ServicesData'
import { PencilIcon, EyeIcon } from '@heroicons/react/outline';

const Services = () => {
    return (
        <div className="section-box mt-4" id="services">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={servicesData.mainData.title}>{servicesData.mainData.title}</h6>
                    <h1>{servicesData.mainData.title2}</h1>
                    <p>{servicesData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4">
                <style>{`
                    .glass-card {
                        background: rgba(42, 9, 68, 0.5);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 20px;
                        padding: 25px;
                        transition: all 0.4s ease;
                        position: relative;
                        overflow: hidden;
                        height: 260px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .glass-card:hover {
                        background: rgba(42, 9, 68, 0.8);
                        transform: translateY(-5px);
                        box-shadow: 0 15px 30px rgba(0,0,0,0.5);
                        border-color: rgba(255, 255, 255, 0.2);
                    }
                    .card-content {
                        transition: all 0.4s ease;
                        z-index: 2;
                    }
                    .glass-card:hover .card-content {
                        transform: translateY(-15px);
                    }
                    .card-number {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: rgba(255, 255, 255, 0.05);
                        position: absolute;
                        bottom: -5px;
                        right: 15px;
                        line-height: 1;
                        transition: all 0.4s ease;
                    }
                    .glass-card:hover .card-number {
                        opacity: 0;
                    }
                    .card-icon {
                        font-size: 2rem;
                        color: rgba(255, 255, 255, 0.9);
                        margin-bottom: 15px;
                    }
                    .card-title {
                        color: #fff;
                        font-weight: 600;
                        font-size: 1rem;
                        margin-bottom: 0;
                        letter-spacing: 0.5px;
                    }
                    .card-description {
                        font-size: 0.85rem;
                        line-height: 1.4;
                        color: #ddd;
                        margin-top: 10px;
                        opacity: 0;
                        transform: translateY(20px);
                        transition: all 0.4s ease;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    .glass-card:hover .card-description {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}</style>
                {servicesData.services.map((item, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-3">
                        <div className="glass-card">
                            <span className="card-number">{item.number}</span>
                            <div className="card-content">
                                <div className="card-icon text-gradient">
                                    <i className={`${item.bootstrapIcon}`}></i>
                                </div>
                                <h5 className="card-title font-family-mono">{item.title}</h5>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services