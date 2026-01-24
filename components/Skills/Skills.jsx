import React, { useEffect, useRef, useState } from 'react';
import { skillData } from './SkillData';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    return (
        <div className="section-box mt-4" id="skills" ref={sectionRef}>
            <div className="row mb-4">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={skillData.mainData.title}>
                        {skillData.mainData.title}
                    </h6>
                    <h1>{skillData.mainData.title}</h1>
                    <p>{skillData.mainData.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex gap-4 flex-wrap align-items-center">
                        {skillData.technical.map((skill, index) => (
                            <div
                                key={index}
                                className={`skill-icon-wrapper ${isVisible ? 'flip' : ''}`}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <skill.icon className="display-5" />
                                <p className="skill-name">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .skill-icon-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                    opacity: 0;
                }

                .skill-icon-wrapper.flip {
                    animation: flipIcon 0.6s ease-out forwards;
                }

                .skill-name {
                    margin-top: 8px;
                    font-size: 1rem;
                    text-align: center;
                }

                @keyframes flipIcon {
                    0% {
                        opacity: 0;
                        transform: rotateY(-180deg);
                    }
                    100% {
                        opacity: 1;
                        transform: rotateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default Skills;
