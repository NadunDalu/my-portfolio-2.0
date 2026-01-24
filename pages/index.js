import Head from 'next/head'
import { BackgroundImages, Header, Navigation, About, Portfolio, Services, Testimonial, Clients, Achivements, Blog, Connect, Map, Education, Skills } from '@/components'
import { mainData } from '@/lib/data'

export default function Home() {
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                {/* Header */}
                <Header />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <Navigation />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="sections-wrapper">
                            {/* About Section */}
                            <About />
                            {/* Services Section */}
                            <Services />
                            {/* Education Section */}
                            <Education />
                            {/* Skills Section */}
                            <Skills />
                            {/* Portfolio Section */}
                            <Portfolio />
                            {/* Achivements Section */}
                            <Achivements />
                            {/* Testimonial Section */}
                            <Testimonial />
                            {/* Clients Section */}
                            <Clients />
                            {/* Blog Section */}
                            <Blog />
                            {/* Connect Section */}
                            <Connect />
                            
                        </div>
                    </div>
                </div>  {/* end main row */}
                {/* <bout */}
                {/*Background Vertical lines  */}
                <BackgroundImages />
            </div>
        </>
    )
}
