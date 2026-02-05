import Image from 'next/image';
import React from 'react';

const PortfolioItem = ({ imageSrc, categories = [], projectTitle, project, onProjectClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onProjectClick && project) {
            onProjectClick(project);
        }
    };

    return (
        <div className={`col-12 col-xl-4 portfolio-item ${Array.isArray(categories) ? categories.join(' ') : ''}`}>
            <div
                className="portfolio-box"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <Image
                    src={imageSrc || '/images/default.jpg'}
                    alt={projectTitle}
                    placeholder={imageSrc ? 'blur' : 'empty'}
                />
                <span className="portfolio-category">{Array.isArray(categories) ? categories.join(', ') : ''}</span>
                <div className="portfolio-caption">
                    <h4>{projectTitle}</h4>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;