import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioItem = ({ imageSrc, categories = [], projectTitle, slug }) => {
    return (
        <div className={`col-12 col-xl-4 portfolio-item ${Array.isArray(categories) ? categories.join(' ') : ''}`}>
            <div className="portfolio-box">
                <Link href={`/portfolio/${slug}`}>
                    <Image
                        src={imageSrc || '/images/default.jpg'}
                        alt={projectTitle}
                        placeholder={imageSrc ? 'blur' : 'empty'}
                    />
                </Link>
                <span className="portfolio-category">{Array.isArray(categories) ? categories.join(', ') : ''}</span>
                <div className="portfolio-caption">
                    <h1>
                        <Link href={`/portfolio/${slug}`}>{projectTitle}</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItem;