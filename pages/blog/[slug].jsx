import React from 'react'
import { Header, BackgroundImages } from '@/components'
import Head from 'next/head'
import Link from 'next/link'

const BlogRedirect = () => {
    // Redirect to Medium immediately when page loads
    React.useEffect(() => {
        window.location.href = "https://medium.com/@nadundaluwatta26";
    }, []);

    return (
        <>
            <Head>
                <title>Redirecting to Medium</title>
                <meta name="description" content="Redirecting to Medium blog posts" />
                <meta httpEquiv="refresh" content="0;url=https://medium.com/@nadundaluwatta26" />
            </Head>
            <div className="container">
                <Header />
                <div className="text-center mt-5">
                    <p>Redirecting to Medium blog posts...</p>
                    <Link 
                        href="https://medium.com/@nadundaluwatta26" 
                        className="button button-primary"
                    >
                        Click here if not redirected
                    </Link>
                </div>
                <BackgroundImages />
            </div>
        </>
    )
}

// Remove getStaticPaths and getStaticProps

export default BlogRedirect