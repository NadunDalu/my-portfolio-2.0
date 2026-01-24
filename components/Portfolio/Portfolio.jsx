// Updated code for Portfolio.jsx
import React, { useState } from 'react';
import { PortfolioItem } from '../';
import { portfolioData } from './PortfolioData';

const ITEMS_PER_PAGE = 6; // Max projects per page

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const filteredProjects = selectedFilter === ''
        ? portfolioData.projects
        : portfolioData.projects.filter((item) => item.categories.includes(selectedFilter));

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    const paginatedProjects = filteredProjects.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const canGoNext = currentPage < totalPages - 1;
    const canGoPrevious = currentPage > 0;

    return (
        <div className="section-box mt-4 position-relative" id="portfolio">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-12">
                    <h6 className="title-heading mb-3" data-backdrop-text={portfolioData.mainData.title}>{portfolioData.mainData.title}</h6>
                    <h1>{portfolioData.mainData.title2}</h1>
                    <p>{portfolioData.mainData.description}</p>
                </div>
            </div>
            <div className="filter mt-4 mt-lg-5 mb-3">
                <ul>
                    <li
                        onClick={() => {
                            setSelectedFilter('');
                            setCurrentPage(0);
                        }}
                        className={selectedFilter === '' ? 'mixitup-control-active' : ''}
                    >
                        Show All
                    </li>
                    {portfolioData.navigationList.map((listItem, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelectedFilter(listItem.dataFilter.slice(1));
                                setCurrentPage(0);
                            }}
                            className={selectedFilter === listItem.dataFilter.slice(1) ? 'mixitup-control-active' : ''}
                        >
                            {listItem.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row g-4 portfolio-grid">
                {paginatedProjects.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        imageSrc={item.imageSrc}
                        categories={item.categories}
                        projectTitle={item.projectTitle}
                        slug={item.slug}
                    />
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="filter mt-4 portfolio-navigation">
                <ul>
                    <li
                        onClick={canGoPrevious ? goToPreviousPage : undefined}
                        className={!canGoPrevious ? 'mixitup-control-active' : ''}
                        style={{ 
                            cursor: canGoPrevious ? 'pointer' : 'default',
                            opacity: canGoPrevious ? 1 : 0.5,
                            pointerEvents: canGoPrevious ? 'auto' : 'none'
                        }}
                    >
                        &#8592; Previous
                    </li>
                    <li
                        onClick={canGoNext ? goToNextPage : undefined}
                        className={!canGoNext ? 'mixitup-control-active' : ''}
                        style={{ 
                            cursor: canGoNext ? 'pointer' : 'default',
                            opacity: canGoNext ? 1 : 0.5,
                            pointerEvents: canGoNext ? 'auto' : 'none'
                        }}
                    >
                        Next &#8594;
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;
