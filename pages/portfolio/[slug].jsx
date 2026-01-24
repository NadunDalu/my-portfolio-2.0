import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { BackgroundImages, Header, Lightbox, PortfolioNavigation } from '@/components';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { Github, ExternalLink } from 'lucide-react';

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

const PortfolioPage = ({ project }) => {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const hasProjectLinks = project.githubUrl || project.behanceUrl || project.liveUrl;

    return (
        <>
            <Head>
                <title>{project.projectTitle}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <Header />
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <PortfolioNavigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" id="portfolio">
                        <div className="sections-wrapper">
                            <div className="section-box">
                                <div className="row g-4">
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Client:</h6>
                                        <p>{project.client}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Services:</h6>
                                        <p>{project.services}</p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Duration:</h6>
                                        <p>{project.duration}</p>
                                    </div>
                                </div>
                                <div className="row g-4 mt-4">
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Categories:</h6>
                                        <p>
                                            {project.categories
                                                .map((categoryKey) => {
                                                    const categoryTitle = portfolioData.navigationList.find(
                                                        (nav) => nav.dataFilter.slice(1) === categoryKey
                                                    )?.title;
                                                    return categoryTitle || categoryKey;
                                                })
                                                .join(', ')}
                                        </p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <h6 className="mono-heading mb-0">Tools:</h6>
                                        <p>{project.tools ? project.tools.join(', ') : 'N/A'}</p> {/* Render tools */}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h1>{project.projectTitle}</h1>
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
                                        <Image className="border-radius" src={project.mainImage} alt={project.projectTitle} placeholder="blur" />
                                    </div>
                                    {project.images.map((item, index) => (
                                        <div
                                            className="col-12 col-xl-6"
                                            key={index}
                                            onClick={() => openLightbox(item.image)}
                                        >
                                            {/* Additional images can be displayed here */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {lightboxImage && (
                            <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
                        )}
                    </div>
                </div>
                <BackgroundImages />
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const paths = portfolioData.projects.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;
    const project = portfolioData.projects.find((project) => project.slug === slug);

    if (!project) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            project,
        },
    };
}

export default PortfolioPage;
