import React from 'react'
import Image from 'next/image'
import { experienceData } from './ExperienceData'

const Experience = () => {
    return (
        <div className="section-box mt-4" id="experience">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={experienceData.mainData.title}>{experienceData.mainData.title}</h6>
                    <h1>{experienceData.mainData.title2}</h1>
                </div>
            </div>
            <div className="row g-4 mt-5">
                <style>{`
                    .experience-timeline-container {
                        position: relative;
                        padding-left: 20px;
                        padding-top: 10px;
                    }
                    /* Vertical Dotted Line */
                    .experience-timeline-container::before {
                        content: '';
                        position: absolute;
                        left: 20px;
                        top: 0;
                        bottom: 0;
                        width: 1px;
                        border-left: 2px dotted rgba(255, 255, 255, 0.3);
                    }
                    
                    /* Top Icon */
                    .timeline-icon-top-exp {
                        position: absolute;
                        left: 5px;
                        top: -40px;
                        font-size: 2rem;
                        color: #fff;
                    }

                    .timeline-item-exp {
                        position: relative;
                        padding-left: 60px;
                        margin-bottom: 50px;
                    }
                    .timeline-item-exp:last-child {
                        margin-bottom: 0;
                    }

                    /* Timeline Dot */
                    .timeline-dot-exp {
                        position: absolute;
                        left: 15px; /* Aligned with vertical line */
                        top: 18px; /* Aligned with connector */
                        width: 12px;
                        height: 12px;
                        background: #fff;
                        border-radius: 50%;
                        z-index: 2;
                    }

                    /* Horizontal Connector Line */
                    .timeline-connector-exp {
                        position: absolute;
                        left: 20px;
                        top: 23px;
                        width: 40px;
                        height: 1px;
                        border-top: 2px dotted rgba(255, 255, 255, 0.3);
                    }

                    /* Date Pill */
                    .date-badge-exp {
                        display: inline-block;
                        padding: 8px 25px;
                        border: 1px dashed rgba(255, 255, 255, 0.4);
                        border-radius: 50px;
                        color: #fff;
                        font-family: monospace;
                        font-size: 0.9rem;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-bottom: 15px;
                        background: rgba(255, 255, 255, 0.05);
                    }

                    .exp-degree {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #fff;
                        margin-bottom: 5px;
                    }

                    .exp-specialization {
                        color: #a855f7;
                        font-size: 0.95rem;
                        font-weight: 600;
                        margin-bottom: 8px;
                        margin-top: -2px;
                    }

                    .exp-meta {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: rgba(255, 255, 255, 0.6);
                        font-size: 0.95rem;
                    }
                    
                    .exp-meta i {
                        font-size: 0.9rem;
                    }

                    .exp-logo-wrapper {
                        flex-shrink: 0;
                        width: 60px;
                        height: 60px;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 5px;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    @media (max-width: 768px) {
                        .experience-timeline-container {
                            padding-left: 10px;
                        }
                        .experience-timeline-container::before {
                            left: 10px;
                        }
                        .timeline-dot-exp {
                            left: 5px;
                        }
                        .timeline-connector-exp {
                            left: 10px;
                            width: 30px;
                        }
                        .timeline-item-exp {
                            padding-left: 50px;
                        }
                        .exp-logo-wrapper {
                            width: 50px;
                            height: 50px;
                        }
                    }
                `}</style>
                <div className="col-12">
                    <div className="experience-timeline-container">
                        <div className="timeline-icon-top-exp">
                            <i className="bi bi-briefcase"></i>
                        </div>
                        {experienceData.experience.map((item, index) => (
                            <div key={index} className="timeline-item-exp">
                                <div className="timeline-dot-exp"></div>
                                <div className="timeline-connector-exp"></div>
                                <div className="exp-content">
                                    <div>
                                        <span className="date-badge-exp">{item.date}</span>
                                    </div>
                                    <div className="d-flex gap-3 gap-md-4 align-items-start">
                                        <div className="exp-logo-wrapper">
                                            <Image
                                                src={item.image}
                                                alt={item.university}
                                                width={50}
                                                height={50}
                                                className="object-contain"
                                                style={{ width: '100%', height: '100%' }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="exp-degree">{item.degree}</h3>
                                            <div className="exp-specialization">{item.specialization}</div>
                                            <div className="exp-meta">
                                                <i className="bi bi-geo-alt-fill"></i>
                                                <span>{item.university}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
