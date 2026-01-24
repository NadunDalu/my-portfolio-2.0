import React from 'react'
import { eduData } from './EduData'

const Education = () => {
    return (
        <div className="section-box mt-4" id="education">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={eduData.mainData.title}>{eduData.mainData.title}</h6>
                    <h1>{eduData.mainData.title2}</h1>
                    <p>{eduData.mainData.description}</p>
                </div>
            </div>
            <div className="row g-4 g-lg-5 mt-0">
                <div className="col-12 col-xl-6">
                    <div className="resume-wrapper">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-mortarboard line-height-100"></i>
                        </div>
                        {eduData.education.map((item, index) => (
                            <div key={index} className="resume-box">
                                <span className="resume-date">{item.date}</span>
                                <h5 className="fw-medium">{item.degree}</h5>
                                <span>@ {item.university}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div className="resume-wrapper">
                        <div className="icon-2xl text-black mb-3">
                            <i className="bi bi-briefcase line-height-100"></i>
                        </div>
                        {eduData.experience.map((item, index) => (
                            <div key={index} className="resume-box">
                                <span className="resume-date">{item.date}</span>
                                <h5 className="fw-medium">{item.degree}</h5>
                                <span>@ {item.university}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education