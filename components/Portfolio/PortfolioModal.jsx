import React from 'react';
import Image from 'next/image';
import { X, Github, ExternalLink } from 'lucide-react';

const BehanceIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ marginRight: '0.5rem' }}
    >
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
);

const PortfolioModal = ({ project, onClose, navigationList }) => {
    if (!project) return null;

    const hasProjectLinks = project.githubUrl || project.behanceUrl || project.liveUrl;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="portfolio-modal-backdrop" onClick={handleBackdropClick}>
            <div className="portfolio-modal">
                <button className="portfolio-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="portfolio-modal-content">
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <h6 className="mono-heading mb-0">Client:</h6>
                            <p>{project.client}</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h6 className="mono-heading mb-0">Services:</h6>
                            <p>{project.services}</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h6 className="mono-heading mb-0">Duration:</h6>
                            <p>{project.duration}</p>
                        </div>
                    </div>
                    <div className="row g-4 mt-2">
                        <div className="col-12 col-md-4">
                            <h6 className="mono-heading mb-0">Categories:</h6>
                            <p>
                                {project.categories
                                    .map((categoryKey) => {
                                        const categoryTitle = navigationList?.find(
                                            (nav) => nav.dataFilter.slice(1) === categoryKey
                                        )?.title;
                                        return categoryTitle || categoryKey;
                                    })
                                    .join(', ')}
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h6 className="mono-heading mb-0">Tools:</h6>
                            <p>{project.tools ? project.tools.join(', ') : 'N/A'}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2>{project.projectTitle}</h2>
                        <p>{project.description}</p>
                        {hasProjectLinks && (
                            <ul className="list-inline-pills mt-3">
                                {project.githubUrl && (
                                    <li>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="d-flex align-items-center"
                                        >
                                            <Github className="me-2" size={16} />
                                            GitHub
                                        </a>
                                    </li>
                                )}
                                {project.behanceUrl && (
                                    <li>
                                        <a
                                            href={project.behanceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="d-flex align-items-center"
                                        >
                                            <BehanceIcon />
                                            Behance
                                        </a>
                                    </li>
                                )}
                                {project.liveUrl && (
                                    <li>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="d-flex align-items-center"
                                        >
                                            <ExternalLink className="me-2" size={16} />
                                            Live Preview
                                        </a>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>

                    {project.videoUrl && (
                        <div className="mt-4 video-wrapper">
                            <iframe
                                width="100%"
                                height="315"
                                src={project.videoUrl.replace('watch?v=', 'embed/')}
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    <div className="row g-4 mt-2">
                        <div className="col-12">
                            <Image
                                className="border-radius"
                                src={project.mainImage}
                                alt={project.projectTitle}
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .portfolio-modal-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    animation: fadeIn 0.3s ease;
                }

                .portfolio-modal {
                    background: var(--bg-color, #1a1a2e);
                    border-radius: 1rem;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: slideUp 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                /* Custom Scrollbar Styles */
                .portfolio-modal::-webkit-scrollbar {
                    width: 8px;
                }

                .portfolio-modal::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }

                .portfolio-modal::-webkit-scrollbar-thumb {
                    background: var(--primary-color, #8b5cf6);
                    border-radius: 4px;
                    transition: background 0.3s ease;
                }

                .portfolio-modal::-webkit-scrollbar-thumb:hover {
                    background: var(--primary-color-hover, #7c3aed);
                }

                /* Firefox scrollbar */
                .portfolio-modal {
                    scrollbar-width: thin;
                    scrollbar-color: var(--primary-color, #8b5cf6) rgba(255, 255, 255, 0.05);
                }

                .portfolio-modal-close {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    z-index: 10;
                }

                .portfolio-modal-close:hover {
                    background: var(--primary-color, #8b5cf6);
                }

                .portfolio-modal-content {
                    padding: 2rem;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Prevent body scroll when modal is open */
                body.modal-open {
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default PortfolioModal;
