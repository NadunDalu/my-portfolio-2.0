import React from 'react'
import Link from 'next/link'
import { blogData } from './BlogData'

const Blog = () => {
    const latestPost = blogData.posts[0]

    return (
        <div className="section-box mt-4" id="blog">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text="Blog">Blog</h6>
                    <h1>Latest Blog Post</h1>
                    <p>Check out my latest article on Medium</p>
                </div>
            </div>
            <div className="mt-4 mt-lg-5">
                <div className="blog-post-box">
                    <div className="blog-post-img">
                        <Link href={latestPost.url} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={latestPost.image} 
                                alt={latestPost.title} 
                            />
                        </Link>
                        <div className="blog-post-category">
                            <Link href={latestPost.url} target="_blank" rel="noopener noreferrer">
                                {latestPost.category}
                            </Link>
                        </div>
                    </div>
                    <div className="blog-post-caption">
                        <p className="mb-2">Posted on {latestPost.date}</p>
                        <h2 className="h4">
                            <Link 
                                href={latestPost.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="link-decoration"
                            >
                                {latestPost.title}
                            </Link>
                        </h2>
                        <Link 
                            className="button button-xs button-outline-dark mt-10" 
                            href={latestPost.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Continue Reading
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog